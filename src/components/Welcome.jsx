import { Component } from "react";

class Welcome extends Component {
  render() {
    
    return (
      <div className="jumbotron">
        <h1 className="display-3">Benvenuto {this.props.text}!</h1>
        <p className="lead">Compra e vendi libri</p>
      </div>
    );
  }
}

export default Welcome;
