import React from "react";
import Product from "./components/Product/Product"
import "./App.css"

// const App = () => {

//     const [productState, setProductState] = useState({
//             products : [
//                 { title: "Book 1", price: "99" },
//                 { title: "Book 2", price: "89" },
//                 { title: "Book 3", price: "79" }
//             ],
//     })

//     const changePriceHandler = () => {
//         setProductState ({
//             products : [
//                 { title: "Book 1", price: "59" },
//                 { title: "Book 2", price: "59" },
//                 { title: "Book 3", price: "59" }
//             ],
//         })
// }

//     return (
//         <div id="main" className="container">
//             <h2>React App</h2>
//             <Product
//                 title={productState.products[0].title}
//                 price={productState.products[0].price}
//             />
//             <Product
//                 title={productState.products[1].title}
//                 price={productState.products[1].price}
//             />
//             <Product
//                 title= {productState.products[2].title}
//                 price={productState.products[2].price}
//             />
//             <button onClick={changePriceHandler}>Change Price</button>
//         </div>
//     );
// }



class App extends React.Component{
    state = {
        products : [
            { title: "Book 1", price: "99" },
            { title: "Book 2", price: "89" },
            { title: "Book 3", price: "79" }
        ],
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

    changeTitleHandler = (event) => {
        this.setState({
            products : [
                { title: "Book 1", price: "59" },
                { title: event.target.value, price: "59" },
                { title: "Book 3", price: "59" }
            ],
        })
    }

    render() {
        return (
            <div className="center">
                <h2>Book Store</h2>
                <Product
                    title={this.state.products[0].title}
                    price={this.state.products[0].price}
                />
                <Product
                    title={this.state.products[1].title}
                    price={this.state.products[1].price}
                    change={this.changeTitleHandler}
                />
                <Product
                    title={this.state.products[2].title}
                    price={this.state.products[2].price}
                    // click={this.changePriceHandler.bind(this, "New Title")}
                    click={() => this.changePriceHandler("New Title")}
                />
                <button onClick={this.changePriceHandler}>Change Price</button>
            </div>
        );
    }
}

export default App;