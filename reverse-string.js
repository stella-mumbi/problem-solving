/*
Given a string of a given length,reverse-each character in the string

example

-----


"hello" ->"olleh"
"hey"->"yey"
"welcome"-> "emoclew"

pseudocode


------
function (str)
if empty return "string  cannot be empty"
if the data type != string return "only strings allowed"
looping in reverse order
store characters in a variable

return reverse string

*/

function reverseString(str){
    if(str.length ==0){
        return "string cannot be empty"
    }
    if (typeof str != "string"){
        return "only strings allowed"
    }
    let reversed_str = ""
    for (let i = str.length - 1; i >= 0; i--){
        reversed_str = reversed_str + str[i]

    }

    return reversed_str
}


let result = reverseString("welcome")
console.log(result)