exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('project').del()
      .then(function () {
        // Inserts seed entries
        return knex('project').insert([
          {
            id: 1,
            project_name: 'Make sprint',
            description: 'adding data',            
            completed: false
          },
          {
            id: 2,
            project_name: 'Have a dinner',            
            completed: false
          },
          {
            id: 3,
            project_name: 'Walk around', 
            description: 'Must be atleast 10000 steps',          
            completed: false
          }
        ]);
      });
  };