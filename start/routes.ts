/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})

Route.get('/', async () => {
  return { hello: 'world' }
})

// Route
// .resource('users', 'UsersController')
// .only(['store'])
// .apiOnly()

Route.post('register', 'UsersController.register')

Route.post('/login', 'UsersController.login')

Route.get('/courses', 'CoursesController.getCourses')

Route.get('/courses/:id', 'CoursesController.getCourse')

Route.post('/enrol/:userId/:courseId','UsersController.enrol')

