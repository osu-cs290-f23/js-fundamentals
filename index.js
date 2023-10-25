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

console.log("\n\n======================")
console.log("== Functions")
console.log("======================")

function add(a, b, c) {
    console.log("== add() called with arguments:", arguments)
    if (c) {
        return a + b + c
    } else {
        // c is undefined
        return a + b
    }
}

function subtract(a, b, c) {
    return a - b - c
}

console.log("== add(1, 2, 3):", add(1, 2, 3))
console.log("== add('1', '2', '3'):", add('1', '2', '3'))
console.log("== add('1', 2, 3):", add('1', 2, 3))
console.log("== add('1', '2'):", add('1', '2'))
console.log("== add(1, 2, 3, 4, 5, 6):", add(1, 2, 3, 4, 5, 6))

var functionVariable = add
console.log("== functionVariable:", functionVariable)
console.log("== functionVariable(1, 2, 3):", functionVariable(1, 2, 3))

function foo(fn, a, b, c) {
    console.log("== in foo(), fn(a, b, c):", fn(a, b, c))
}
foo(add, 1, 2, 3)
foo(subtract, 1, 2, 3)
foo(function (a, b, c) {
    return a * b * c
}, 4, 5, 6)

console.log("== Looping through array with forEach()")
array.forEach(function (elem) {
    console.log("  -- elem:", elem);
})

console.log("== Looping through array with forEach() with index")
array.forEach(function (elem, idx) {
    console.log("  -- elem:", elem, "idx:", idx);
})

console.log("\n\n======================")
console.log("== Objects")
console.log("======================")

var person = {
    firstName: "Luke",
    lastName: "Skywalker",
    getFullName: function () {
        return this.firstName + " " + this.lastName
    }
}

console.log("== person:", person)
console.log("== person['firstName']:", person['firstName'])
console.log("== person.firstName:", person.firstName)

var fieldName = "lastName"
console.log("== person[fieldName]:", person[fieldName])

console.log("== person.getFullName():", person.getFullName())

var person2 = {
    firstName: "Leia",
    lastName: "Organa",
    getFullName: function () {
        return this.firstName + " " + this.lastName
    }
}

console.log("== person2:", person2)

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName
}

var p1 = new Person("Luke", "Skywalker")
console.log("== p1:", p1)
console.log("== p1.getFullName():", p1.getFullName())

var p2 = new Person("Leia", "Organa")
console.log("== p2:", p2)
console.log("== p2.getFullName():", p2.getFullName())
