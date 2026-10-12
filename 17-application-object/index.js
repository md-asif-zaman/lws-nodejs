import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("Welcome to main app..");
})

app.route('/about/mission')
    .get((req, res) => {
        res.render('pages/about');
    })


app.listen(3000, () => {
    console.log("Listing on port 3000");
});