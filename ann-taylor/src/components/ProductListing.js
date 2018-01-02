import React, { Component } from 'react';

class ProductListing extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imgSrc: 'https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040'
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver() {
		this.setState({
			imgSrc: 'http://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476'
		});
	}

	handleMouseOut() {
		this.setState({
			imgSrc: 'https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040'
		});
	}

	render() {
		return(
			<div className="col-xs-12 col-sm-10">
				<div className="product_listing_block" >
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} alt="Striped Mock Neck Lantern Sleeve Top" />
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
					<div className="col-md-4 indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<p><strong> Striped Mock Neck Lantern Sleeve Top </strong></p>
									
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p className="product_rating_blk">
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star" aria-hidden="true"></i></span>
										<span className="rating"><i className="fa fa-star-half" aria-hidden="true"></i></span>
									</p>
									<div className="colors_blk">
										<div className="indv_color brown"></div>
										<div className="indv_color cheery"></div>
									</div>
								</a>
							</div>
							<a className="shop_now" href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</div>
				</div>
			</div>
		);
	};
};

export default ProductListing;