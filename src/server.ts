import express, { Application } from 'express';
import { AppDataSource } from './db/data-source';
import routes from './routes/RoutesUser';

const app: Application = express();
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        app.use('/api', routes);
        app.listen(3000, () => console.log('Server rodando na porta 3000'));
    })
    .catch((error) => console.log(error));