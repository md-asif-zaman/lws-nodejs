import express from 'express';
import adminRouter from './adminRouter.js';
import publicRouter from './publicRouter.js';

const app = express();

app.use("/", publicRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
    console.log("Listing on port 3000");
});