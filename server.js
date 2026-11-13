
const http = require("http");

http.createServer((req, res) => {
    res.end("Hello");
}).listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
});
