import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Course from "./Course";
import Lesson from "./Lesson";

export default class Section extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String

  @belongsTo(() => Course)
  public course: BelongsTo<typeof Course>;

  @hasMany(() => Lesson)
  public lessons: HasMany<typeof Lesson>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
