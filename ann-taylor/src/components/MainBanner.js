import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';


class MainBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPoster: false,
		};
	}

	render() {
		
		return(
			<div>
				<Container>
					<Row>
						<div className="main_banner_block">
							<img 
								src="https://www.anntaylor.com/webassets/content/ann/landing/luxewear/luxewear_hdr_desktop_091517.jpg" 
								alt="India" 
								className="img-responsive"
								onLoad={console.log(this.state.showPoster)}
							/>
						</div>
					</Row>
				</Container>
			</div>
		);
	};
};

export default MainBanner;