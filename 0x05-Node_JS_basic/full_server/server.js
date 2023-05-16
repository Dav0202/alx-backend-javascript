import express from 'express';
import controllerRoute from './routes/index';

const app = express();
const port = 1245;

controllerRoute(app);

app.listen(port, () => {
});

export default app;
