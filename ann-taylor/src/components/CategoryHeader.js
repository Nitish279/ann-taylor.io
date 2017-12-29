import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

class CategoryHeader extends Component {
	render() {
		return(
			<div>
				<Container>
					<Row>
						<div className="category_header">
							<ul className="list-unstyled text-center">
								<li><a href="">Clothing</a></li>
								<li><a href="">Luxewear</a></li>
								<li><a href="">Shoes</a></li>
								<li><a href="">Accessories</a></li>
								<li><a href="">Petites</a></li>
								<li><a href="">Tall</a></li>
								<li><a href="">Work</a></li>
								<li><a href="">AT The Moment</a></li>
								<li><a href="">Sale</a></li>
							</ul>
						</div>
					</Row>
				</Container>
			</div>
		);
	};
};

export default CategoryHeader;