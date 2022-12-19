import * as express from 'express';

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
    }
}

const app = new App().application;
const colors = require('colors');
const tree = require('./tree.js')

app.get("/", async (req: express.Request, res: express.Response) => {

    await res.send("Hello World!");
})
app.listen(3000, () => {

    console.log(colors.bgWhite.black("Server is running on port 3000"), colors.green("✔"));

})