import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import Remarkable from 'remarkable';

const propTypes = {
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired,
  edit: PropTypes.string
};

const defaultProps = {
  url: '/editor/comments',
  pollInterval: 2000,
  edit: null
};

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      data: []
    };
    //this._itemOnClick = this._itemOnClick.bind(this);
  }

  _loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this._loadCommentsFromServer();
    setInterval(this._loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  _componentRenderForm() {
    if (!this.props.edit) { return null; }
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="cards">
        <CommentList data={this.state.data} />
        <br />
        <div>{ this._componentRenderForm() }</div>
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map((comment, index) => {
      return (<Comment author={comment.author} key={index}>
      {comment.text}
      </Comment>)
    });
    return (<div className="commentList">
    {commentNodes}
    </div>)
  }
}

class CommentForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var author = ReactDom.findDOMNode(this.refs.author).value.trim();
    var text = ReactDom.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    ReactDom.findDOMNode(this.refs.author).value = '';
    ReactDom.findDOMNode(this.refs.text).value = '';
    return;
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <h3>New Comment</h3>
        <div className="form-group">
          <input type="text" placeholder="Your name" ref="author" className="form-control" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Your comment" ref="text" className="form-control" />
        </div>
        <div className="form-group">
          <input type="submit" value="Post" className="btn btn-default" />
        </div>
      </form>
    )
  }
}

class Comment extends React.Component {
  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h4 className="commentAuthor">
          {this.props.author}
        </h4>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <hr />
      </div>
    );
  }
}

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;

export default Cards;
