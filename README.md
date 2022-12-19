# algorithms-ts
node.js + Typescript 재미삼아 알고리즘 풀이


----

<div align="center">
<p style="white-space: pre-wrap; text-align: center;">
           <span style="color: yellow;">★</span>
              <span style="color: yellow">*</span><span style="color: green">""</span><span style="color: red">o</span>
            <span style="color: green;">"""<span style="color: aqua">o</span></span><span style="color: green;">""</span>
            <span style="color: green;">"""</span><span style="color: yellow">*</span>"<span style="color: yellow">*</span><span style="color: green;">""</span>
            <span style="color: green;">""""""</span><span style="color: red">o</span><span style="color: green;">""""""</span>
            <span style="color: green;">""""</span>
             <span style="color: green;">"""""</span><span style="color: yellow">*</span><span style="color: aqua">o</span>"<span style="color: aqua">o</span>
<span style="color: green;">              """<span style="color: blueviolet">o</span>""""""</span>
<span style="color: green;">              """<span style="color: aqua">o</span>""<span style="color: aqua">o</span>"""""</span>
              <span style="color: green;">"""""""</span><span style="color: yellow">*</span>"<span style="color: aqua">oo</span><span style="color: green;">""""</span>
                 <span style="color: deeppink">oo</span><span style="color: yellow">*</span><span style="color: indigo">oo</span><span style="color: green">""</span>
                <span style="color: green;">"</span><span style="color: yellow">*</span><span style="color: green;">""</span><span style="color: yellow">*</span><span style="color: green">""</span><span style="color: aqua">o</span>
               <span style="color: green;">"""""""""""""</span><span style="color: aqua">o</span>
              <span style="color: green;">""""""</span><span style="color: yellow">*</span><span style="color: green;">"""""</span><span style="color: yellow">**</span><span style="color: green">""</span>
             <span style="color: green;">""""""""""</span><span style="color: aqua">o</span><span style="color: yellow">*</span>"<span style="color: yellow">*</span><span style="color: green;">""""""</span>
            <span style="color: aqua">o</span><span style="color:green;">"</span><span style="color: aqua">oo</span><span style="color: green;">""</span><span style="color: yellow">**</span><span style="color: aqua">o</span><span style="color: yellow">*</span><span style="color: aqua">oo</span><span style="color: green;">""""</span>
<span style="color: yellow;">               ||</span>
<span style="color: yellow;">              _||_</span>
<span style="color: yellow;">              \__/</span>
<span style="
color: #C6FFDD;  /* fallback for old browsers */
">
Server is running on  Tree ✔
</span>
</p>

<div style=" border-radius: 24px;
background: #C6FFDD;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
">
<div style="white-space: pre-wrap; text-align: center;">
<div style="background-color: firebrick; font-weight: 800">2023</div>
<span style="font-weight: 800;
font-size: 48px; font-family: 'Noto Sans Oriya'; color: cornflowerblue">Merry Christmas!</span>
<div style="background-color: green;
text-align: right; padding-right: 38px; font-style: oblique; color: #C6FFDD;">by Hoon</div>
</div>
</div>
</div>



## TypeScript

> TypeScript, 마이크로소프트에서 개발한 오픈소스 프로그래밍 언어, 자신이 원하는 Type을 정의하고 프로그래밍을 하면 JavaScript로 컴파일되어 실행할 수 있다.

## Setup

`npm init`

`npm install -g typescript`

TypeScript 컴파일은 `tsc` 커맨드 사용
`tsc --init`

`tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": [
      "es2021.intl"
    ],
    "target": "es2021",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "dist",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true
  },
  "exclude": [],
  "include": [
    "src/**/*"
  ]
}
```

```shell
npm install --save-dev nodemon ts-node
```

`package.json`에 scripts 추가
```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon - exec ts-node src/index.ts"
  }
}

```

---

## express install

```shell
npm install express
```

`src/index.ts`

```typescript
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
```
