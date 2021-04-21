import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Course from "App/Models/Course";


export default class CourseSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Course.createMany([{
      title:'Node.js, Express, MongoDB & More: The Complete Bootcamp 2021',
      description:'Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)',
      requirements:'Basic understanding of JavaScript is required (the course contains a section about asynchronous JavaScript with promises and async/await in case you need to get up to speed)'
    },{
      title:'Build Responsive Real World Websites with HTML5 and CSS3',
      description:'The easiest way to learn modern web design, HTML5 and CSS3 step-by-step from scratch. Design AND code a huge project.',
      requirements:'No coding or design experience necessary'
    },{
      title:'The Complete JavaScript Course 2021: From Zero to Expert!',
      description:'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!',
      requirements:'A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.'
    }])
  }
}
