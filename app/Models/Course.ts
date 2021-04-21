import { DateTime } from 'luxon'
import { BaseModel, column,  hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Section from "./Section";

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String

  @column()
  public description: String
  
  @column()
  public requirements: String

  @column()
  public price: Number

  @hasMany(() => Section)
  public sections: HasMany<typeof Section>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
