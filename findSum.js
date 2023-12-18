/**
 * if array = [1,2,3,4] then return sum = 10
 * if array = [7,3,2] then return =12
 * 
 * 
 * pseudocode
 * -----------------
 * function(int_array)
 * 
 * loop
 * initialize sum = 0
 * 
 * sum = sum + int_array[i]
 * 
 */

function findSum(int_array){

    let sum = 0
    for(let i = 0; i <= int_array . length -1; i++ ){

        sum = sum + int_array[i]

        
    }

    return sum
}

let results = findSum([1,2,3,9])

console.log(results)