// UsernameValidator.js

class UsernameValidator {
    constructor() {
      // Regular expression explanation:
      // ^[A-Za-z]           must start with a letter
      // [A-Za-z0-9]{4,14}   next 4-14 characters can be letters or digits (for total length 5-15)
      // $                   end of string
      this.usernameRegex = /^[A-Za-z][A-Za-z0-9]{4,14}$/;
    }
  
    validateUsername(username) {
      // First check: matches base
      if (!this.usernameRegex.test(username)) {
        return false;
      }
  
      // My custom rule: 3 or more identical characters in a row not allowed (anti-cheating mechanism). This rule prevents spam-like patterns and ensures unique usernames are implemented.
      if (/([A-Za-z0-9])\1\1/.test(username)) {
        return false;
      }
  
      return true;
    }
  }
  
  module.exports = UsernameValidator;
  