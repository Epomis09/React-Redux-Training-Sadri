import React, { Component } from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Product.css"

class Product extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    console.log("product");
    return (
      <React.Fragment>
        <p onClick={this.props.click}>Product Name: {this.props.title}</p>
        <p>Product Price: {this.props.price}</p>
        <p>{this.props.children}</p>
        <input ref={this.inputRef} onChange={this.props.change} value={this.props.title} />
      </React.Fragment>
    )
  }
}

export default Wrapper(Product, "product");