///////////////////////////////////////////////////////////////

// let pr1 = new Promise((res) => {
//     res(10)
// })
// let pr2 = new Promise((res) => {
//     res(0)
// })
//
// pr1
//     .then((res) => {
//         console.log(res)
//         return res + 2
//     })
//     .then((res) => {
//         console.log(res)
//         return res + 2
//     })
//     .then(console.log)
//
// pr2
//     .then((res) => {
//         console.log(res)
//         return res + 1
//     })
//     .then((res) => {
//         console.log(res)
//         return res + 1
//     })
//     .then(console.log)

///////////////////////////////////////////////////////////////

(
    function (){
        setTimeout(() => console.log(1), 100)
    }
)();

console.log(2)

let i = 0

while (i < 50000000) {
    i++
}

new Promise((res, rej) => {
    setTimeout(() => console.log(3), 50);
})

function f() {
    console.log(4)
}
Promise.resolve(console.log(5))