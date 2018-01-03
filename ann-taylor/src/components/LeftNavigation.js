import React, { Component } from 'react';
import data from '../data/data.json';

class LeftNavigation extends Component {

	constructor(props) {
		super(props);

		const categoryDetails = data.resultsList.nav;
		const categoryDetailsArray = [];
		const catNameArray = [];
		const catIdArray = [];
		const catUrlArray = [];

		for (var i = 0; i < categoryDetails.length; i++) {
		    var subNavData = categoryDetails[i].subNav;
		    for (var j = 0; j < subNavData.length; j++) {
		        var categoryDetailsData = subNavData[j].attributes;
		        categoryDetailsArray.push(categoryDetailsData);
			}
		}

		for (var k = 0; k < categoryDetailsArray.length; k++) {

			var catName = categoryDetailsArray[k].catName[0];
			catNameArray.push(catName);

			var catId = categoryDetailsArray[k].catid[0];
			catIdArray.push(catId);

			var catUrl = categoryDetailsArray[k].catUrl[0];
			catUrlArray.push(catUrl);
		}

		this.state = {
			catNameArray: catNameArray,
			catIdArray: catIdArray,
			catUrlArray: catUrlArray
		};			
	}

	render() {
		return(
			<div className="col-xs-12 col-sm-2 p_lr_init">
				<div className="left_navigation_wrap" >
					<div className="left_navigation">
						<div className="categories">
							<dl id="cat0">
								<dt>Luxewear</dt>
								<dd>
									<a href={this.state.catUrlArray[0]} id={this.state.catIdArray[0]} >{this.state.catNameArray[0]}</a>
								</dd>
								<dd>
									<a href={this.state.catUrlArray[1]} id={this.state.catIdArray[1]} >{this.state.catNameArray[1]}</a>
								</dd>
								<dd>
									<a href={this.state.catUrlArray[2]} id={this.state.catIdArray[2]} >{this.state.catNameArray[2]}</a>
								</dd>
								<dd>
									<a href={this.state.catUrlArray[3]} id={this.state.catIdArray[3]} >{this.state.catNameArray[3]}</a>
								</dd>
								<dd>
									<a href={this.state.catUrlArray[4]} id={this.state.catIdArray[4]} >{this.state.catNameArray[4]}</a>
								</dd>
								<dd>
									<a href={this.state.catUrlArray[5]} id={this.state.catIdArray[5]} >{this.state.catNameArray[5]}</a>
								</dd>
							</dl>
						</div>

						<div className="add_img_block" >
							<img className="img-responsive" src="https://www.anntaylor.com/webassets/content/ann/nav/010118-leftnav-60nfp-flash-1.png" alt="Add Banner" />
						</div>
					</div>
				</div>
			</div>
		);
	};
};

export default LeftNavigation;