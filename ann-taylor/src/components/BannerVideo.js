import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import YouTube from 'react-youtube';

class BannerVideo extends Component {

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
						<YouTube
							videoId="vfj0rObjO_M"
							onReady={this._onReady}
							onClick={this.playVideo.bind(this)}
						/>
					</Row>
				</Container>
			</div>
		);
	};
};

export default BannerVideo; 