var price = 2001
var taxRate = 0.25
var shoppingRate = 2.99
var total = (price * taxRate) + shoppingRate

console.log("total", total)

var totalRounded = Math.ceil(total)

console.log("ceil:", totalRounded)

var totalRounded = Math.round(total*100)/100

console.log("round:", totalRounded)
