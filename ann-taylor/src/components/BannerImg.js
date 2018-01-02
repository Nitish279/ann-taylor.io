import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

class BannerImg extends Component {
	constructor() {
		super();
		this.state = {
			showPoster: true
		};
	}

	hideMainBannerImage = () => {
	    this.setState({ showPoster: false });
	}

  	render() {
	    return (
			<div>
				<Container>
					<Row>
						<img 
							src="https://www.anntaylor.com/webassets/content/ann/landing/luxewear/luxewear_hdr_desktop_091517.jpg" 
							alt="India" 
							className="img-responsive"
							style={{display: this.state.showPoster ? 'block' : 'none'}}
							onClick={this.hideMainBannerImage.bind(this)}
						/>
					</Row>
				</Container>
			</div>
	    );
  	}
};

export default BannerImg; 