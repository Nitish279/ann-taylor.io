import React, { Component } from 'react';
import data from '../data/data.json';
class ProductListing extends Component {

	constructor(props) {
		super(props);
		

		const ProductDetails = data.resultsList.records;
		const productDetailsArray = [];
		const indvProductDetailArray = [];
		

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
			indvProductDetailArray.push(tempData);
		}
		console.log("indvProductDetailArray", indvProductDetailArray);
		this.state = {
			indvProductDetailArray: indvProductDetailArray
		};
	}

	render() {
		return(
			<div className="col-xs-12 col-sm-10">
				<div className="product-wrap">
					<ul className="product_listing_block list-unstyled"> {this.state.indvProductDetailArray.map((object:string,i:number)=>{ return <li className="col-md-4 indv_prod_card" key={object.repositoryId}><div className="product-wrap"><a href="{object.quickLookUrl}"><figure aria-hidden="true"><img className="img-responsive" src={object.gridImg} alt={object.displayName} /></figure><p><strong>{object.displayName}</strong></p><p className="price"> INR{object["childSKUs.priceWasDollars"]}</p><p className="online_exclusive">{object.onlinePromoMessages}</p><p className="actual_and_disc_price"> <span className=""> INR{object["childSKUs.priceSaleDollars"]}</span><del className=""> INR{object["childSKUs.priceListDollars"]}</del></p><p className="product_rating_blk"><img className="img-responsive" src={object["productData2.ratings.image"][0]} alt="" /></p><div className="colors_blk"><div className="indv_color brown"></div><div className="indv_color cheery"></div></div></a></div></li> })} </ul>
				</div>
			</div>
		);
	};
};

export default ProductListing;