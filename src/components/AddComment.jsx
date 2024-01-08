import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

class AddComment extends Component {
  state = {
    author: "",
    comment: "",
    rate: 1,
  };

  async sendComment(e) {
    e.preventDefault();

    let settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmEyYWUwZGQxZDAwMTgyZDE3NGEiLCJpYXQiOjE3MDQ3MjA5MzgsImV4cCI6MTcwNTkzMDUzOH0.oGZtFJ2Tv9PeXVty1lyxacYXefuHENI1urHk-RyFH6I",
      },
      body: JSON.stringify(this.state),
    };

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookAsin,
        settings
      );

      if (response.ok) {
        const newComment = await response.json();
        this.props.addComment(newComment);

        this.setState({
          author: "",
          comment: "",
          rate: 1,
        });
      } else {
        console.log(response.status, response);
      }
    } catch (e) {
      console.log("error in fetch comments", e);
    }
  }

  updateEmail = (e) => {
    this.setState({ author: e.target.value });
  };

  updateComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  updateRate = (e) => {
    this.setState({ rate: parseInt(e.target.value, 10) });
  };

  render() {
    return (
      <Row>
        <Col>
          <Form onSubmit={(e) => this.sendComment(e)}>
            <Form.Group className="mb-3" controlId="form.control.comment">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Dicci cosa ne pensi..."
                onChange={(e) => this.updateComment(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.control.rate">
              <Form.Control
                type="number"
                min="1"
                max="5"
                placeholder="Valutazione da 1 a 5"
                onChange={(e) => this.updateRate(e)}
              />
            </Form.Group>
            <Button className="mb-3" type="submit">
              Invia
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AddComment;
