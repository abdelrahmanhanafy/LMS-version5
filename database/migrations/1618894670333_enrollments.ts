import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Enrollments extends BaseSchema {
  protected tableName = 'enrollments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned()
      table.integer('course_id').unsigned()
      table.primary(['user_id', 'course_id'])
      table
      .foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table
      .foreign('course_id')
      .references('id')
      .inTable('courses')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
