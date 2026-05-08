/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const a = value.length;
  const b = a - 1;
  return value.slice(7, b);
}

/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  const a = value.length;
  const b = a - 1;
  if (value[0] === ' ') {
    return value.slice(2, a);
  }
  if (value[0] === '\t') {
    return value.slice(1, b);
  }
  return value;
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  const a = str.length - 1;
  return str.slice(1, a);
}

/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toLocaleUpperCase();
}
/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  const email = str.match(emailRegex);
  return email;
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(/* width, height */) {
  throw new Error('Not implemented');
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */

function isString(/* value */) {
  throw new Error('Not implemented');
}

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  let id;
  if (value === 'A♣') {
    id = 0;
  }
  if (value === '2♣') {
    id = 1;
  }
  if (value === '3♣') {
    id = 2;
  }
  if (value === '4♣') {
    id = 3;
  }
  if (value === '5♣') {
    id = 4;
  }
  if (value === '6♣') {
    id = 5;
  }
  if (value === '7♣') {
    id = 6;
  }
  if (value === '8♣') {
    id = 7;
  }
  if (value === '9♣') {
    id = 8;
  }
  if (value === '10♣') {
    id = 9;
  }
  if (value === 'J♣') {
    id = 10;
  }
  if (value === 'Q♣') {
    id = 11;
  }
  if (value === 'K♣') {
    id = 12;
  }
  if (value === 'A♦') {
    id = 13;
  }
  if (value === '2♦') {
    id = 14;
  }
  if (value === '3♦') {
    id = 15;
  }
  if (value === '4♦') {
    id = 16;
  }
  if (value === '5♦') {
    id = 17;
  }
  if (value === '6♦') {
    id = 18;
  }
  if (value === '7♦') {
    id = 19;
  }
  if (value === '8♦') {
    id = 20;
  }
  if (value === '9♦') {
    id = 21;
  }
  if (value === '10♦') {
    id = 22;
  }
  if (value === 'J♦') {
    id = 23;
  }
  if (value === 'Q♦') {
    id = 24;
  }
  if (value === 'K♦') {
    id = 25;
  }
  if (value === 'A♥') {
    id = 26;
  }
  if (value === '2♥') {
    id = 27;
  }
  if (value === '3♥') {
    id = 28;
  }
  if (value === '4♥') {
    id = 29;
  }
  if (value === '5♥') {
    id = 30;
  }
  if (value === '6♥') {
    id = 31;
  }
  if (value === '7♥') {
    id = 32;
  }
  if (value === '8♥') {
    id = 33;
  }
  if (value === '9♥') {
    id = 34;
  }
  if (value === '10♥') {
    id = 35;
  }
  if (value === 'J♥') {
    id = 36;
  }
  if (value === 'Q♥') {
    id = 37;
  }
  if (value === 'K♥') {
    id = 38;
  }
  if (value === 'A♠') {
    id = 39;
  }
  if (value === '2♠') {
    id = 40;
  }
  if (value === '3♠') {
    id = 41;
  }
  if (value === '4♠') {
    id = 42;
  }
  if (value === '5♠') {
    id = 43;
  }
  if (value === '6♠') {
    id = 44;
  }
  if (value === '7♠') {
    id = 45;
  }
  if (value === '8♠') {
    id = 46;
  }
  if (value === '9♠') {
    id = 47;
  }
  if (value === '10♠') {
    id = 48;
  }
  if (value === 'J♠') {
    id = 49;
  }
  if (value === 'Q♠') {
    id = 50;
  }
  if (value === 'K♠') {
    id = 51;
  }
  return id;
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
