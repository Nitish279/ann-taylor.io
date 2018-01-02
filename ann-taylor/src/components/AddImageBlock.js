import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class AddImageBlock extends Component {
	render() {
		return(
			<div className="col-xs-12 col-sm-2 p_lr_init">
				<div className="add_img_block" >
					<img className="img-responsive" src="https://www.anntaylor.com/webassets/content/ann/nav/010118-leftnav-60nfp-flash-1.png" />
				</div>
			</div>
		);
	};
};

export default AddImageBlock;