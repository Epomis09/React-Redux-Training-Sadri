import "./Product.css"

const Product = (props) => {
   return (
    <div className="product">
        <p>Product Name: {props.title}</p>
        <p onClick={props.click}>Product Price: {props.price}</p>
        <p>{props.children}</p>
        <input onChange={props.change} />
    </div>
  )
}

export default Product;