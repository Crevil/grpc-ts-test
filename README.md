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
