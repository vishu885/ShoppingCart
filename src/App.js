// import React from 'react';
// import Cart from './Cart';
// import Navbar from './Navbar';
// // import * as firebase from 'firebase/app';
// // import 'firebase/firestore';
// import { firestore } from 'firebase/app';

// //import './App.css';

// class App extends React.Component
// {
//     constructor(){
//       super();
//       this.state={
//          /* products:[{
//           price:99,
//           title:'Mobile phone',
//           qty:1,
//           img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
//           id: 1
//           },
//           {
//           price:90,
//           title:'Watch',
//           qty:1,
//           img:'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
//           id:2
//           },
//           {
//           price:990,
//           title:'Apple',
//           qty:1,
//           img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
//           id:3
//           }
//       ]*/
//       //fetching data from firebase
//       products:[],
//       loading:true
          

//       }
//   }

//   componentDidMount(){
//     // firebase
//     //   .firestore()
//     //   .collections('products')
//     //   .get()
//     //   .then((snapshot)=>{
//     //     console.log(snapshot)
//     //   })

//     //   snapshot.docs.map((doc)=>{
//     //     console.log(doc.data())
//     //   })

//     //   const products=snapshot.docs.map((doc)=>{
//     //     const data=doc.data();
//     //     data['id']=doc.id;
//     //     return data;
//     //   })
//     //   this.setState({
//     //     products:products,
//     //     loading:false
//     //   })
//     // if we want to keep our firebase data and react in sync without refreshing
//     firestore()
//       .get()
//       .onSnapshot((snapshot)=>{
//         console.log(snapshot);
//       })
//       // snapshot.docs.map((doc)=>{
//       //   console.log(doc.data());
//       // })
//       // const products= snapshot.docs.map((doc)=>{
//       //   const data=doc.data();
//       //   data['id']=doc.id;
//       //   return data;
//       // })
//       // this.setState({
//       //   products
//       // })
//   }
//   handleIncreaseQuantity=(product)=>{
//       console.log("Increased by ",product);
//       const {products}=this.state;
//       const index=products.indexOf(product);
//       products[index].qty+=1;
//       this.setState({
//           products:products
//       })

//   }

//   handleDecreaseQuantity=(product)=>{
//       console.log("Decreased by ",product);
//       const {products}=this.state;
//       const index=products.indexOf(product);
//       if (products[index].qty===0)
//       return;
//       products[index].qty-=1;
//       this.setState({
//           products:products
//       })

//   }

//   handleDelete=(id)=>{
//       const {products}=this.state;
//       const items=products.filter((item)=>item.id!==id);
//       this.setState({
//           products:items
//       })
//   }
//   getcartcount=()=>{
//     const {products}=this.state;
//     let count=0;
//     products.forEach((product)=>
//       count+= product.qty)
//     return count;
//   }

//   getTotalPrice=()=>{
//     const {products}=this.state;
//     let total=0;
//     products.forEach((product)=>
//     total+=product.qty*product.price)
//     return total;
//   }

//   render(){
//     const {products,loading}=this.state;
//       return (
//       <div className="App">
//         <Navbar
//         count={this.getcartcount()}
//         />
//         <Cart
//         products={products}
//         increaseQuantity={this.handleIncreaseQuantity} 
//         decreaseQuantity={this.handleDecreaseQuantity}
//         deleteQuantity={this.handleDelete}
        
//         />
//         {loading && <h1>Loading products ...</h1>}
//         <div>TOTAL :
//           {this.getTotalPrice()}
//         </div>
//       </div>
//     );
//       }
// }

// export default App;

import React from "react";
import "./App.css";
// import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    //this.db=firebase.firestore();
  }

  // componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then(snapshot => {
  //       const products = snapshot.docs.map(doc => {
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       });
  //       this.setState({ products: products, loading: false });
  //     });
  // }

  componentDidMount() {
  firebase.firestore()
      .collection("products")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    });
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    });
  };

  handleDeleteProduct = id => {
    const { products } = this.state;

    const items = products.filter(product => product.id !== id);

    this.setState({
      products: items
    });
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  addProduct = () => {
    firebase.firestore()
      .collection("products")
      .add({
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdLqEGpM2E8WjIkkjdi3HE6H5GREP5x396vUi7uicLiR7tVMl0AEYfKNzDimp5IkuAqbuqX5rNoIJbwAfDNbXpVGxCq-0IJ5gLfIYIZ9EBl05SvEhOcl_M9A&usqp=CAc",
        price: 900,
        qty: 3,
        title: "Washing Machine"
      })
      .then((docRef)=>{
        console.log("The product added".docRef);
      })
      // .then(docRef => {
      //   docRef.get().then(snapshot => {
      //     console.log("Product has been added", snapshot.data());
      //   });
      // })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a Product
        </button>
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
