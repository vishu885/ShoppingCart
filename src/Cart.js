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

    render(){
        const {products}=this.state;
        return(
            <div className='cart'>
                 {products.map((product)=>{
                 return <CartItem 
                 product={product}
                 key={product.id} 
                 increaseQuantity={this.handleIncreaseQuantity} 
                 decreaseQuantity={this.handleDecreaseQuantity}
                 deleteQuantity={this.handleDelete}
                  />
                  })}
                  </div>
      ) ;
    }
}     
export default Cart;