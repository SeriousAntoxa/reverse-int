module.exports = function reverse (n) {
    
    if (n > 0) {
        return n.toString().split('').reverse().join('')
    } else {
        n = -n
        return n.toString().split('').reverse().join('')
    }
    
}
