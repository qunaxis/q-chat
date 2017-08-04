import server from './app'

const { PORT = 8080 } = process.env
server.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // eslint-disable-line no-console