
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl =>{
        tbl.increments('project_id')
        tbl.varchar('project_name', 128).notNullable();
        tbl.varchar('project_description', 256);
        tbl.boolean('project_completed').notNullable().defaultTo(0);
    })
    .createTable('resources', tbl =>{
        tbl.increments('resource_id')
        tbl.varchar('resource_name', 128).notNullable().unique();
        tbl.varchar('resource_description', 256)
    })
    .createTable('tasks', tbl =>{
        tbl.increments('task_id');
        tbl.varchar('task_description', 256).notNullable();
        tbl.varchar('task_notes', 256);
        tbl.boolean('task_completed').notNullable().defaultTo(0);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('project_resources', tbl =>{
        tbl.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('resource_id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};


exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
