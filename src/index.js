module.exports = function reverse (n) {
return n.toString().split('').reverse().join('').replace(/[^a-zA-Z0-9]/g, '');

}
