import React from 'react'
import { Link } from "react-router-dom";
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js"
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { GetCategories } from '../../redux/product'
import {userSignout} from '../../redux/auth'


function Topbar() {
    const { category } = useSelector((state) => state.product)
    const { user } = useSelector((state) => state.user)
    const {cartTotal} = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCategories())
    }, [dispatch])
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
    <div class="container">
        <Link class="navbar-brand font-weight-bold" to={{ pathname: "/"}}>E-Shop</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
        aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="main-navbar">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
            <Link class="nav-link" to={{ pathname: "/"}}>Home</Link>
            </li>

            <li class="nav-item">
            <Link class="nav-link" to={'/product'}>Product</Link>
            </li>
          
            <li class="nav-item dropdown dropdown-slide">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-delay="350"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories.
            </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                              {category.length >= 0 ? category.map((cat) => (
                                  <li><Link to={`/product/${cat._id}`}>{cat.category }</Link></li>
                              ))  : 'no categories'}
                
                
            </ul>
            </li>

            <li class="nav-item dropdown dropdown-slide">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-delay="350"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shop.
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><Link to={`/product/type/men`}>Men</Link></li>
                <li><Link to={`/product/type/women`}>Women</Link></li>
                <li><Link to={`/product/type/kids`}>Kids</Link></li>
            </ul>
            </li>

          
            <li class="nav-item dropdown dropdown-slide">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button" data-delay="350"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account.
            </a>
                          {user.useremail ? (
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
                              <li><Link to={{ pathname: "/login"}}>profile</Link></li>
                              </ul>
                          ): (
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
                            <li><Link to={'/login'}>Login Page</Link></li>
                                <li><Link to={"/signup"}>SignUp Page</Link></li>
                            </ul>
            )}
                      </li>
                    {user.useremail ? (  <li class="nav-item">
            <a class="nav-link" onClick={() => dispatch(userSignout())} >Logout</a>
            </li>) : ''}
                      <li class="nav-item">
                          <Link class="nav-link" to={'/cart'}><i class="tf-ion-android-cart"></i> { cartTotal}</Link>
            </li>
                      
        </ul>
        </div>
    

        
    </div>
    </nav>
  )
}

export default Topbar