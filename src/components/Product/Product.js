const Product = (props) => {
   return (
    <div>
        <p>Product Name: {props.title}</p>
        <p>Product Price: {props.price}</p>
        <p>{props.children}</p>
    </div>
  )
}

export default Product;