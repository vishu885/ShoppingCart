import React from 'react';

class CartItem extends React.Component{
    /*constructor(){
        super();
        this.state={
            price:99,
            title:'Mobile phone',
            qty:1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this); is used to bind function with this
        //or we can use arrow function as below
    } Also we have to remove all the functions from here as cartitem cant access state of App componenet*/
    increaseQuantity=() => { //shift this code to Cart component as state is defined there
        //this.state.qty+=1; but is not reflected n ecognised by react
        console.log("this",this.state);
        //set state form 1
       /* this.setState({ //passing object as argunment
            qty:this.state.qty+1
        });*/
            //set state form 2
            this.setState((prevState)=>{ //passing function as argument, setstate function 
                //is asynchronouse means we dont know when it will finish so for that we can pass
                //callback as second argument
                return {
                     qty:prevState.qty+1
                }
            },()=>{console.log("this.state",this.state)}); //this callback executes only after 
            //our setstate finishes but outside of event handlers sestate is synchronous 
            //for ex in ajax call 

    }


    decreaseQuantity=() => {
       const {qty}=this.state;
       if(qty===0)
       return;
            //set state form 2
            this.setState((prevState)=>{ //passing function as argument
                return {
                     qty:prevState.qty-1
                }
            });

    }


    render(){
        console.log("this.props",this.props);
        const { price,title,qty}= this.props.product; //object destructuring
        const { increaseQuantity,decreaseQuantity,product,deleteQuantity}=this.props;
       
        
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}} >{title}</div>
                    <div style={{ color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    <div className="cart-item-actions">
                       <img className='action-icons' 
                       alt='increase' 
                      //before destructuring  onClick={()=>this.props.increaseQuantity(this.props.product)}//onClick={this.increaseQuantity}
                      //after destructuring
                      onClick={()=>increaseQuantity(product)}
                      src='https://cdn-icons-png.flaticon.com/128/1828/1828919.png'/>
                      
                       <img className='action-icons' 
                       alt='decrease' 
                       onClick={()=>decreaseQuantity(product)}//onClick={this.decreaseQuantity}
                       src='https://cdn-icons-png.flaticon.com/128/56/56889.png'/>
                      
                       <img className='action-icons' alt='delete' 
                       src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png'
                       onClick={()=>deleteQuantity(product.id)}
                       />
                       
                    </div>
                </div>

            </div>
        );
    }
}
const styles={
    image:{
        height: 110,
        width:110,
        borderRadius:4,
        background: '#ccc'
        }
}
export default CartItem;