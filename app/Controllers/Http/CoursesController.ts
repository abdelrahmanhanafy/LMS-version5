// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from "App/Models/Course"

export default class CoursesController {
    public async getCourses ({response}) {
        try{
            const courses = await Course.all()
            return courses
        }
        catch(error){return response.status(400).json({'status':'Something went wrong'})}
    }

    public async getCourse ({ params, response }) {
        try{
            const course = await Course.find(params.id)
            return course
        }
        catch(error){return response.status(400).json({'status':'Something went wrong'})}
      }
      
}
