import React from "react";
import { useSelector } from "react-redux";
import {
	Card,
	CardBody,
	CardTitle,
	Button,
	ListGroup,
	ListGroupItem,
	Progress,
} from "reactstrap";

export default function CustomerView() {
	const customer = useSelector((state) => state.customer);
	return (
		<div>
			<ProfileInfo name={customer.name} />

			<DisplayInterest interests={customer.interests || []} />
		</div>
	);
}

const DisplayInterest = ({ interests }) => {
	return (
		<Card>
			<CardBody>
				<CardTitle tag="h5">Your interests:</CardTitle>
				<ListGroup className="mb-3">
					{interests.map((interest, key) => (
						<ListGroupItem key={key}>{interest}</ListGroupItem>
					))}
				</ListGroup>
				<Button>Edit</Button>
			</CardBody>
		</Card>
	);
};

const ProfileInfo = ({ name }) => {
	return (
		<Card className="my-4">
			<CardBody>
				<CardTitle tag="h5">Hi {name}</CardTitle>
				<div className="mb-3">
					You need 30 more points to be gold member
					<Progress value={70} />
				</div>
				<Button>Log out</Button>
			</CardBody>
		</Card>
	);
};
