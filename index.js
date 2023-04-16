const http = require('http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
    const { url } = req;

    console.log(url);

    res.end('Carmel you marvelous arse');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});



