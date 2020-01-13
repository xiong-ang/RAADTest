const ActiveDirectory = require('activedirectory');
const RAUsername = 'xxxx3';
const RAPassword = 'xxxxxx';

const username = `${RAUsername}@ra-int.com`;
const password = RAPassword;
const config = {
    url: 'ldap://ra-int.com',
    baseDN: 'dc=ra-int,dc=com',
    username,
    password
};
const ad = new ActiveDirectory(config);


ad.authenticate(username, password, function (err, auth) {
    if (err) {
        console.log('ERROR: ' + JSON.stringify(err));
        return;
    }

    if (auth) {
        console.log('Authenticated!');
    }
    else {
        console.log('Authentication failed!');
    }
});


ad.findUser(RAUsername, function (err, user) {
    if (err) {
        console.log('ERROR: ' + JSON.stringify(err));
        return;
    }

    if (!user) console.log('User: ' + RAUsername + ' not found.');
    else console.log(JSON.stringify(user));
});