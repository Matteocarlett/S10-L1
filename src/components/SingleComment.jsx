import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  state = {};

  render() {
    return (
      <ListGroup.Item>
        <span className="commentAuthor">
          {this.props.comment.author} ha scritto:
        </span>
        <p className="commentText"> {this.props.comment.comment}</p>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
