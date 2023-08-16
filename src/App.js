import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

//import './App.css';

class App extends React.Component
{
    constructor(){
      super();
      this.state={
          products:[{
          price:99,
          title:'Mobile phone',
          qty:1,
          img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
          id: 1
          },
          {
          price:90,
          title:'Watch',
          qty:1,
          img:'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
          id:2
          },
          {
          price:990,
          title:'Apple',
          qty:1,
          img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
          id:3
          }
      ]
          

      }
  }
  handleIncreaseQuantity=(product)=>{
      console.log("Increased by ",product);
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          products:products
      })

  }

  handleDecreaseQuantity=(product)=>{
      console.log("Decreased by ",product);
      const {products}=this.state;
      const index=products.indexOf(product);
      if (products[index].qty===0)
      return;
      products[index].qty-=1;
      this.setState({
          products:products
      })

  }

  handleDelete=(id)=>{
      const {products}=this.state;
      const items=products.filter((item)=>item.id!==id);
      this.setState({
          products:items
      })
  }
  getcartcount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>
      count+= product.qty)
    return count;
  }

  getTotalPrice=()=>{
    const {products}=this.state;
    let total=0;
    products.forEach((product)=>
    total+=product.qty*product.price)
    return total;
  }

  render(){
    const {products}=this.state;
      return (
      <div className="App">
        <Navbar
        count={this.getcartcount()}
        />
        <Cart
        products={products}
        increaseQuantity={this.handleIncreaseQuantity} 
        decreaseQuantity={this.handleDecreaseQuantity}
        deleteQuantity={this.handleDelete}
        
        />
        <div>TOTAL :
          {this.getTotalPrice()}
        </div>
      </div>
    );
      }
}

export default App;
