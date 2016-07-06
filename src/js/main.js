
// require('../css/main.css');

// Stylesheets
require('../css/main.scss');

const WHO = 'JS';
let greeter = (who) => 'Hello from ' + who + '!';

document.getElementById('app').appendChild(
    document.createTextNode(greeter(WHO))
);
