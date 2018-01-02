import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import YouTube from 'react-youtube';

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
						<div className="main_banner_block">
							<img 
								src="https://www.anntaylor.com/webassets/content/ann/landing/luxewear/luxewear_hdr_desktop_091517.jpg" 
								alt="India" 
								className="img-responsive"
								style={{display: this.state.showPoster ? 'block' : 'none'}}
								onClick={this.hideMainBannerImage.bind(this)}
							/>
						</div>
					</Row>
				</Container>
			</div>
	    );
  	}
};

class MainBanner extends Component {

	_onReady = (event) => {
		event.target.pauseVideo();
	}

	playVideo = (event) => {
		event.target.playVideo();
		console.log("Hello");
	}

	render() {
		return(
			<div>
				<Container>
					<Row>
						<div className="main_banner_block">
							<BannerImg onClick={this.playVideo.bind(this)} />
							<YouTube
								videoId="vfj0rObjO_M"
								onReady={this._onReady}
							/>
						</div>
					</Row>
				</Container>
			</div>
		);
	};
};

export default MainBanner; 