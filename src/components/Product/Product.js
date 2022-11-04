import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Produc.css'

const Product = (props) => {
    const { product, addToCart } = props;


    const { name, img, seller, price, rating } = product




    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:$ {price}</p>
                <p><small>Seller :{seller}</small></p>
                <p><small>Rating :{rating}</small></p>
            </div>
            <div onClick={() => addToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Product;