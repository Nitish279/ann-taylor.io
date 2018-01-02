import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ProductListing extends Component {
	render() {
		return(
			<div className="col-xs-12 col-sm-10">
				<div className="product_listing_block" >
					<Col xs="12" sm="6" md="4" className="indv_prod_card">
						<div className="product-wrap">
							<div>
								<a 
									href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">
									<figure aria-hidden="true"> 
										<img className="img-responsive" src="https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040" alt="Striped Mock Neck Lantern Sleeve Top" id="plp-image-" data-hover="//richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;amp;itemID=451045&amp;amp;swatchID=9040&amp;amp;viewID=ALT1&amp;amp;recipeName=pdlg387x476" /> 
									</figure>
									<strong aria-hidden="true" itemprop="name"> Striped Mock Neck Lantern Sleeve Top</strong> 
									<p className="price">INR4878</p>
									<p className="online_exclusive"> Online Exclusive </p>
									<p className="actual_and_disc_price"> 
										<span className="">INR12298</span>
										<del className="">INR16234</del>
									</p>
									<p>3.5</p>
									<div className="colors_blk">
										<div className="indv_color black"></div>
										<div className="indv_color red"></div>
									</div>
								</a>
							</div>
							<a href="https://www.anntaylor.com/striped-mock-neck-lantern-sleeve-top/451045">Quick Shop</a> 
						</div>
					</Col>
				</div>
			</div>
		);
	};
};

export default ProductListing;