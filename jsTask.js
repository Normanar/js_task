///////////////////////////////////////////////////////////////

let pr1 = new Promise((res) => {
    res(10)
})
let pr2 = new Promise((res) => {
    res(0)
})

pr1
    .then((res) => {
        console.log(res)
        return res + 2
    })
    .then((res) => {
        console.log(res)
        return res + 2
    })
    .then(console.log)

pr2
    .then((res) => {
        console.log(res)
        return res + 1
    })
    .then((res) => {
        console.log(res)
        return res + 1
    })
    .then(console.log)