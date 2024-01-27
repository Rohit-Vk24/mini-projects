let set = document.getElementById('count');
let count = 0;
let increase = document.getElementById('increase');
let decrease = document.getElementById('reduce');
let reset = document.getElementById('reset');

increase.addEventListener('click', function() {
   count++;
   set.textContent = count;

   if(count > 0){
    set.style.color = 'green'
   }

//    if(count = 0){
//     set.style.color = 'white';
//    }
});

reset.addEventListener('click', function(){
    count = 0;
    set.textContent = 0;
    set.style.color = 'white';
})

decrease.addEventListener('click', function() {
    count--;
    set.textContent = count;

    if(count < 0){
        set.style.color = 'red'
       }

    // if(count = 0){
    //     set.style.color = 'white';
    //    }
 });

 