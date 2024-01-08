import { Component } from "react";
import { Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  toggleClassSelected(e) {
    // console.log("carta cliccata", e.target.parentNode);
    e.target.parentNode.classList.toggle("selected");
    this.setState({ selected: !this.state.selected });
  }

  render() {
    return (
      <Col sm={12} md={6} xl={4}>
        <div className="card singlebook">
          <img
            className="card-img-top"
            src={this.props.book.img}
            alt="cover-libro"
            onClick={(e) => {
              this.props.setBookClicked(this.props.book.asin);
              // console.log(this.props.book.asin);
              this.toggleClassSelected(e);
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.book.title}</h5>
            <p className="card-text">{this.props.book.price}€</p>
            <a href="#" className="btn btn-primary">
              Dettagli
            </a>
          </div>
        </div>
      </Col>
    );
  }
}

export default SingleBook;
