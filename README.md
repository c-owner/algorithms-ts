# algorithms-ts
node.js + Typescript 재미삼아 알고리즘 풀이

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

