var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1488099924;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('D MMM, Y @ H:mm a'));

console.log('Current moment', currentMoment.format('MMMM Do, Y @ H:mm A'));
