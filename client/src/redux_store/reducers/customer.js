const defaultCustomer = {
	name: "Andrew",
	interests: ["Beaches", "Sport", "Henny"],
};

export default function customer(state, action) {
	switch (action) {
		case "action.login": {
			return {};
		}
		default: {
			return defaultCustomer;
		}
	}
}
