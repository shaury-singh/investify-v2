import React, { useState } from 'react'
import axios from 'axios';

export default function Wishlists(props) {
    const addToWishList = async (e) =>{
        e.preventDefault();
        try{
            let response = await axios.post("http://localhost:5000/api/invest/users/addToWatchlist",{
                body:{
                    shareName: props.shareName,
                    listName: "Shaury's Wishlist"
                }
            }).then(()=>{
                console.log(response);
            })
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='pos-abs abs-center padding-main bg-theme-primary font-playfair border-round width-500 text-enlarge whiten backdrop-blur'>
        <span className='line-height-main mar-bottom-extra'>Add Stock To</span>
        <form onSubmit={addToWishList}>
            <button className='primary-flex align-center width-full bg-remove mar-top-sml'>
                <span className='float-10 primary-flex justify-start whiten'><ion-icon name="bookmark-outline" size="large"></ion-icon></span>
                <span className='float-50 primary-flex justify-start mar-right buy-stock-head whiten bg-remove mar-left'>Wishlist 1</span>
            </button>
            <button className='primary-flex align-center width-full bg-remove mar-top-sml'>
                <span className='float-10 primary-flex justify-start whiten'><ion-icon name="bookmark-outline" size="large"></ion-icon></span>
                <span className='float-50 primary-flex justify-start mar-right buy-stock-head whiten bg-remove mar-left'>Wishlist 1</span>
            </button>
            <button className='primary-flex align-center width-full bg-remove mar-top-sml'>
                <span className='float-10 primary-flex justify-start whiten'><ion-icon name="bookmark-outline" size="large"></ion-icon></span>
                <span className='float-50 primary-flex justify-start mar-right buy-stock-head whiten bg-remove mar-left'>Wishlist 1</span>
            </button>
            <button className='primary-flex align-center width-full bg-remove mar-top-sml'>
                <span className='float-10 primary-flex justify-start whiten'><ion-icon name="add-circle-outline" size="large"></ion-icon></span>
                <span className='float-50 primary-flex justify-start mar-right buy-stock-head whiten bg-remove mar-left'>Create New Wishlist</span>
            </button>
            <div className='primary-flex justify-center'>
                <button className='primary-flex align-center justify-center mar-top-sml bg-active width-max continue-btn'>
                    <span className='primary-flex justify-start mar-right buy-stock-head whiten bg-remove mar-left'>Save</span>
                </button>
            </div>
        </form>
    </div>
  )
}
