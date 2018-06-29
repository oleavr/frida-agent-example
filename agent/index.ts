import { log } from "./logger";

rpc.exports = {
    async init(stage: string, parameters: any) {
        try {
            log("[init]");

            log("Let's see");
            const socket = await Socket.connect({
                family: "ipv4",
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
    dispose() {
        console.log("[dispose]");
    }
};

type DuktapeBuffer = any;
declare const TextEncoder: any;
const encoder = new TextEncoder();

function encode(str: string): DuktapeBuffer {
    return encoder.encode(str);
}