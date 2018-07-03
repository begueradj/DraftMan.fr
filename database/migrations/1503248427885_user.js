'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('website', 60).notNullable()
      table.string('github', 60).notNullable()
      table.string('twitter', 60).notNullable()
      table.string('linkedin', 60).notNullable()
      table.string('discord_username', 60).notNullable()
      table.string('discord_discriminator', 60).notNullable()
      table.string('discord_email', 60).notNullable()
      table.string('profil')
      table.integer('role')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
