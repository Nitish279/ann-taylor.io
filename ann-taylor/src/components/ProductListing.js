import React, { Component } from 'react';
import data from '../data/data.json';
class ProductListing extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imgSrc: 'https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000652&amp;recipeName=pdlg387x476&amp;itemID=451045&amp;swatchID=9040'
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);

		const ProductDetails = data.resultsList.records;
		const productDetailsArray = [];
		
		const gridImgArray = [];
		const displayNameArray = [];
		const onlinePromoMessagesArray = [];
		const priceWasDollarsArray = [];
		const priceSaleDollarsArray = [];
		const priceListDollarsArray = [];
		const ratingImageArray = [];

		const rgbColorArray = [];

		for (var i = 0; i < ProductDetails.length; i++) {
		    var indvProductCompleteData = ProductDetails[i].records;
		    if(indvProductCompleteData !== undefined && indvProductCompleteData !== null){
	        	for (var j = 0; j < indvProductCompleteData.length; j++) {
			        var individualProductDetails = indvProductCompleteData[j].attributes;
			       	productDetailsArray.push(individualProductDetails);
				}
	        }
		}

		for (var k = 0; k < productDetailsArray.length; k++) {
			var tempData = productDetailsArray[k];

			var gridImg = tempData.gridImg[0];
			if(gridImg !== undefined && gridImg !== null && gridImg !== ""){
				gridImgArray.push(gridImg);
			}
			

			var displayName = tempData.displayName[0];
			if(displayName !== undefined && displayName !== null && displayName !== ""){
				displayNameArray.push(displayName);
			}
			

			var onlinePromoMessages = tempData.onlinePromoMessages[0];
			if(onlinePromoMessages !== undefined && onlinePromoMessages !== null && onlinePromoMessages !== ""){
				onlinePromoMessagesArray.push(onlinePromoMessages);
			}
			

			var priceWasDollarsTemp = tempData["childSKUs.priceWasDollars"];
			if(priceWasDollarsTemp !== undefined && priceWasDollarsTemp !== null && priceWasDollarsTemp !== ""){
				for (var m = 0; m < priceWasDollarsTemp.length; m++) {
					var priceWasDollars = priceWasDollarsTemp[m];
					priceWasDollarsArray.push(priceWasDollars);
				}
			}
			

			var priceSaleDollarsTemp = tempData["childSKUs.priceSaleDollars"];
			if(priceSaleDollarsTemp !== undefined && priceSaleDollarsTemp !== null && priceSaleDollarsTemp !== ""){
				for (var n = 0; n < priceSaleDollarsTemp.length; n++) {
					var priceSaleDollars = priceSaleDollarsTemp[n];
					priceSaleDollarsArray.push(priceSaleDollars);
				}
			}
			

			var priceListDollarsTemp = tempData["childSKUs.priceListDollars"];
			if(priceListDollarsTemp !== undefined && priceListDollarsTemp !== null && priceListDollarsTemp !== ""){
				for (var p = 0; p < priceListDollarsTemp.length; p++) {
					var priceListDollars = priceListDollarsTemp[p];
					priceListDollarsArray.push(priceListDollars);
				}
			}
			

			var ratingImage = tempData["productData2.ratings.image"][0];
			if(ratingImage !== undefined && ratingImage !== null && ratingImage !== ""){
				ratingImageArray.push(ratingImage);
			}
			

			for (var l = 0; l < tempData.colorData.length; l++) {
				var tempColorData = tempData.colorData[l];
				rgbColorArray.push(tempColorData.split("|")[2].trim());
			}

			// console.log("rgbColorArray", rgbColorArray);
		}

		// let arrOfObj = {};

		// var result = gridImgArray.map(function(el) {
		// 	console.log("el", el);
		// 	var o = Object.assign({}, el);
		// 	o.gridImg = el;
		// 	return o;
		// })

		// console.log("result", result);



		// console.log("gridImg", tempData.gridImg[0]);
		// console.log("displayName", tempData.displayName[0]);
		// console.log("onlinePromoMessages", tempData.onlinePromoMessages[0]);
		// console.log("childSKUs.priceWasDollars", tempData["childSKUs.priceWasDollars"]);
		// console.log("childSKUs.priceSaleDollars", tempData["childSKUs.priceSaleDollars"]);
		// console.log("childSKUs.priceListDollars", tempData["childSKUs.priceListDollars"]);
		// console.log("productData2.ratings.image", tempData["productData2.ratings.image"][0]);


		console.log("gridImgArray", gridImgArray);
		console.log("displayNameArray", displayNameArray);
		console.log("onlinePromoMessagesArray", onlinePromoMessagesArray);
		console.log("priceWasDollarsArray", priceWasDollarsArray);
		console.log("priceSaleDollarsArray", priceSaleDollarsArray);
		console.log("priceListDollarsArray", priceListDollarsArray);
		console.log("ratingImageArray", ratingImageArray);
		console.log("rgbColorArray", rgbColorArray);

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
				<ul className="product_listing_block list-unstyled" >
					<li className="col-md-4 indv_prod_card">
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
					</li>
				</ul>
			</div>
		);
	};
};

export default ProductListing;