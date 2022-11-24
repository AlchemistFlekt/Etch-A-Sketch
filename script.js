let container = document.querySelector('.container');
/*let box= document.createElement("div");
box.classList.add("grid");
let row = document.createElement("div");
row.classList.add("row");*/
for(let i=0; i<16; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    
    for(let j=0; j<16; j++){
        let box= document.createElement("div");
        box.classList.add("grid");
        row.append(box);
    };
    container.append(row);
};

let grids= document.querySelectorAll('.grid');

grids.forEach((grid) =>{
    grid.addEventListener('mouseenter',function(e) {
     e.target.classList.add("drawn");
    });
});

let button= document.querySelector('.new');

button.addEventListener('click',function() {
  let size = prompt("Choose grid size between 3-100");
  
});

