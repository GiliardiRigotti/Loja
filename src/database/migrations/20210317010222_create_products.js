
exports.up = function(knex) {
  return knex.schema.createTable('products',function (table){
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.string('size').notNullable();
      table.string('value').notNullable();
      table.string('categorie_id').notNullable();

      table.foreign('categorie_id').references('id').inTable('categories');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
