async function f() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("i show u after 2 sec"),2000)
    });
    let result = await promise;
    console.log(result);
  }

  f();