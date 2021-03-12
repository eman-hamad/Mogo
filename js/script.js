// https://forkify-api.herokuapp.com/api/search?&q=pizza
// https://forkify-api.herokuapp.com/api/get?rId={id}
async function getSalad() {
    let res = await fetch('https://forkify-api.herokuapp.com/api/search?&q=salad')
    let allRes = await res.json();
    console.log(allRes,'salad')
}


async function getBeef() {
    let res = await fetch('https://forkify-api.herokuapp.com/api/search?&q=beef')
    let allRes = await res.json();
    console.log(allRes,'beef')
}

async function getPizza() {
    let res = await fetch('https://forkify-api.herokuapp.com/api/search?&q=pizza')
    let allRes = await res.json();
    console.log(allRes,'pizza')
}

async function getData() {
    await getSalad();
    await getBeef()
    await getPizza();
}

getData()


// function getSalad() {

//     return new Promise(function (callback){
//         let myReq = new XMLHttpRequest();

//         myReq.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=salad');
//         myReq.send();

//         myReq.addEventListener('readystatechange', function () {
//             if (myReq.readyState == 4 && myReq.status == 200) {
//                 let res = JSON.parse(myReq.response).recipes;
//                 console.log(res)
//                 console.log('Salad')
//                 callback()
//             }
//         })
//     })

// }

// function getPizza() {
//     return new Promise(function (callback) {
//         let myReq = new XMLHttpRequest();

//         myReq.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=pizza');
//         myReq.send();

//         myReq.addEventListener('readystatechange', function () {
//             if (myReq.readyState == 4 && myReq.status == 200) {
//                 let res = JSON.parse(myReq.response).recipes;
//                 console.log(res)
//                 console.log('Pizza')
//                 callback();
//             }
//         })
//     })
// }

// function getBeef() {
//     return new Promise(function (callback) {
//         let myReq = new XMLHttpRequest();

//         myReq.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=beef');
//         myReq.send();

//         myReq.addEventListener('readystatechange', function () {
//             if (myReq.readyState == 4 && myReq.status == 200) {
//                 let res = JSON.parse(myReq.response).recipes;
//                 console.log(res)
//                 console.log('Beef')
//                 callback()
//             }
//         })
//     })
   
// }
// getSalad();
// getBeef
// getPizza();
// callbacks hell

// getSalad()
//     .then(function () { return getBeef() })
//     .then(function () { return getPizza() })
//     .then(function () { finish() })


// getSalad(function () {
//     getBeef(function () {
//         getPizza(function () {
//             finish()
//         })
//     })
// })

// Promise

// function finish() {

//     console.log('FINISH')
// }
// finish().then(function () {
//     console.log('asdasd')
// })


// wel1(function () {
//     wel2()
// })


// function wel2() {
//     console.log('wel2')
// }

// wel1(); // non blocking 
// getPizza();
// getSalad(); 
// wel2()// non-blocking

//sync -- Async
// callback
// non blocking 