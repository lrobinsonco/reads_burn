
exports.up = function(knex, Promise) {
  return knex.schema.createTable("book", table => {
    table.increments("id")
    table.string("title")
    table.string("genre")
    table.text("description")
    table.text("cover_url")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("book")
};
