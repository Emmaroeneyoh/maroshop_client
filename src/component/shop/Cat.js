import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { GetProductCategory } from '../../redux/product'
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom'
import {addcart} from '../../redux/carte'

function ProductCategory() {
   const {category} = useParams()

    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.product)

     //for cart
     const addToCart = (box) => {
        dispatch(addcart(box))
    }
    
    //for filter search
    const [search, setsearch] = useState('')

    const serachChange = (e) => {
        setsearch(e.target.value)
    }

    useEffect(() => {
        dispatch(GetProductCategory(category))
        console.log(category)
    }, [category])

      //for pagination
  const [pagenumber, setpagenumber] = useState(0)
  
  const dataperview = 3
  const pageVisited = dataperview * pagenumber

  const pagecount = Math.ceil(products.length / dataperview)
  const pagechange = ({ selected }) => {
    setpagenumber(selected)
    }
  return (
    <div className="shop-container">
            <section class="page-header">
                <div class="overly"></div> 	
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                    <div class="content text-center">
                        <h1 class="mb-3">Shop</h1>
                        <p>Hath after appear tree great fruitful green dominion moveth sixth abundantly image that midst of god day multiply you’ll which</p>
            
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-transparent justify-content-center">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Shop</li>
                        </ol>
                    </nav>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <section class="products-shop section">
                <div class="container">
                <div class="row">
                    <div class="col-md-9">
                    <div class="row align-items-center">
                        <div class="col-lg-12 mb-4 mb-lg-0">
                        <div class="section-title">
                            <h2 class="d-block text-left-sm">Shop</h2>
            
                            <div class="heading  mb-5">
                                <p class="result-count mb-0"> <form>
                                      <div class="input-group mb-3">
  <input type="text" class="form-control" value={search} onChange={serachChange}  placeholder="Search Product" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div class="input-group-append">
    <button type="submit"  class="input-group-text btn btn-primary" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
  </div>
</div>
                                      </form> </p>
                                {/* <form class="ordering " method="get">
                                    <select name="orderby" class="orderby form-control" aria-label="Shop order" >
                                        <option value="" selected="selected">Default sorting</option>
                                        <option value="">Sort by popularity</option>
                                        <option value="">Sort by average rating</option>
                                        <option value="">Sort by latest</option>
                                        <option value="">Sort by price: low to high</option>
                                        <option value="">Sort by price: high to low</option>
                                    </select>
                                    <input type="hidden" name="paged" value="1" />
                                </form> */}
                            </div>
                        </div>
                        </div>
                    </div>
            
                          <div class="row">
                              
                              {/* start here  */}
                              {products.length > 0 ? products.filter((val) => {
                                  if (search === '') {
                                      return val
                                  } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                                      console.log('this is val : ', val)
                                      return val
                                  }
                              }).slice(pageVisited, pageVisited + dataperview).map((product) => (
                                  <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                                  <div class="product">
                              <div class="product-wrap">
                              <a href="/product-single"><img class="img-fluid w-100 mb-3 img-first" src={product.images[0].url} alt="product-img" /></a>
                              <a href="/product-single"><img class="img-fluid w-100 mb-3 img-second" src={product.images[1].url} alt="product-img" /></a>
                              </div>
                      
                              <span class="onsale">Sale</span>
                              <div class="product-hover-overlay">
                              <a onClick={() => addToCart(product)}><i class="tf-ion-android-cart"></i></a>
                              <a href="#"><i class="tf-ion-ios-heart"></i></a>
                                  </div>
                      
                              <div class="product-info">
                                              <h2 class="product-title h5 mb-0"><a href="/product-single">{product.title }</a></h2>
                              <span class="price">
                                  $329.10
                              </span>
                              </div>
                          </div>
                                        </div>
                              ))  : <h1>no product</h1> }
                        
                              {/* end here  */}

                      
                              <div class="col-12">
                           {search ? '' : (   <ReactPaginate
                                previousLabel={<div>&laquo;</div>}
                                nextLabel={'»'}
                                pageCount={pagecount}
                                onPageChange={pagechange}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={4}
                                breakLabel="..."
                                containerClassName={"pagination "}
                                previousLinkClassName={'page-link'}
                                nextLinkClassName={'page-link'}
                                disabledClassName={'disabledClassName'}
                                activeClassName={'active'}

                                 /> )}           


                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>				
                    </div>
                    <div class="col-md-3">
                
            
            
           
            <form class="mb-5">
            
                
              
                <section class="widget widget-colors mb-5">
                <h3 class="widget-title h4 mb-4">Shop by color</h3>
                <ul class="list-inline">
                    <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                        <input type="checkbox" class="custom-control-input" id="color1" />
                        <label class="custom-control-label sky-blue" for="color1"></label>
                    </div>
                    </li>
                    <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                        <input type="checkbox" class="custom-control-input" id="color2" checked />
                        <label class="custom-control-label red" for="color2"></label>
                    </div>
                    </li>
                    <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                        <input type="checkbox" class="custom-control-input" id="color3" />
                        <label class="custom-control-label dark" for="color3"></label>
                    </div>
                    </li>
                    <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                        <input type="checkbox" class="custom-control-input" id="color4" />
                        <label class="custom-control-label magenta" for="color4"></label>
                    </div>
                    </li>
                    <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                        <input type="checkbox" class="custom-control-input" id="color5" />
                        <label class="custom-control-label yellow" for="color5"></label>
                    </div>
                    </li>
                </ul>
                </section>
            
               
                <section class="widget widget-sizes mb-5">
                <h3 class="widget-title h4 mb-4">Shop by Sizes</h3>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="size1" checked />
                    <label class="custom-control-label" for="size1">L Large</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="size2" />
                    <label class="custom-control-label" for="size2">XL Extra Large</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="size3" />
                    <label class="custom-control-label" for="size3">M Medium</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="size4" />
                    <label class="custom-control-label" for="size4">S Small</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="size5" />
                    <label class="custom-control-label" for="size5">XS Extra Small</label>
                </div>
                </section>
            
                <button type="button" class="btn btn-black btn-small">Filter</button>
            </form>
            
                    </div>
                </div>
                </div>
            </section>
        </div>
  )
}

export default ProductCategory