'use strict'

const Schema = use('Schema')

class PortfolioSchema extends Schema {
  up () {
    this.create('portfolio', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.string('type')
      table.string('illustration')
      table.integer('portfolio_details_id')
      table.date('published_at')
      table.timestamps()
    })
    this.create('portfolio_details', (table) => {
      table.increments()
      table.json('colors')
      table.string('typographie1')
      table.string('typographie2')
      table.text('problematique')
      table.text('presentation')
      table.text('technique')
      table.string('logo')
      table.string('folder')
      table.integer('portfolio_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('portfolio')
  }
}

module.exports = PortfolioSchema
