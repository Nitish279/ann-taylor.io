import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class MainHeader extends Component {
	render() {
		return(
			<div className="main_header">
				<Container>
					<Row className="">
						<Col xs="12" sm="4" md="3">
							<img src="https://www.anntaylor.com/webassets/annpl/img/logo_site.png" alt="Logo" className="img-responsive brand_logo" /> 
						</Col>
						<Col xs="12" sm="8" md="9" className="top_nav">
							<ul className="list-unstyled text-right">
							
							    <li className="shipping_country">
							    	<a href="">
							    		<span className="nav_title">Ship To: </span> 
							    		<img src="https://www.anntaylor.com/webassets/annpl/img/flags/IN.gif" alt="India" className="img-responsive" />
							    		<span className="nav_icon down_caret"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
							    	</a>
							    </li>

							    <li>
							    	<a href="">
							    		<span className="nav_icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
							    		<span className="nav_title"> Store Locator </span>
							    	</a>
							    </li>

							    <li>
							    	<a href="">
							    		<span className="nav_title"> Order status </span>
							    		<span className="nav_icon down_caret"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
							    	</a>
							    </li>

							    <li>
							    	<a href="">
							    		<span className="nav_icon"><i className="fa fa-shopping-bag" aria-hidden="true"></i></span>
							    		<span> Bag (0) </span>
							    		<span className="nav_icon down_caret"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
							    	</a>
							    </li>

							    <li>
							    	<a href="">
							    		<span className="nav_icon"><i className="fa fa-search" aria-hidden="true"></i></span>
							    		<span className="nav_title"> Search </span>
							    	</a>
							    </li>

							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		);
	};
};

export default MainHeader;