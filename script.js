let container = document.querySelector('.container');
/*let box= document.createElement("div");
box.classList.add("grid");
let row = document.createElement("div");
row.classList.add("row");*/
for(let i=0; i<4; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    
    for(let j=0; j<4; j++){
        let box= document.createElement("div");
        box.classList.add("grid");
        row.append(box);
    };
    container.append(row);
};
