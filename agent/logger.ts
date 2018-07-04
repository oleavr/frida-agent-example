
enum LogPriority {
  Verbose = 2,
  Debug = 3,
  Info = 4,
  Warn = 5,
  Error = 6,
  Fatal = 7
};

const androidLogWrite: any = new NativeFunction(
  Module.findExportByName("liblog.so", "__android_log_write"),
  "int",
  ["int", "pointer", "pointer"]);

const logTagBuf = Memory.allocUtf8String("frida");

export function log(message: string): void {
  const messageBuf = Memory.allocUtf8String(message);
  androidLogWrite(LogPriority.Info, logTagBuf, messageBuf);
}
