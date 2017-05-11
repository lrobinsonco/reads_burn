
exports.up = function(knex, Promise) {
  return knex.schema.createTable("author", authorTable => {
    authorTable.increments()
    authorTable.string("first_name")
    authorTable.string("last_name")
    authorTable.text("biography")
    authorTable.text("portrait_url")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("author")
};
