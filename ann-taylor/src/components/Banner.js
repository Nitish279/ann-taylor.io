import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import BannerImg from './components/BannerImg';
import BannerVideo from './components/BannerVideo';

class Banner extends Component {
	
  	render() {
	    return (
			<div>
				<Container>
					<Row>
						<div className="main_banner_block">
							<BannerImg />
          					<BannerVideo />
							{this.props.children}
						</div>
					</Row>
				</Container>
			</div>
	    );
  	}
};

export default Banner; 