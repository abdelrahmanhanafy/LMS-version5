import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor (protected ctx: HttpContextContract) {
  }

	/*
	 * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
	 *
	 * For example:
	 * 1. The username must be of data type string. But then also, it should
	 *    not contain special characters or numbers.
	 *    ```
	 *     schema.string({}, [ rules.alpha() ])
	 *    ```
	 *
	 * 2. The email must be of data type string, formatted as a valid
	 *    email. But also, not used by any other user.
	 *    ```
	 *     schema.string({}, [
	 *       rules.email(),
	 *       rules.unique({ table: 'users', column: 'email' }),
	 *     ])
	 *    ```
	 */
  public schema = schema.create({
	  name: schema.string({trim:true}, [
		  rules.maxLength(50),
		  rules.minLength(3),
		  rules.unique({table:'users',column:'name'}),
		  rules.required()
	  ]),
	  email:schema.string({trim:true}, [rules.unique({table:'users',column:'email'}),rules.required()]),
	  password:schema.string({},[rules.minLength(6),rules.required()])
  })

	/**
	 * Custom messages for validation failures. You can make use of dot notation `(.)`
	 * for targeting nested fields and array expressions `(*)` for targeting all
	 * children of an array. For example:
	 *
	 * {
	 *   'profile.username.required': 'Username is required',
	 *   'scores.*.number': 'Define scores as valid numbers'
	 * }
	 *
	 */
  public messages = {
	  minLength:'{{field}} must be at least {{options.minLength}} characters long',
	  maxLength:'{{field}} cannot be longer than {{options.maxLength}} characters long',
	  unique:'{{field}} must be unique',
	  required:'{{field}} must be required'
  }
}
