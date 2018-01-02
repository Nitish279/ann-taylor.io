import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

class ProductListingPage extends Component {
	render() {
		return(
			<div>
				<Container>
					<Row>
						{this.props.children}
					</Row>
				</Container>
			</div>
		);
	};
};

export default ProductListingPage;