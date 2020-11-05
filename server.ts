import * as express from 'express';
import { Application } from 'express';
import { getDrinks, getPizzas, getSides, getStore } from './server/get-data.route';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/drinks').get(getDrinks);
app.route('/api/pizzas').get(getPizzas);
app.route('/api/sides').get(getSides);
app.route('/api/stores').get(getStore);

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
