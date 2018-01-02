import React, { Component } from 'react';

class LeftNavigation extends Component {
	render() {
		return(
			<div className="col-xs-12 col-sm-2 p_lr_init">
				<div className="left_navigation_wrap" >
					<div className="left_navigation">
						<div className="categories">
							<dl id="cat0">
								<dt>Luxewear</dt>
								<dd>
									<a href="https://www.anntaylor.com/all-luxewear/cat3750001?https%2525253A%2525252F%2525252Fwww.anntaylor.com%2525252Fall-luxewear%2525252Fcat3750001=undefined"> All Luxewear</a>
								</dd>
								<dd>
									<a href="https://www.anntaylor.com/luxewear-tops/cat3750002?https%2525253A%2525252F%2525252Fwww.anntaylor.com%2525252Fluxewear-tops%2525252Fcat3750002=undefined"> Luxewear Tops + Jackets</a>
								</dd>
								<dd>
									<a href="https://www.anntaylor.com/luxewear-sweaters/cat3800018?https%2525253A%2525252F%2525252Fwww.anntaylor.com%2525252Fluxewear-sweaters%2525252Fcat3800018=undefined"> Luxewear Sweaters</a>
								</dd>
								<dd>
									<a href="https://www.anntaylor.com/luxewear-dresses/cat3800016?https%2525253A%2525252F%2525252Fwww.anntaylor.com%2525252Fluxewear-dresses%2525252Fcat3800016=undefined"> Luxewear Dresses</a>
								</dd>
								<dd>
									<a href="https://www.anntaylor.com/luxewear-bottoms/cat3750003?https%2525253A%2525252F%2525252Fwww.anntaylor.com%2525252Fluxewear-bottoms%2525252Fcat3750003=undefined"> Luxewear Pants + Skirts</a>
								</dd>
								<dd>
									<a href="https://www.anntaylor.com/luxewear-accessories/cat3750004?https%2525253A%2525252F%2525252Fwww.anntaylor.com%2525252Fluxewear-accessories%2525252Fcat3750004=undefined"> Luxewear Accessories</a>
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