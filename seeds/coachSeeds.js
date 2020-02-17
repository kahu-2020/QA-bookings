
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coach_db').del()
    .then(function () {
      // Inserts seed entries
      return knex('coach_db').insert([
        {id: 1, first_name: 'Annelise', last_name: 'Lowther'},
        {id: 2, first_name: 'Kirsty', last_name: 'Snoep'},
        {id: 3, first_name: 'Kristen', last_name: 'Wingham'},
        {id: 4, first_name: 'Jade', last_name: 'Fielding'},
      ]);
    });
};
