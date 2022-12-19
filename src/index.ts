import * as express from 'express';

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
    }
}

const app = new App().application;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("hello world");
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

