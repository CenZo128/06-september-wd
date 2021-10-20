// // // Function: kumpulan kode yang melakukan suatu task tertentu
// // function hello(name, age) {
// //     console.log("Hello, my name is " + name);
// //     console.log("My age is " + age)
// // }

// // // hello("James", 27);
// // // hello("Cindy", 25);

// // // Object: kumpulan value yang memiliki key dan method

// // let student = {
// //     name: "James",
// //     age: 27
// // }
// // // alert(student.name);

// // // alert(student.age);

// // // let name = prompt("Masukkan nama anda: ");
// // // console.log("Result name: " + name);

// // // let angka1 = prompt("Masukkan angka 1: ");
// // // let angka2 = prompt("Masukkan angka 2: ");
// // // let total = Number(angka1) + Number(angka2);

// // // console.log("Result total angka: " + total)

// // let confirmation = confirm("Konfirmasi kehadiran:")
// // if(confirmation === true){
// //     console.log("Confirmation true")
// // }else{
// //     console.log("Confirmation false")
// // }

// // let btnClick = document.querySelector('#btnClick');
// // console.log(btnClick);
// // btnClick.style.background = "lightgreen"
// // btnClick.style.fontSize = "36px"
// // btnClick.style.padding = "16px"

// // function clickHello() {
// //     // console.log("Add Event Listener")
// //     let acc = confirm("Are you sure you want to accept ?");
// //     if(acc === true) {
// //         console.log("Accept is true")
// //     }else{
// //         console.log("Accept is false")
// //     }
// // }

// // btnClick.addEventListener("click", clickHello)
// let addBtn = document.getElementById("btnAdd");
// let substractBtn = document.getElementById("btnSubstract");
// // console.log(addBtn, substractBtn);
// let numberMain = document.getElementById("mainNumber");
// numberMain.style.fontSize = "56px"
// numberMain.style.color = "blue"
// numberMain.style.fontWeight = "bold"

// let number = 0;
// numberMain.innerHTML = number;

// function addHandler() {
//     console.log("Ini add Handler")
//     if (number >= 10) {
//         alert("Max Number is 10. Thanks!")
//     } else {
//         number += 1;
//         numberMain.innerHTML = number;
//     }
// }

// function subtractHandler() {
//     console.log("Ini subtract Handler");
//     if (number <= 0) {
//         alert("Min number is 0. Thanks!")
//     } else {
//         number -= 1;
//         numberMain.innerHTML = number;
//     }
// }

// addBtn.addEventListener('click', addHandler);
// substractBtn.addEventListener('click', subtractHandler);

let items = [
    {
        id: 1,
        name: "Asus i7-12350",
        price: 15000000
    },
    {
        id: 2,
        name: "Hp Pavillion",
        price: 10000000
    }
]

let btnSubmit = document.getElementById('btnSubmit')

function submitHandler(e) {
    e.preventDefault()
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let id = items[items.length - 1].id + 1

    if (name === "" || price === "") {
        alert("Input name and price required")
    } else {
        let temp = {
            id, name, price: Number(price)
        }
        items.push(temp)
    }

    getItems()
    // console.log(temp)
}

btnSubmit.addEventListener('click', e => submitHandler(e))

function getItems() {
    let ulItems = document.getElementById('ulItems')
    ulItems.innerHTML = ''

    for (let i = 0; i < items.length; i++) {
        let liDiv = document.createElement("li")
        liDiv.innerHTML = `<li>${items[i].name} - Rp. ${items[i].price} </li>`
        ulItems.appendChild(liDiv)
        // console.log(items[i])
    }
}

getItems()