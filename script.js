let Name, age, isAge19, x;
/*  Name = 'demola'
 age = 19;
 isAge19 = true; */
x = 10
x %= 3
/* 
alert(Name); */
// let my_name = 'demola';
// console.log(my_name)
/*
*/
/* const whatever = 3 */
/* const whatever = (p1, p2) =>  p1 * p2 */
/* function whatever(p1,p2){
    return p1*p2
} 
const Names = 'Ade' 
*/
/* let whatever = (p1, p2) => { */
/*     Name = p1 * p2
    age = p1 + p2
    return (Name);
}

 */
/* console.log(demos.innerHTML.length); */

/* let count = 1
rubbish.addEventListener('click', (event) => {
    /* event.target.innerHTML = 'wewewe' */
/*count++
}) */



/* var fruits, text, fLen, counts;
fruits = ["Apple", "Grape", "watermelon", "Mango", "Avocado", "Strawberry", "Orange", "pawpaw"];
text = `<ul>`
fLen = fruits.length;
for (counts = 0; counts < fLen; counts++) {
    text += `<li><b>` + fruits[counts] + `</b> </li>`
}
text += `</ul>`
let p = document.querySelectorAll('p')
p.forEach(p => {
    p.style.backgroundColor = 'lime'
    let ademola = `<button>${x}</button>`
    p.innerHTML = text
}) */

var fruits, text, fLen, counts;
fruits = ["Apple", "Grape", "watermelon", "Mango", "Avocado", "Strawberry", "Orange", "pawpaw"];
fruits.push("pineapple")
text = `<ul>`
fruits.forEach(fruit => {
    text += `<li><b>` + fruit + `</b> </li>`
})
text += `</ul>`
let p = document.querySelectorAll('p')
p.forEach(p => {
    p.style.backgroundColor = 'lime'
    let ademola = `<button>${x}</button>`
    p.innerHTML = text
})
/* 
function myFunction(value){
    text += `<li><b>` + value + `</b> </li>`
}
 */


/*  whatever(6, 5) */ /*`<img src="./me.jpg" alt="">`
console.log(fLen)*/

window.addEventListener("load", () => load.classList.add("completed"));

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;
myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkValidation();
});

let checkValidity = () => {
    let [validEmail, validPassword] = [false, false]
    if (email.value === '') {
        explain.classList.add('show');
        check.classList.remove('show');
        email.classList.add('error');
        email.classList.remove('success');
        errormsgs.innerHTML = 'Please enter a valid email!';
    }
    else if (!pattern.test(email.value)) {
        explain.classList.add('show');
        check.classList.remove('show');
        email.classList.add('error');
        email.classList.remove('success');
        errormsgs.innerHTML = 'Invalid Email!';
    }
    else {
        check.classList.add('show');
        explain.classList.remove('show');
        email.classList.add('success');
        email.classList.remove('error');
        errormsgs.innerHTML = '';
        errormsgs2.innerHTML = "Looking good!";
        validEmail = true
    }
    if (password.value == '') {
        explain2.classList.add('show');
        check2.classList.remove('show');
        password.classList.add('error');
        password.classList.remove('success');
        errormsgs22.innerHTML = 'Password input cannot be empty';
    }
    else {
        check2.classList.add('show');
        explain2.classList.remove('show');
        password.classList.add('success');
        password.classList.remove('error');
        errormsgs22.innerHTML = '';
        errormsg22.innerHTML = 'Looking good';
        validPassword = true
    }
    return validEmail && validPassword
}
function checkValidation() {
    let homePages = '/indexs/homepage/home.html';

    checkValidity() ? window.location.assign(homePages) : " "
}