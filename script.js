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
let whatever = (p1, p2) => {
    Name = p1 * p2
    age = p1 + p2
    return(Name);
}
let p = document.querySelectorAll('p')
p.forEach(p  => {
    p.style.backgroundColor = 'lime'
    p.innerHTML = whatever(6, 5)
})
console.log(demo.innerHTML);