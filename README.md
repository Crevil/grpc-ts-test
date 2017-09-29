# Tests of TypeScript definitions for gRPC

This repository holds calls to all documented APIs in the gRPC Node.js library.

It is used to verify the TypeScript definitions for the JavaScript library.

**Be aware:** This project do not test if the defined functions etc. have a corresponding JavaScript implementations. It only tests the TypeScript definitions.

## Usage
The file `index.ts` holds all the API tests. It just uses all the external API documented in the gRPC repo. 
If it compiles, the types are correct.

Install deps with `npm install`.

Run the test compilation with `npm test`.

To lint the test file and the definitions in the gRPC lib, run `npm run lint`.

## Development
When editing the types it's easies to clone the [grpc-node](http://github.com/grpc/grpc-node) repository and link to the package.

```
git clone https://github.com/lunarway/grpc-node.git
cd grpc-ts-test
npm link ../grpc-node/packages/grpc-native-core/
```

When making changes to the `index.d.ts` file in grpc-node the commands from the usage section will hit the editied files.

You might have to clone the git sub-modules from `grpc-node` as well.

```
cd grpc-node
git submodule update --init
git submodule foreach --recursive git submodule update --init
```
