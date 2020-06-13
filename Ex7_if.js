//Ex 1.1 if
// if (1 == 1){                              // การที่มีเครื่องหมาย == 2สองตัวหมายถึงการเปรียบเทียบค่า ,ถ้ามี = 1ตัวคือการกำหนดค่านั้นๆ
//     console.log('This is ture');
// }

//Ex 1.1 if
// if (1 === 1){                              // การที่มีเครื่องหมาย === 3ตัวหมายถึงการเปรียบเทียบค่าและประเภทของข้อมูล
//     console.log('This is ture');
// }

//Ex 2 else
// if (1 === '1'){                              
//     console.log('This is ture');
// } else {
//     console.log('this is false');
// }

// // Ex 3 
// let a = 5;
// let b = 4;
// if(a != b){                              //   != ไม่เท่ากัน , !== ไม่เท่ากันทั้งค่าและประเภท       
//     console.log('ไม่เท่ากัน');
// } else {
//     console.log('เท่ากัน');
// }


// // Ex 4.1 &&(และ)
// let a = 5;
// let b = 4;
// if(a == 5 && a == 4){                              //   && ถ้ามีตัวใดตัวหนึ่งผิด จะผิดหมด   
//     console.log('ถูก');
// } else {
//     console.log('ผิด');
// }


// Ex 4.1 ||(หรือ)
// let a = 5;
// let b = 4;
// if(a == 5 || a == 4){                              //   || ถ้ามีตัวใดตัวหนึ่งถูก จะถือว่าถูก  
//     console.log('ถูก');
// } else {
//     console.log('ผิด');
// }

// Ex 5 Switches
let  fruit = 'apple';
switch(fruit){
    case 'banana':
        console.log('banana !!');
        break;
    case 'apple':
        console.log('apple po po');
        break;
    default:
        console.log('I dont pick fruit');
        break;
}


