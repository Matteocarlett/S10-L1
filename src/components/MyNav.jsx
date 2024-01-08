import { Component } from "react";
import { Nav } from "react-bootstrap";

class MyNav extends Component {
  render() {
    // console.log(this.props.items);
    return (
      <Nav>
        {this.props.items.map((elem, index) => {
          return (
            <Nav.Item key={`navitem-${index}`}>
              <Nav.Link href="#">{elem}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    );
  }
}

export default MyNav;
