import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User"
import Course from "App/Models/Course"
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {

    public async register({request, auth, response}:HttpContextContract){
        try{
            const userData = await request.validate(UserValidator)

            const userFound = await User.findBy('email', `${userData.email}`)
            if(userFound) return response.status(400).json({'status':'User already registered'})
    
            const user = await User.create(userData)
    
            const token = await auth.use('api').login(user, {expiresIn: "10 days"})
    
            return {user, token}
        }
        catch(error){return response.status(400).json({'status':'Something went wrong'})}

    }

    public async login ({ request, auth, response }: HttpContextContract) {
        try{
            const userData = request.only(['email', 'password'])

            const userFound = await User.findBy('email', `${userData.email}`)
            if(!userFound) return response.status(400).json({'status':'User Not registered'})
    
            const token = await auth.use("api").attempt(
                userData.email, 
                userData.password, 
                {expiresIn: "10 days"});
    
            return token.toJSON(); 
        }
        catch(error){return response.status(400).json({'status':'Something went wrong'})}

    }

    public async enrol ({ params, response }: HttpContextContract) {
        try{
            const userFound = await User.findBy('id', `${params.userId}`)
            if(!userFound) return response.status(400).json({'status':'User Not registered'})

            const courseFound = await Course.findBy('id', `${params.courseId}`)
            if(!courseFound) return response.status(400).json({'status':'Course Not Found'})

            const enrollment =  await User.related('courses').attach([params.courseId])
    
            return enrollment; 
        }
        catch(error){console.log(error)
            return error
             response.status(400).json({'status':'Something went wrong'})}

    }
    

}
