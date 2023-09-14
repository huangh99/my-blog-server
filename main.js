const { APP_PORT } = require('./config/default')

const app = require('./app')

app.listen(APP_PORT, () => {
  console.log(`Server is running on http://localhost:${APP_PORT}`)
})
