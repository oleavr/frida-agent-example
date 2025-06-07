import frida
import time
import json

def on_message(message, data):
    print(json.dumps(message, indent=2))
        
def main():
    dev = frida.get_usb_device() # android
    pid = dev.spawn("com.example.package")
    session = dev.attach(pid)
    js = open("_agent.js", "r", encoding="utf8", newline="\n").read()
    script = session.create_script(js)
    script.on("message", on_message)
    script.load()
    dev.resume(pid)
    time.sleep(60)

if __name__ == "__main__":
    main()
