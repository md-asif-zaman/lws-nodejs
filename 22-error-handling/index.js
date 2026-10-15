import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send(a);
});

app.use((req, res, next) => {
    res.send("Request url not found");
})

app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send("There was an error");
    }

})



app.listen(3000, () => {
    console.log("Listing on port 3000");
});