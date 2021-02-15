
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'read instuctions', notes:'file: Readme', project_id: '1', completed: 'false'},
        {id: 2, description: 'dress up', notes:'if it is rainy, take umbrella', project_id: '2', completed: 'false'},
        {id: 3, description: 'wtite code', notes:'use VS', project_id: '1', completed: 'false'}
      ]);
    });
};
