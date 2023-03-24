const numeri = document.querySelector("#numeri")

for (let i=1;i<=100;i++){

    // numero divisibile per 3 e 5: "FizzBuzz"
    if ((i % 3 == 0) && (i % 5 == 0)){
    // console.log("FizzBuzz");
    const element = `<div class="bg-danger d-flex align-items-center justify-content-center fw-bolder" style="height: 100px; width: 100px;">${"FizzBuzz"}</div>`;
    numeri.innerHTML += element;
    }
    // numero divisibile per 3: "Fizz"
    else if (i % 3 == 0){
        // console.log("Fizz");
        const element = `<div class="bg-success d-flex align-items-center justify-content-center fw-bolder" style="height: 100px; width: 100px;">${"Fizz"}</div>`;
        numeri.innerHTML += element;
      
    } 

    // numero divisibile per 5: "Buzz"
    else if (i % 5 == 0){
        // console.log("Buzz");
        const element = `<div class="bg-warning d-flex align-items-center justify-content-center fw-bolder" style="height: 100px; width: 100px;">${"Buzz"}</div>`;
        numeri.innerHTML += element;
       
    }

   // numero NON divisibile per 3 e 5
    else{
        // console.log(i)
        const element = `<div class="bg-primary d-flex align-items-center justify-content-center fw-bolder" style="height: 100px; width: 100px;">${i}</div>`;
        numeri.innerHTML += element;
       
    }
}

