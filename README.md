How to compile & load:
```
$ git clone https://github.com/oleavr/frida-agent-example
$ cd frida-agent-example/
$ npm install
$ tsc
$ frida-compile -x agent/index.js -o agent.js
$ frida -U -f com.example.android -l agent.js --no-pause
```
