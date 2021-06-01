import express from 'express';

import userRouter from './UserRouter.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', userRouter);

async function startApp() {
    try {
        app.listen(PORT, () =>
            console.log(`Server has been started on port ${PORT}`)
        );
    } catch (e) {
        console.log(e);
    }
}

startApp();
