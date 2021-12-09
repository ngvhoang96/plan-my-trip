import React from "react";
import { Button, Row, Col } from "reactstrap";
import appPicture from "../app.png";

export default function Home() {
	return (
		<div>
			<Row>
				<Col className="col-md-7 col-12">
					<img src={appPicture} alt="plan-my-trip" width="100%" />
				</Col>
				<Col className="my-auto col-md-5 col-12">
					<h3 className="mb-3">Are you planning to go somewhere?</h3>
					<span className="text-secondary d-block mb-3">Let us help you</span>
					<Button color="success">Plan my trip</Button>
				</Col>
			</Row>
		</div>
	);
}
