
exports.up = function(knex) {
  return knex.schema
  .createTable('project', tbl => {
      tbl.increments()
      tbl.string('project_name', 128).notNullable().unique()
      tbl.string('description', 128)
      tbl.boolean('completed')
  })
  .createTable('resource', tbl => {
      tbl.increments()
      tbl.string('resource_name',128).notNullable().unique()
      tbl.string('description', 128)
  })
  .createTable('task', tbl => {
      tbl.increments()
      tbl.string('description', 128).notNullable()
      tbl.text('notes', 256)      
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT') 
      tbl.boolean('completed')
        .notNullable()
  })
  .createTable('project_resource', tbl =>{
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    tbl.integer('resource_id') 
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
  // drop in the opposite order
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
};
