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

    await res.send("<div>" +
        "<img src='https://github.com/c-owner/algorithms-ts/raw/master/img.png' alt='tree' />" +
        "</div>")

})
app.listen(3000, () => {

    console.log(colors.bgWhite.black("Server is running on "), colors.bgYellow("Tree"),  colors.green("✔"));

})