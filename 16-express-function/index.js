import express from 'express';

const app = express();

app.use(express.json());

const router = (express.Router())

app.use(router);

router.get("/", (req, res) => {
    res.send("This is home page");
})

router.post("/", (req, res) => {
    console.log((req.body));
    res.send("This is home page with post request");
})

app.listen(3000, () => {
    console.log("Listing on port 3000");
});