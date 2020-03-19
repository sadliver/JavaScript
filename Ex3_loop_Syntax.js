// Ex1 รูปแบบ for
// for จะรันคำสั่งใน loop body ไปเรื่อย ๆ เหมือนกับ while loop แต่จะมีการกำหนดค่าเริ่มต้น และค่าต่อไปได้

// for (ค่าเริ่มต้น; เงื่อนไข; ค่าต่อไป) {
//     // ... loop body ...
//   }
  
for (let i = 0; i <5; i++){
    console.log("number" + i );
};

// Ex2 รูปแบบ while
//จะรันคำสั่งใน loop body ไปเรื่อย ๆ จนกว่าเงื่อนไขใน while จะเป็น false

// while (เงื่อนไข) {
//     // คำสั่ง
//     // เรียกว่า "loop body"
//   }
  
let a = 0;
while(a<6){
    console.log(a);
    a++;
};

//Ex3.1 break การหยุดวงวน
for (let b = 0; b < 10; b++){
    if(b==3){
        break;
    }
    console.log(b);
};


//Ex3.2.1 break การหยุดวงวน          //จะได้ 0 1 2 3 4 5
let c = 0;
while(c<20){
    console.log(c);
    if(c==5){
        break;
    };
    c++;
};

        
//Ex3.2.2 break การหยุดวงวน          //จะได้ 0 1 2 3 4 
let c = 0;
while(c<20){
    console.log(c);
    c++;
        if(c==5){
            break;
        };
};
