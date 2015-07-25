
var Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired
    }),
    onDelete: React.PropTypes.func.isRequired
  },
  componentWillMount() {
    console.log('Todo componentWillMount');
  },
  componentWillReceiveProps(nextProps) {
    console.log('Todo componentWillReceiveProps', arguments);
    this.setState({
      count: nextProps.count
    });
  },
  getInitialState() {
    console.log('Todo getInitialState');
    return {
      count: this.props.count
    };
  },
  render() {
    console.log('Todo render', this.state);
    return (
      <div>
        <span>{this.props.todo.text}: </span>
        <span>state.count = {this.state.count}</span>
        {/*
        <span>{this.props.count}a</span>
        */}
      </div>
    );
  }
});

var TodoList = React.createClass({
  getInitialState() {
    console.log('TodoList getInitialState');
    return {
      count: 1,
      todos: [
        {id: 1, text: "item"}
      ]
    };
  },
  _handleClickIncrementCounter(e) {
    console.log('TodoList onClick');
    this.setState({
      count: this.state.count + 1
    });
  },
  componentDidMount() {
    console.log('TodoList componentDidMount');
  },
  componentWillReceiveProps(nextProps) {
    console.log('TodoList componentWillReceiveProps', arguments);
  },
  render() {
    console.log('TodoList render', this.state);
    var todos = this.state.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo onDelete={this.deleteTodo} todo={todo} count={this.state.count}/>
        </li>
      );
    });
    var c = (
      <ul>
        {todos}
        <button onClick={this._handleClickIncrementCounter}>Increment Counter</button>
      </ul>
    );
    console.log(c.props.children);
    return c;
  }
});

React.render(<TodoList />, document.body);

// /**
//  * This file provided by Facebook is for non-commercial testing and evaluation purposes only.
//  * Facebook reserves all rights not expressly granted.
//  *
//  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
//  * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//  * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//  */

// var Comment = React.createClass({
//   render: function() {
//     var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
//     var a = 'neko';
//     return (
//       <div className="comment">
//         <h2 className="commentAuthor">
//           <div>{a}</div>
//           {this.props.author}bb
//         </h2>
//         <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
//       </div>
//     );
//   }
// });

// var CommentBox = React.createClass({
//   loadCommentsFromServer: function() {
//     $.ajax({
//       url: this.props.url,
//       dataType: 'json',
//       cache: false,
//       success: function(data) {
//         this.setState({data: data});
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   },
//   handleCommentSubmit: function(comment) {
//     var comments = this.state.data;
//     comments.push(comment);
//     this.setState({data: comments}, function() {
//       // `setState` accepts a callback. To avoid (improbable) race condition,
//       // `we'll send the ajax request right after we optimistically set the new
//       // `state.
//       $.ajax({
//         url: this.props.url,
//         dataType: 'json',
//         type: 'POST',
//         data: comment,
//         success: function(data) {
//           this.setState({data: data});
//         }.bind(this),
//         error: function(xhr, status, err) {
//           console.error(this.props.url, status, err.toString());
//         }.bind(this)
//       });
//     });
//   },
//   getInitialState: function() {
//     return {
//       data: [],
//       count: 2
//     };
//   },
//   componentDidMount: function() {
//     this.loadCommentsFromServer();
//     // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
//   },
//   handleClick: function() {
//     console.log(this.props.children);
//     // this.setState({count: this.state.count + 1});
//   },
//   render: function() {
//     var click = this.handleClick.bind(this);
//     return (
//       <div className="commentBox" onClick={click}>
//         <neko>neko</neko>
//         <h1>Comments2</h1>
//         <div>{this.state.count}</div>
//         <CommentList data={this.state.data} neko="nekotest"/>
//         <CommentForm onCommentSubmit={this.handleCommentSubmit} />
//       </div>
//     );
//   }
// });

// var Comment = React.createClass({
//   render: function() {
//     var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
//     var a = 'neko';
//     return (
//       <div className="comment">
//         <h2 className="commentAuthor">
//           <div>{a}</div>
//           {this.props.author}bb
//         </h2>
//         <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
//       </div>
//     );
//   }
// });

// var CommentList = React.createClass({
//   getDefaultProps: function() {
//     return {
//       count: 1
//     };
//   },
//   render: function() {
//     var that = this;
//     var commentNodes = this.props.data.map(function(comment, index) {
//       console.log(that.props);
//       return (
//         // `key` is a React-specific concept and is not mandatory for the
//         // purpose of this tutorial. if you're curious, see more here:
//         // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
//         <Comment author={comment.author} key={index}>
//           {comment.text} {that.props.neko} {that.props.count}
//         </Comment>
//       );
//     });
//     return (
//       <div className="commentList">
//         {commentNodes}
//       </div>
//     );
//   }
// });

// var CommentForm = React.createClass({
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var author = React.findDOMNode(this.refs.author).value.trim();
//     var text = React.findDOMNode(this.refs.text).value.trim();
//     if (!text || !author) {
//       return;
//     }
//     this.props.onCommentSubmit({author: author, text: text});
//     React.findDOMNode(this.refs.author).value = '';
//     React.findDOMNode(this.refs.text).value = '';
//   },
//   render: function() {
//     return (
//       <form className="commentForm" onSubmit={this.handleSubmit}>
//         <input type="text" placeholder="Your name" ref="author" />
//         <input type="text" placeholder="Say something..." ref="text" />
//         <input type="submit" value="Post" />
//       </form>
//     );
//   }
// });

// React.render(
//   <CommentBox url="comments.json" pollInterval={2000} />,
//   document.getElementById('content')
// );
