import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.json())

app.get("/test", (req, res) => {
    res.send('Hello');
    res.end();
})

app.get("/about", (req, res) => {
    res.set('Platform', 'Learn with Sumit');
    console.log(res.get('Platform'));
    res.end();
})

app.listen(3000, () => {
    console.log("Listing on port 3000");
});