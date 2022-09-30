import "dotenv/config";
import express from "express";
import apiRoute from "./src/routes"

const app = express();
const PORT = process.env.PORT;

app.use('/api',apiRoute)
// Bind to port to start server
app.listen(PORT, () => {
    console.log(`Express server started at port ${PORT}`);
});