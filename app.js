import express from "express";

const app = express();

app.get("", (req, res) => {
	res.send("API homepage");
});

export default app;
