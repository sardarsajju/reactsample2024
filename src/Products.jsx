// import { Component } from "react";
// class Products extends Component{
//     constructor(props){
//         super();
//        // this.a=20;
//         this.a = props.a;
//     }
//     clickHandler(){
//         this.a =30;
//         console.log("Hello",this.a)
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Products classs Components</h1>
//                 <p>Values of a : {this.a} and props : {this.props.a}</p>
//                 <button onClick={()=> this.clickHandler()}>click me</button>
//             </div>
//         )
//     }
// }
// 

/*
import { Component } from "react";
class Products extends Component{
    constructor (){
        super();
        this.state = {
            count : 0
           
        }
    }
    clickHandler(){
            this.setState({count : this.state.count+1});
        }
    clickHandlerneg(){
            this.setState({count : this.state.count-1});
        }
        
        render(){
            return(
                <div>
                    <h1>Products Class Components</h1>
                    <p>Value of count : {this.state.count}</p>
                    <button onClick={()=>this.clickHandler()}>click me for increment</button><br/>
                    <button onClick={()=>this.clickHandlerneg()}>click me for decrement</button>
                </div>
            )
        }
    }
*/
import { Component } from "react";
class Products extends Component{
    constructor (){
        super();
        this.state = {
            products : []
        }
    }
        clickHandler(){
                this.setState({products : [...this.props.products]});
             }
        render(){
            const {products} = this.state;
            return(
                <div>
                    <h1>Products Class Components</h1>
                    <p>Value of count : {this.state.products.length}</p>
                    <button onClick={()=>this.clickHandler()}>click me</button>
               { products.length > 0 ?(
                    <table border={"1px"}>
                 <thead>
                     <tr>
            
                         <th>Product Id</th>
                         <th>Product Name</th>
                         <th>Product price</th>
                         <th>Product qty</th>
        
                    </tr>
                 </thead>
                 <tbody>
                     {products.map((product)=>(
                       <tr key = {product.productId}>
                        <td>{product.productId}</td>
                        <td>{product.pName}</td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                         </tr>
                     ))}
                 </tbody>
             </table>
            ) : (<p>No Data</p>)}
            </div>
            )
        }
    }
    
export default Products;