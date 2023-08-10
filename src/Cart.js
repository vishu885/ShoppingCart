import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{

    constructor(){
        super();
        this.state={
            products:[{
            price:99,
            title:'Mobile phone',
            qty:1,
            img:'',
            id: 1
            },
            {
            price:90,
            title:'Watch',
            qty:1,
            img:'',
            id:2
            },
            {
            price:990,
            title:'Apple',
            qty:1,
            img:'',
            id:3
            }
        ]
            

        }
        //this.increaseQuantity=this.increaseQuantity.bind(this); is used to bind function with this
        //or we can use arrow function as below
    }


    render(){
        const {products}=this.state;
        return(
            <div className='cart'>
                 {products.map((product)=>{
                 return <CartItem product={product} key={product.id}/>
                  })}
                  </div>
      ) ;
    }
}     
export default Cart;