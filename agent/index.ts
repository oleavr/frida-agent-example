import Java from "frida-java-bridge";
send({ "type": "status", "message": "script loading" })

Java.perform(() => { // avoid java.lang.ClassNotFoundException
    send({ "type": "status", "message": "java done" })
});

send({ "type": "status", "message": "script loaded" })