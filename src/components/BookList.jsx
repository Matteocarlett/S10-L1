import SingleBook from "./SingleBook";
import { Component } from "react";
import { Row, Col, Form, FormControl, FormGroup } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    textToSearch: "",
    bookSelected: "", //asin del libro
  };
  saveTextToSearch(value) {
    this.setState({ textToSearch: value });
  }

  setBookClicked = (value) => {
    this.setState({ bookSelected: value });
  };

  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <FormControl className="mb-3"
                  type="text"
                  name="search"
                  id="search"
                  value={this.state.textToSearch} // evita warning in console
                  placeholder="Cerca libro"
                  onChange={(e) => this.saveTextToSearch(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row>
          {/* className="d-flex flex-wrap justify-content-between" */}
          <Col>
            <Row>
              {this.props.books
                .filter((book) =>
                  book.title
                    .toLowerCase()
                    .includes(this.state.textToSearch.toLowerCase())
                )
                .map((b) => {
                  return (
                    <SingleBook
                      setBookClicked={this.setBookClicked}
                      book={b}
                      key={`book-${b.asin}`}
                    />
                  );
                })}
            </Row>
          </Col>
          <Col>
            <CommentArea bookAsin={this.state.bookSelected}></CommentArea>
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
