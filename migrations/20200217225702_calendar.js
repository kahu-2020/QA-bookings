
exports.up = function(knex) {
  return knex.schema.createTable('calendar_table', table => {
      table.increments('id').primary()
      table.increments('year')
      table.string('month')
      table.string('day')
  })
};

exports.down = function(knex) {
  
};
