const { User } = require('../models');

const userData = [{
    username: 'QueenOfBirbs',
    password: 'pompompurin'

},
{
    username: 'ILoveMyCat',
    password: 'tycho'
},
{
    username: 'LobsterApron',
    password: 'goodwill'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;