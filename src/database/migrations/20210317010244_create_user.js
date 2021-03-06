
exports.up = function(knex) {
    return knex.schema.createTable('user',function (table){
        table.increments('id').primary();
        table.string('user').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
