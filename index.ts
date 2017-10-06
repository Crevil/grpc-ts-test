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
  credentials: {} as grpc.CallCredentials,
  deadline: new Date(),
  host: "host",
  parent: {} as grpc.Call,
  propagate_flags: grpc.propagate.DEFAULTS,
};
const duplexStream: grpc.ClientDuplexStream = client.makeBidiStreamRequest("method", serialize, deserialize, metadata, callOptions);

const writeableStream: grpc.ClientWritableStream = client.makeClientStreamRequest("method", serialize, deserialize, null, callOptions, (error: Error, value: any) => {});
client.makeClientStreamRequest("method", serialize, deserialize, null, null, (error: Error, value: any) => {});
client.makeClientStreamRequest("method", serialize, deserialize, metadata, callOptions, (error: Error, value: any) => {});
const write = writeableStream.write("message", grpc.writeFlags.BUFFER_HINT, () => {});

const readableStream: grpc.ClientReadableStream = client.makeServerStreamRequest("method", serialize, deserialize, {});
client.makeServerStreamRequest("method", serialize, deserialize, {}, metadata);
client.makeServerStreamRequest("method", serialize, deserialize, {}, metadata, callOptions);
const read: any = readableStream.read(2);

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
  clientStream: (call: grpc.ServerReadableStream, callback: grpc.sendUnaryData) => {
    const read: any = call.read(1);
  },
  serverStream: (call: grpc.ServerWriteableStream) => {
    const wrote: boolean = call.write("chunk", () => {});
    const wroteWithEncoding: boolean = call.write("chunk", "UTF", () => {});
  },
  duplexStream: (call: grpc.ServerDuplexStream) => {
    const read: any = call.read(1);
    const wrote: boolean = call.write("chunk", () => {});
    const wroteWithEncoding: boolean = call.write("chunk", "UTF", () => {});
  },
});
const port: number = server.bind("host:port", grpc.credentials.createInsecure());
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

const error: grpc.ServiceError = new Error();
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
const callCredentials: grpc.CallCredentials = credentials.combineCallCredentials(credentials.createInsecure().getCallCredentials(), credentials.createInsecure().getCallCredentials());
const googleCredential: grpc.GoogleOAuth2Client = {
  getRequestMetadata(optUri: string, cb: (err: Error, headers: any) => void) {},
};
c = credentials.createFromGoogleCredential(googleCredential);
c = credentials.createFromMetadataGenerator((params, callback) => {
  const url = params.service_url;
  callback(new Error(), metadata);
  callback(null, metadata);
});
const channelCredentials: grpc.ChannelCredentials = credentials.combineChannelCredentials(credentials.createInsecure(), credentials.createInsecure().getCallCredentials());

let chC: grpc.ChannelCredentials;
chC = credentials.createInsecure();
chC = credentials.createSsl();
chC = credentials.createSsl(new Buffer(""));
chC = credentials.createSsl(new Buffer(""), new Buffer(""));
chC = credentials.createSsl(new Buffer(""), new Buffer(""), new Buffer(""));
