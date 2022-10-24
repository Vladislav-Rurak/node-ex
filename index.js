const http = require('http')

const PORT = process.env.PORT || 5000
const HOST = 'localhost'

const httpServer = http.createServer((request, response) => {
  const { url, method } = request
  console.log('req', request)
  console.log('url, method', url, method)

  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html')
  response.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Home</h1>
</body>
</html>`)
})

httpServer.listen(PORT, HOST, () => {
  console.log(`Server instance is listening http://${HOST}:${PORT}`)
})
