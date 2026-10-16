import express from 'express';

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
    res.send("Dashboard");
});

adminRouter.get("/login", (req, res) => {
    res.send("Login");
})

export default adminRouter;