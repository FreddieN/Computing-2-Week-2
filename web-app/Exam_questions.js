// import R from "./ramda.js";

/**
 * This file is an adaption of the Computing 1 exam into Javascript.
 * @namespace Exam_questions
 * @author Pietro Ferraro, adapted to Javascript by A. Freddie Page
 * @version 2021/22
 * @property {object} q1
 */
const Exam_questions = {
    "q1": {},
    "q2": {},
    "q3": {},
    "q4": {},
    "q5": {},
    "q6": {},
    "q7": {},
    "q8": {}
};

/**
 * Write a function to find the shortest word from a list of words.
 * @memberof! Exam_questions
 * @function
 * @param {string[]} word_list An array of words to find the shortest in.
 * @returns {string} The shortest word in the input array.
 * @example shortest_word(["hello", "cat", "ok", "12345"]) // "ok";
 */
Exam_questions.q1.shortest_word = function (word_array) {
    var shortest = -1
    var shortest_word = ""
    word_array.forEach(element => {
        if(element.length < shortest || shortest == -1) {
            shortest = element.length
            shortest_word = element
        }
    });
    if(word_array.length != 0) {
        return shortest_word
    } else {
        return undefined
    }
};

/**
 * Write a function to find the sum of all the numerical values in a list
 * that can contain an arbitrary number of arbitrary types
 * @memberof! Exam_questions
 * @function
 * @param {array} array_of_any_type An array containing numeric and non-numeric
 * values.
 * @returns {number} The sum of the numeric entries.
 * @example sum_of_numbers(["hello", "cat", 2, true, 17, undefined]) // 19;
 */
Exam_questions.q2.sum_of_numbers = function (array_of_any_type) {
    array_of_any_type = array_of_any_type.filter(value => /^-?\d+\.?\d*$/.test(value));
    return array_of_any_type.reduce((partialSum, a) => partialSum + a, 0);

};

/**
 * Write a function that finds the longest palindrome in an array of strings.
 * - if there is no palindrome in the input array,
 * the function will return `undefined`.
 * - if there are two or more palindromes of the same length,
 * return the first one in the list.
 * - Spaces should be stripped out from the the strings.
 * - Result is case sensitive.
 * - Punctuation characters are treated as any other (non-space) character.
 *
 * Note: A palindrome is a word, phrase, or sequence that reads
 * the same backward as forward.
 * @memberof! Exam_questions
 * @function
 * @param {string[]} string_array An array of potentially palindromic strings.
 * @returns {(string | undefined)} The longest palindrome,
 * or undefined if no palindromes provided.
 * @example longest_palindrome(["cat", "hello", "nun"]) // "nun"
 * @example longest_palindrome(["cat", "hello", "nun", "never odd or even"])
 *   // "never odd or even"
 */
Exam_questions.q3.longest_palindrome = function (string_array) {
    var longest_palindrome = undefined
    var longest_palindrome_length = -1
    string_array.forEach(element => {
        var orig = element
        element = element.trim(" ")
        element = element.replace(/\s/g, '');
        if(element.split("").reverse().join("") == element && element.length > longest_palindrome_length) {
            longest_palindrome = orig
            longest_palindrome_length = orig.length
        }

    })

    return longest_palindrome

};

/**
 * Write a function that, given two integer inputs a and b (with a > b),
 * returns a list of all the numbers between a and b (a and b included)
 * whose square root is an integer.
 * @memberof! Exam_questions
 * @function
 * @param {number} a The start of the range.
 * @param {number} b The end of the range.
 * @returns {number[]} An array of perfect squares.
 * @example perfect_squares(2, 16) // [4, 9, 16]
 */
Exam_questions.q4.perfect_squares = function (a, b) {
    var perfect_squares = []
    for (let i = a; i <= b; i++) {
        if(i > 0 && Math.sqrt(i) % 1 === 0){
            perfect_squares.push(i)
        }
    }

    return perfect_squares
};

/**
 * Write a function that, given a list of numbers and an integer
 * returns an object with two keys: "numbers" and "powers".
 *   - The "numbers" property is the input list of numbers,
 *   - The "powers" property is the n-th power of the numbers of the input list.
 * @memberof! Exam_questions
 * @function
 * @param {number[]} numbers
 * @param {number} exponent
 * @returns {object<array<number>>} Object containing numbers and power arrays.
 * @example power_object([1, 3, 5, 6], 2)
 *   // {"numbers": [1, 3, 5, 6], "powers": [1, 9, 25, 36]}
 */
Exam_questions.q5.power_object = function (numbers, exponent) {
    var powers = []
    numbers.forEach(element => {
        powers.push(element**exponent)
    })
    return {"numbers": numbers, "powers": powers}
};

/**
 * Write a function that accepts two string as inputs.
 * The second string should be the same as the first
 * but with characters in a different order and have one extra character.
 * The function should return that extra character in this case.
 * and `undefined` for all other inputs.
 * @memberof! Exam_questions
 * @function
 * @param {string} short_string Any string.
 * @param {string} long_string A string with the same characters as short_string
 * in any order and with an additional character, or any other string.
 * @returns {(string | undefined)} the missing character or undefined.
 * @example missing_character("hello", "hellon") // "n"
 * @example missing_character("hello", "hellonn") // undefined
 */
Exam_questions.q6.missing_character = function (short_string, long_string) {
    var long_missing_end = long_string.slice(0, long_string.length-1)
    if(long_missing_end == short_string) {
        return long_string.slice(long_string.length-1, long_string.length)
    } else {
        return undefined
    }
};

/**
 * Write a function that accepts two integers as an input.
 * The function will return a list of all the numbers n between a and b
 * (a and b included), such that every digit in n is even.
 * @memberof! Exam_questions
 * @function
 * @param a The start of the range.
 * @param b The end of the range.
 * @returns {number[]} A list of numbers with only even digits.
 * @example even_digits(2, 27) // [2, 4, 6, 8, 20, 22, 24, 26]
 */
Exam_questions.q7.even_digits = function (a, b) {
};

/**
 * Write a function with two inputs arguments 'name', 'age'.
 * The function should return the string,
 * ``Hello ${name}, is your age ${age}?``.
 * I've implemented this one.
 * @memberof! Exam_questions
 * @function
 * @param {string} [name = "Andrea"] The name of the person we are talking to.
 * @param {number} [age = 19] Our assumption of the person's age.
 * @returns {string} The constructed question.
 * @example age_question("Pietro", 32) // "Hello Pietro, is your age 32?"
 */
Exam_questions.q8.age_question = function (name = "Andrea", age = 19) {
    return `Hello ${name}, is your age ${age}?`;
};

export default Object.freeze(Exam_questions);
