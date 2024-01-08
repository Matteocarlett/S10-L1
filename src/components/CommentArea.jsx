import { Component } from "react";
import { Card, Spinner } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    isLoading: false,
    comments: [],
  };

  async retriveComments() {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookAsin,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmEyYWUwZGQxZDAwMTgyZDE3NGEiLCJpYXQiOjE3MDQ3MjA5MzgsImV4cCI6MTcwNTkzMDUzOH0.oGZtFJ2Tv9PeXVty1lyxacYXefuHENI1urHk-RyFH6I",
          },
        }
      );
      if (res.ok) {
        let body = await res.json();
        this.setState({ comments: body, isLoading: false });
      } else {
        console.log(res.status, res);
      }
    } catch (e) {
      console.log("Error in fetch:", e);
      this.setState({
        isLoading: false,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookAsin !== this.props.bookAsin) {
      this.retriveComments();
    }
  }

  addComment = (newComment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
    }));
  };

  render() {
    return (
      <>
        <Card.Header>
          <h1>Seleziona un libro</h1>
          COMMENTI
        </Card.Header>
        <Card>
          {this.state.isLoading && (
            <div className="ml-2">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {!this.state.isLoading && this.state.comments.length > 0 ? (
            <CommentsList comments={this.state.comments} />
          ) : (
            <p className="mt-3">Ancora nessun commento</p>
          )}
          <AddComment bookAsin={this.props.bookAsin} addComment={this.addComment} />
        </Card>
      </>
    );
  }
}

export default CommentArea;
