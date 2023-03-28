import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])

    useEffect( ()=>{
        fetch('products.json')
        .then (res=>res.json())
        .then(data=>setProducts(data))
        
    },[])
    const handleAddToCart =(product)=>{ 
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)

     };

     useEffect( ()=>{
        const storedCart =  getShoppingCart()
        const savedCart = []
        // get id of added product
        for(const id in storedCart){
            // get id from products state by id
            const addedProduct = products.find(product => product.id ===id)
            if (addedProduct) {
                // add quantity 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step -4 add the added product to saved cart 
                savedCart.push(addedProduct);
                
            }
          
        }
        // step - 5  set cart 
        setCart(savedCart);
     },[products])


    return (
        <div className='shop-container'>
            <div className='product-container'>
            
                {
                    products.map(product=><Product
                         key = {product.id}
                         product = {product}
                         handleAddToCart = {handleAddToCart}

                         
                         ></Product>)
                }

            </div>
            <div className='cart-container'>
              <Cart cart = {cart}> </Cart>
            </div>
            
        </div>
    );
};

export default Shop;