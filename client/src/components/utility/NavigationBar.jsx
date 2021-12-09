import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

export default function NavigationBar() {
	const [openCollapse, setOpenCollapse] = useState(false);
	return (
		<div>
			<Navbar color="success" dark expand="md" light>
				<NavbarBrand href="/">Home</NavbarBrand>
				<NavbarToggler onClick={() => setOpenCollapse(!openCollapse)} />
				<Collapse isOpen={openCollapse} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink href="/account/">Account</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/#">Some link</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/#">Some link 2</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}
