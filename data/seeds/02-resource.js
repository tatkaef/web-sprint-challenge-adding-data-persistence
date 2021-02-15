
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, resource_name: 'computer', description:'With VS, Postman'},
        {id: 2, resource_name: 'park', description:'Not open space'},
        {id: 3, resource_name: 'kitchen', description:'It need be have oven'}
      ]);
    });
};
