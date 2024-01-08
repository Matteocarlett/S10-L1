import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup variant="flush">
        {this.props.comments.map((c) => {
          return <SingleComment key={`comment-${c._id}`} comment={c} />;
        })}
      </ListGroup>
    );
  }
}

export default CommentsList;
