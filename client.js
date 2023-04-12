const tls = require("tls");
const readline = require("readline");
const fs = require("fs");
const tty = require("tty");
const path = require("path");

readline.createInterface({ input: process.stdin, output: process.stdout });

if (tty.isatty(process.stdin)) {
  process.stdin.setRawMode(true);
}

const ca = fs.readFileSync(path.resolve(__dirname, "./ca-cert.pem"));
const options = { ca, rejectUnauthorized: false };
const socket = tls.connect(8002, options, () => console.log("Conectado"));

process.stdin.on("data", (input) => socket.write(input));
