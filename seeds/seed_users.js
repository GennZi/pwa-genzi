// seeds/[timestamp]_seed_users.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'John Doe', email: 'john@example.com'},
        {name: 'Jane Doe', email: 'jane@example.com'},
        {name: 'Sam Smith', email: 'sam@example.com'}
      ]);
    });
};
