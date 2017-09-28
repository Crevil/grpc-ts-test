import * as grpc from "grpc";
import { Service } from "protobufjs";
/**
 * Metadata
 */
const metadata: grpc.Metadata = new grpc.Metadata();
metadata.add("key", "value");
metadata.add("key", new Buffer(""));
const value = metadata.get("key");
const sValue = value as string[];
const bValue = value as Buffer[];
metadata.remove("key");
metadata.set("key", "value");
metadata.set("key", new Buffer(""));
const metadata2: grpc.Metadata = metadata.clone();
const map: {[key: string]: string|Buffer} = metadata.getMap();

/**
 * Client
 */
const client: grpc.Client = new grpc.Client("host:port", grpc.credentials.createInsecure(), {});
client.close();
const ch: grpc.Channel = client.getChannel();
const serialize: grpc.serialize = (value) => (new Buffer(""));
const deserialize: grpc.deserialize = (data) => {};
client.makeBidiStreamRequest("method", serialize, deserialize);
client.makeBidiStreamRequest("method", serialize, deserialize, metadata);
const callOptions: grpc.CallOptions = {
  credentials: grpc.credentials.createInsecure(),
  deadline: new Date(),
  host: "host",
  parent: new grpc.ClientDuplexStream({}),
  propagate_flags: grpc.propagate.DEFAULTS,
};
const duplexStream: grpc.ClientDuplexStream = client.makeBidiStreamRequest("method", serialize, deserialize, metadata, callOptions);

const writeableStream: grpc.ClientWritableStream = client.makeClientStreamRequest("method", serialize, deserialize, null, callOptions, (error: Error, value: any) => {});
client.makeClientStreamRequest("method", serialize, deserialize, null, null, (error: Error, value: any) => {});
client.makeClientStreamRequest("method", serialize, deserialize, metadata, callOptions, (error: Error, value: any) => {});

const readableStream: grpc.ClientReadableStream = client.makeServerStreamRequest("method", serialize, deserialize, {});
client.makeServerStreamRequest("method", serialize, deserialize, {}, metadata);
client.makeServerStreamRequest("method", serialize, deserialize, {}, metadata, callOptions);

const unaryCall: grpc.ClientUnaryCall = client.makeUnaryRequest("method", serialize, deserialize, {}, null, null, (error: Error, value: any) => {});
client.makeUnaryRequest("method", serialize, deserialize, {}, metadata, null, (error: Error, value: any) => {});
client.makeUnaryRequest("method", serialize, deserialize, {}, metadata, callOptions, (error: Error, value: any) => {});

client.waitForReady(new Date(), (error: Error) => {});
client.waitForReady(new Date(), () => {});

/**
 * Server
 */
const server: grpc.Server = new grpc.Server();
new grpc.Server({});
server.addService(new Service("name"), {
  unary: (call: grpc.ServerUnaryCall, callback: grpc.sendUnaryData) => {},
  clientStream: (call: grpc.ServerReadableStream, callback: grpc.sendUnaryData) => {},
  serverStream: (call: grpc.ServerWriteableStream) => {},
  duplexStream: (call: grpc.ServerDuplexStream) => {},
});
server.bind("host:port", grpc.credentials.createInsecure());
server.forceShutdown();
const handlerSet: boolean = server.register("method", (call: grpc.ServerUnaryCall) => {}, serialize, deserialize, "type");
server.start();
server.tryShutdown(() => {});

/**
 * ServerCredentials
 */
new grpc.ServerCredentials();
const keyCert: grpc.KeyCertPair = {
  certChain: new Buffer(""),
  privateKey: new Buffer(""),
};
grpc.ServerCredentials.createInsecure();
grpc.ServerCredentials.createInsecure(new Buffer(""), [keyCert]);
grpc.ServerCredentials.createInsecure(new Buffer(""), [keyCert], true);
grpc.ServerCredentials.createInsecure(null, [keyCert], true);

/**
 * grpc namespace
 */
const callError: number = grpc.callError.OK;
const verbosity: number = grpc.logVerbosity.INFO;
const propagation: number = grpc.propagate.DEFAULTS;
const status: number = grpc.status.OK;
const writeFlag: number = grpc.writeFlags.NO_COMPRESS;

grpc.closeClient(client);
grpc.load("file.proto");
grpc.load({ root: "dir", file: "file.json"}, "json");
grpc.load("file.proto", "proto", {
  binaryAsBase64: true,
  convertFieldsToCamelCase: true,
  deprecatedArgumentOrder: true,
  longsAsStrings: true,
});

grpc.loadObject({});
grpc.loadObject({}, {
  binaryAsBase64: true,
  deprecatedArgumentOrder: true,
  enumsAsStrings: true,
  longsAsStrings: true,
  protobufjsVersion: 5,
});

grpc.setLogger(console);
grpc.setLogVerbosity(grpc.logVerbosity.INFO);
grpc.setLogVerbosity(0);

const ch2 = grpc.getClientChannel(client);

const methodDef: grpc.MethodDefinition = {
  path: "path",
  requestStream: true,
  responseStream: true,
  requestSerialize: (value) => (new Buffer("")),
  responseSerialize: (value) => (new Buffer("")),
  requestDeserialize: () => {},
  responseDeserialize: () => {},
};
const serviceDef: grpc.ServiceDefinition = {
  service: methodDef,
};
const ClientCtor = grpc.makeGenericClientConstructor(serviceDef, "service", {});
new ClientCtor("host:port", grpc.credentials.createInsecure(), {});

grpc.waitForClientReady(client, new Date(), (error) => {});
grpc.waitForClientReady(client, 1, (error) => {});

const deadlineNumber: grpc.Deadline = 1;
const deadlineDate: grpc.Deadline = new Date();

const deserializeFunc: grpc.deserialize = (data: Buffer) => {};
const serializeFunc: grpc.serialize = (value: any) => (new Buffer(""));

const error: grpc.ServiceError = new grpc.ServiceError();
error.code = grpc.status.OK;
error.metadata = metadata;

const statusObject: grpc.StatusObject = {
  code: grpc.status.OK,
  details: "details",
  metadata,
};

/**
 * credentials namespace
 */
const credentials = grpc.credentials;

let c: grpc.CallCredentials;
c = credentials.combineCallCredentials(credentials.createInsecure(), credentials.createInsecure());
c = credentials.combineChannelCredentials(new grpc.ChannelCredentials(), credentials.createInsecure(), credentials.createInsecure());
const googleCredential: grpc.GoogleCredential = {
  access_token: "accessToken",
  expiry_date: 1,
  refresh_token: "refreshToken",
  token_type: "tokenType",
};
c = credentials.createFromGoogleCredential(googleCredential);
c = credentials.createFromMetadataGenerator((params, callback) => {
  const url = params.service_url;
  callback(new Error(), metadata);
  callback(null, metadata);
});

let chC: grpc.ChannelCredentials;
chC = credentials.createInsecure();
chC = credentials.createSsl();
chC = credentials.createSsl(new Buffer(""));
chC = credentials.createSsl(new Buffer(""), new Buffer(""));
chC = credentials.createSsl(new Buffer(""), new Buffer(""), new Buffer(""));
