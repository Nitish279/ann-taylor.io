import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import YouTube from 'react-youtube';


class BannerImg extends React.Component {
constructor(props) {
		super(props);
		this.state = {
			showPoster: true
		};
	}
	hideMainBannerImage(){
		console.log("hello");
		console.log();
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
						onClick={this.hideMainBannerImage}
					/>
				</Row>
			</Container>
		</div>
    );
  }
} 


class MainBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPoster: true
		};
	}

	render() {
		const opts = {
			height: '390',
			playerVars: {
				autoplay: 1
			}
		};

		return(
			<div>
				<Container>
					<Row>
						<div className="main_banner_block">
							{ this.state.showPoster ? <BannerImg /> : null }

							<YouTube
								videoId="vfj0rObjO_M"
								opts={opts}
								onReady={this._onReady}
							/>
						</div>
					</Row>
				</Container>
			</div>
		);
	};
	_onReady(event) {
		event.target.pauseVideo();
	}
};

export default MainBanner;