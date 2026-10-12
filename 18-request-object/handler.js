export const handler = (req, res) => {
    console.log(req.get('Content-Type'));
    res.send("Welcome to main app..");
}