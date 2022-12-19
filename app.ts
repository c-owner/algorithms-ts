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

const hoonTree = require('./hoon.tree.js');
app.get("/", async (req: express.Request, res: express.Response) => {
    await res.send(hoonTree.hoonTree)

})
app.listen(3000, () => {

    console.log(colors.bgWhite.black("Server is running on "), colors.bgYellow("Tree"),  colors.green("✔"));

})