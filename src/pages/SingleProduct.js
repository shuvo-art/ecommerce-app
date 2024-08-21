import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import { TbGitCompare } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";

const SingleProduct = () => {
    const props = {width: 600, height: 500, zoomWidth: 500, img: "https://ae01.alicdn.com/kf/HTB16TW.PVXXXXaFXVXXq6xXFXXXK/Fashion-simple-stylish-Top-Luxury-brand-MEGIR-Watches-men-Stainless-Steel-Mesh-strap-band-Quartz-watch.jpg"};
    const [ orderedProduct, setorderedProduct ] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
      };
  return (
    <>
        <Meta title="Product Name" />
        <BreadCrumb title="Product Name" />
        <div className="main-product-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div>
                                <img src="https://ae01.alicdn.com/kf/HTB16TW.PVXXXXaFXVXXq6xXFXXXK/Fashion-simple-stylish-Top-Luxury-brand-MEGIR-Watches-men-Stainless-Steel-Mesh-strap-band-Quartz-watch.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="https://ae01.alicdn.com/kf/HTB16TW.PVXXXXaFXVXXq6xXFXXXK/Fashion-simple-stylish-Top-Luxury-brand-MEGIR-Watches-men-Stainless-Steel-Mesh-strap-band-Quartz-watch.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="https://ae01.alicdn.com/kf/HTB16TW.PVXXXXaFXVXXq6xXFXXXK/Fashion-simple-stylish-Top-Luxury-brand-MEGIR-Watches-men-Stainless-Steel-Mesh-strap-band-Quartz-watch.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="https://ae01.alicdn.com/kf/HTB16TW.PVXXXXaFXVXXq6xXFXXXK/Fashion-simple-stylish-Top-Luxury-brand-MEGIR-Watches-men-Stainless-Steel-Mesh-strap-band-Quartz-watch.jpg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">
                                    Kids Headphoen Bulk 10 Pack Multi Colored for Students
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    <p className="mb-0 t-review">( 2 Reviews )</p>
                                </div>
                                <a className="review-btn" href="#review">Write a Review</a>
                            </div>
                            <div className="py-3">
                                <div className="d-flex align-items-center gap-10 py-2">
                                    <h3 className="product-heading">Type:</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 py-2">
                                    <h3 className="product-heading">Brand:</h3>
                                    <p className="product-data">Havells</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 py-2">
                                    <h3 className="product-heading">Category:</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 py-2">
                                    <h3 className="product-heading">Tags:</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex align-items-center gap-10 py-2">
                                    <h3 className="product-heading">Availability:</h3>
                                    <p className="product-data">In Stock</p>
                                </div>
                                <div className="d-flex flex-column gap-10 mt-2 mb-3">
                                    <h3 className="product-heading">Size:</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-10 mt-2 mb-3">
                                    <h3 className="product-heading">Colors:</h3>
                                    <Color />
                                </div>
                                <div className="d-flex flex-row gap-15 mt-2 mb-3">
                                    <h3 className="product-heading">Quantity:</h3>
                                    <div className="">
                                        <input type="number" name="" className="form-control" style={{width:"70px"}} min={1} max={10} id="" />
                                    </div>                                    
                                    <div className="d-flex align-items-center gap-10 ms-5">
                                        <button className="button" type="submit">Add to Cart</button>
                                        <button to="/signup" className="button signup">Buy it Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="" className="text-dark "><TbGitCompare className="fs-5 me-2" me-2/> Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href="" className="text-dark  ms-3"><IoMdHeartEmpty className="fs-5 me-2" me-2/> Add to Wishlist</a>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-10 my-3">
                                    <h3 className="product-heading">Shipping & Returns:</h3>
                                    <p className="product-data">Free shipping and returns available in all order!<br />
                                        we ship all US domestic orders within <b>5-10 business days!</b>        
                                    </p>
                                </div>
                                <div className="d-flex align-items-center gap-10 my-2">
                                    <h3 className="product-heading">Product Link:</h3>
                                    <a 
                                        href="javascript:void(0);"
                                        onClick={() => {
                                            copyToClipboard(
                                                "https://ae01.alicdn.com/kf/HTB16TW.PVXXXXaFXVXXq6xXFXXXK/Fashion-simple-stylish-Top-Luxury-brand-MEGIR-Watches-men-Stainless-Steel-Mesh-strap-band-Quartz-watch.jpg"
                                                );
                                            }
                                        } 
                                        >Copy Product Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="description-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3>Product Description</h3>
                        <div className="bg-white p-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget turpis consectetur
                                vehicula. Nullam nec urna non est mollis aliquam. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="reviews-wrapper home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 id="review">Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>
                                    <div className="d-flex gap-10 align-items-center">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                                    </div>
                                )}
                            </div>
                            <div className="review-form py-4">
                                <h4>Write a Review</h4>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            className="form-control w-100"
                                            cols="30"
                                            rows="4"
                                            placeholder="Comments"
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="button">Submit Review</button>
                                    </div>
                                </form>  
                            </div>
                            <div className="reviews mt-3">
                                <div className="review">
                                    <div className="d-flex align-items-center gap-10">
                                        <h6 className="mb-0">Tony Kroos</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget turpis consectetur
                                        vehicula. Nullam nec urna non est mollis aliquam. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                    <ProductCard />
                </div>
            </div>
        </section>
    </>
  );
};

export default SingleProduct;