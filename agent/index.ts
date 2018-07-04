import { log } from "./logger";

rpc.exports = {
  async init(stage: string, parameters: any): Promise<void> {
    try {
      log("[init]");

      log("Let's see");
      const socket = await Socket.connect({
        family: AddressFamily.IPv4,
        host: "127.0.0.1",
        port: 1337
      });
      log("Connected");
      await socket.output.writeAll(encode("Hello"));
      log("Bye");
    } catch (e) {
      log("Oops: " + e.stack);
    }
  },
  dispose(): void {
    console.log("[dispose]");
  }
};

type DuktapeBuffer = any;
declare const TextEncoder: any;
const encoder = new TextEncoder();

function encode(str: string): DuktapeBuffer {
  return encoder.encode(str);
}
