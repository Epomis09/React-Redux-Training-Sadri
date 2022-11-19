import React from "react";
import Main from "./components/Main/Main"
import "./App.css"
import ProductList from "./components/ProductList/ProductList";

class App extends React.Component{
    state = {
        products : [
            { id:1, title: "Book 1", price: "99" },
            { id: 2, title: "Book 2", price: "89" },
            { id:3, title: "Book 3", price: "79" }
        ],
        showProducts: false,
    }
    
    changePriceHandler = (newTitle) => {
        this.setState({
            products : [
                { title: newTitle, price: "59" },
                { title: "Book 2", price: "59" },
                { title: "Book 3", price: "59" }
            ],
        })
    }

    changeTitleHandler = (event, id) => {
        const productIndex = this.state.products.findIndex((item) =>{
            return item.id === id;
        })

        const product = {...this.state.products[productIndex]};
        product.title = event.target.value;
        
        const products = [...this.state.products];
        products[productIndex] = product;
        this.setState({ products: products })

    }

    toggleProductHandler = () => {
        const show = this.state.showProducts;
        this.setState({showProducts: !show})
    }

    deleteProductHandler = (productIndex) => {
        const products = [...this.state.products];
        products.splice(productIndex, 1);
        this.setState({ products: products })
    }

    render() {

        let products = null;
        if (this.state.showProducts) {
            products = (
                <div>
                    <ProductList
                        products={this.state.products}
                        click={this.deleteProductHandler}
                        change={this.changeTitleHandler}    
                    />
                </div>
            )
        }

        return (
            <div className="center">
                <Main  click={this.toggleProductHandler}/>
                {products}
            </div>
        );
    }
}

export default App;