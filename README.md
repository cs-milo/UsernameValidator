Username Validator
==================

A simple Node.js-based CLI program for validating usernames based on specific rules using regular expressions. This project was developed as part of a JavaScript assignment focused on object-oriented programming, regex, and module organization.

Features
--------
- Validates usernames with the following rules:
  - Must be between 5 and 15 characters long
  - Must start with a letter
  - Can only contain letters and digits
- Includes a custom anti-cheating validation:
  - Usernames cannot contain three or more identical characters in a row (e.g., "aaa", "111", etc.)

Sample Output
-------------
false  // "john_doe" - contains underscore (invalid character)  
false  // "1234john" - does not start with a letter  
false  // "jane_doe12345" - contains underscore  
true   // "JaneDoe123" - valid  
false  // "abc111xyz" - contains triple '1'  
true   // "a1b2c3d4e5" - valid

How to Run
----------
1. Clone the repo or download the ZIP
2. Make sure Node.js is installed (https://nodejs.org)
3. Open the terminal and run:

   node usernametester.js

Project Structure
-----------------
assignment_6/
├── UsernameValidator.js   // Contains the class with validation logic  
└── usernametester.js      // Script to test sample usernames

Custom Anti-Cheat Rule Explanation
----------------------------------
As an originality requirement, this program includes a custom rule that disallows three or more identical characters in a row. This helps prevent spammy or bot-like usernames.

Author
------
Milo Perry  
Computer Programming and Analysis Student

Feel free to fork or contribute!
