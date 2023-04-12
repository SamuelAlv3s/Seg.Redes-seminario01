const tls = require("tls");
const fs = require("fs");
const path = require("path");

const options = {
  key: fs.readFileSync(path.resolve(__dirname, "./server-key.pem")),
  cert: fs.readFileSync(path.resolve(__dirname, "./server-cert.pem")),
  ca: fs.readFileSync(path.resolve(__dirname, "./ca-cert.pem")),
};

const server = tls.createServer(options, (socket) => {
  socket.on("data", (data) => console.log(`Texto/tecla digitada: ${data}`));
  socket.on("end", () => console.log("Conexão encerrada"));
});

server.listen(8002);
