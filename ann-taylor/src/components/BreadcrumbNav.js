import React from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class BreadcrumbNav extends React.Component {
	render() {
		return (
		    <div>
		    	<Container>
					<Row>
						<Col xs="12" sm="8" className="breadcrumb_block">
							<Breadcrumb tag="nav">
								<BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
								<BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
								<BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
								<BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
							</Breadcrumb>
						</Col>

						<Col xs="12" sm="4" className="current_category_block">
							<p> All Luxewear </p>
						</Col>
					</Row>
				</Container>
		    </div>
		);
	}
};

export default BreadcrumbNav;