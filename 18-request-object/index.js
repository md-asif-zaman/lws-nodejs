import express from 'express';
import cookieParser from 'cookie-parser';
import { handler } from './handler.js';

const app = express();

app.use(express.json())
app.use(cookieParser())


const adminRoute = express.Router();
adminRoute.get("/dashboard", (req, res) => {
    console.log(req.method);
    res.send("We are in admin dashboard");
})

app.use("/admin", adminRoute);

app.get("/user/:id", handler)

app.post("/user", (req, res) => {
    console.log(req.route);
    res.send("Hello world post.");
})

app.listen(3000, () => {
    console.log("Listing on port 3000");
});