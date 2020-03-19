//Ex_1 รูปแบบเดิม ES5
function myAge(age){
    return 'คุณอายุ' + age;
}
console.log(myAge(25)); //คุณอายุ25

//Ex_2 Arrow function ES6
let myAge = age =>{
    return `คุณอายุ ${age}`;
}
console.log(myAge(20)); //คุณอายุ20

//Ex_3 Arrow func สามารถตัด  reture และวงเล็บออกไปได้ ทำให้อ่านง่ายและเขียนสั้นลงไปได้อีก
let myName = name => `Your name is ${name}`;
console.log(myName('jirateepob')); // jirateepob
