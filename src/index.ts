import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import { logger } from 'hono/logger'
import { csrf } from 'hono/csrf'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { timeout } from 'hono/timeout'
import { HTTPException } from 'hono/http-exception'
import { prometheus } from '@hono/prometheus'
import {cors} from 'hono/cors'

import { booksRouter} from './Books/books.router'

import { authorsRouter} from './autho/authors.router'




const app = new Hono()

const customTimeoutException = () =>
  new HTTPException(408, {
    message: `Request timeout `,
  })

const { printMetrics, registerMetrics } = prometheus()

// inbuilt middlewares
app.use(logger())  //logs request and response to the console
app.use(csrf()) //prevents CSRF attacks by checking request headers.
app.use(trimTrailingSlash()) //removes trailing slashes from the request URL
app.use('/', timeout(10000, customTimeoutException))
//3rd party middlewares
app.use('*', registerMetrics)




// default route
app.get('/ok', (c) => {
  return c.text('The server is running!')
})
app.get('/timeout', async (c) => {
  await new Promise((resolve) => setTimeout(resolve, 11000))
  return c.text("data after 5 seconds", 200)
})
app.get('/metrics', printMetrics)

// custom route
app.route("/", booksRouter)   // books
app.route("/", authorsRouter)



// render message
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
  <h2>The server is Up</h2>
      
      
</html>

    `);
});

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})
console.log(`Server is running on port ${process.env.PORT}`)