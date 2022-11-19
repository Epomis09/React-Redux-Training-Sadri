import Product from '../Product/Product';

const ProductList = (props) => {
    return props.products.map((item, index) => {
        return <Product
            click={() => props.click(index)}
            title={item.title}
            price={item.price}
            change={(event) => {props.change(event, item.id)}}
            key={item.id}
        />
    })
}

export default ProductList;