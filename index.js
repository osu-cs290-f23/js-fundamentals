console.log("Hello, world!!")

var n = 16
// n = "string"
// n = true
// n = []
// n = {}

console.log("== n:", n)
console.log("== typeof(n):", typeof(n))

console.log("\n\n======================")
console.log("== Numbers")
console.log("======================")

var pi = 3.1415

console.log("== pi:", pi)
console.log("== typeof(pi):", typeof(pi))

console.log("== 9 / 5:", 9 / 5)

console.log("\n\n======================")
console.log("== Comparisons")
console.log("======================")

console.log("== 2 == 2:", 2 == 2)
console.log("== 3 == 2:", 3 == 2)
console.log("== 2 == '2':", 2 == '2')
console.log("== 2 === '2':", 2 === '2')
console.log("== 2 != '2':", 2 != '2')
console.log("== 2 !== '2':", 2 !== '2')

console.log("\n\n======================")
console.log("== Strings")
console.log("======================")

var str1 = "This is \"a\" 'string'"
var str2 = 'This is also a "string"'
var longerString = str1 + " " + str2
console.log("== longerString:", longerString)
console.log("== typeof(longerString):", typeof(longerString))

var numberStr = "222" + 111
console.log("== numberStr:", numberStr)

var decathlon = "decathlon"
console.log("== decathlon.indexOf('cat'):", decathlon.indexOf('cat'))

var team = "team"
console.log("== team.indexOf('i'):", team.indexOf('i'))

console.log("\n\n======================")
console.log("== Arrays")
console.log("======================")

var array = [ true, "2", 3, [ 'a', 'b', 'c' ] ]
console.log("== array:", array)
console.log("== array.length:", array.length)
for (var i = 0; i < array.length; i++) {
    console.log("  -- ", array[i])
}
