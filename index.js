// Add your functions here

const map = function(array, func) {
    let newA = [] 
    for (let i=0; i < array.length; i++) {
        newA.push(func(array[i]))
    }
    return newA
}