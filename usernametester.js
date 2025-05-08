// usernametester.js

const UsernameValidator = require('./UsernameValidator');

// Create an instance of UsernameValidator
const validator = new UsernameValidator();

// Sample test cases
console.log(validator.validateUsername("john_doe"));       // false - underscore not allowed
console.log(validator.validateUsername("1234john"));       // false - must start with a letter
console.log(validator.validateUsername("jane_doe12345"));  // false - underscore not allowed
console.log(validator.validateUsername("JaneDoe123"));     // true
console.log(validator.validateUsername("abc111xyz"));      // false - contains "111"
console.log(validator.validateUsername("a1b2c3d4e5"));      // true
