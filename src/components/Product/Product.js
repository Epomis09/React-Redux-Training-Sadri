const Product = (props) => {
   return (
    <div>
        <div>Product Name: {props.title}</div>
        <div>Product Price: {props.price}</div>
    </div>
  )
}

export default Product;