import express from 'express';

const publicRouter = express.Router();


publicRouter.get("/:user", (req, res) => {
    res.send(`Hello Admin`);
})

publicRouter.get("/about", (req, res) => {
    res.send("About");
})

export default publicRouter;