import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {  increase, removedetail , decrease, getTotal} from '../../redux/carte'
import product from '../../redux/product';

function Cart() {
    const { cart , cartTotal , cartPrice } = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotal())
    }, [cart])

    const increaseItem = (box) => {
        console.log(box)
        dispatch(increase(box))
    }

    const decreaseItem = (box) => {
        console.log(box)
        dispatch(decrease(box))
    }
    const removeItem = (box) => {
        // box.preventDefault()
        console.log(box)
        dispatch(removedetail(box))
    }
  return (
    <div className="checkout-container">
            <section class="page-header">
            <div class="overly"></div> 	
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                <div class="content text-center">
                    <h1 class="mb-3">Cart</h1>
                    Hath after appear tree great fruitful green dominion moveth sixth abundantly image that midst of god day multiply you’ll which
        
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent justify-content-center">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </nav>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        
        
            <section class="cart shopping page-wrapper">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="product-list">
                        <form class="cart-form">
                            <table class="table shop_table shop_table_responsive cart" cellspacing="0">
                                <thead>
                                <tr>
                                    <th class="product-thumbnail"> </th>
                                    <th class="product-name">Product</th>
                                    <th class="product-price">Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-subtotal">Total</th>
                                    <th class="product-remove"> </th>
                                </tr>
                                </thead>
        
                                      <tbody>
                                          {/* start of data  */}
                                          {cart.length > 0 ? cart.map((item) => (
                                              <tr class="cart_item" key={item._id}>
                                              <td class="product-thumbnail" data-title="Thumbnail">
                                                  <a href="/product-single"><img src={item.images[0].url} class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" /></a>
                                              </td>
                  
                                              <td class="product-name" data-title="Product">
                                                      <a href="#">{item.title }</a>
                                              </td>
                  
                                              <td class="product-price" data-title="Price">
                                                  <span class="amount"><span class="currencySymbol"><pre wp-pre-tag-3=""></pre>
                                                      </span>{item.price }</span>
                                              </td>
                                              <td class="product-quantity" data-title="Quantity">
                                                      <div class="quantity">
                                                          <div>
                                                              <span className='btn' onClick={() => increaseItem(item)}>+</span>
                                                              
                                                              <span>{item.quantity }</span>
                                                              <span className='btn' onClick={() => decreaseItem(item)}>-</span>
                                                          </div>
                                                  </div>
                                              </td>
                                              <td class="product-subtotal" data-title="Total">
                                                  <span class="amount">
                                                      <span class="currencySymbol">
                  <pre wp-pre-tag-3=""></pre>
                                                          </span>{item.price * item.quantity }</span>
                                              </td>
                                              <td class="product-remove" data-title="Remove">
                                                  <button onClick={() => removeItem(item)} class="remove" aria-label="Remove this item" data-product_id="30" data-product_sku="">×</button>
                                                  </td>
                                                  
                                                    </tr>
                                          ))  : (
                                              <div>no items in cart</div>
                                )}
                                          {/* end of data  */}
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
                </div>
                <div class="row justify-content-end">
                    <div class="col-lg-4">
                    <div class="cart-info card p-4 mt-4">
                        <h4 class="mb-4">Cart totals</h4>
                        <ul class="list-unstyled mb-4">
                            <li class="d-flex justify-content-between pb-2 mb-3">
                            <h5>Subtotal</h5>
                                      <span>{ cartPrice}</span>
                            </li>
                            <li class="d-flex justify-content-between pb-2 mb-3">
                            <h5>Shipping</h5>
                            <span>Free</span>
                            </li>
                            <li class="d-flex justify-content-between pb-2">
                            <h5>Total</h5>
                            <span>$90.00</span>
                            </li>
                        </ul>
                        <a href="#" class="btn btn-main btn-small">Proceed to checkout</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
  )
}

export default Cart