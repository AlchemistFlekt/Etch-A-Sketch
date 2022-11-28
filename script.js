let container = document.querySelector('.container');       //Find cointainer div in html

createGrid(16);                                             //call function to create intial 16x16 grid
fill();                                                     //call function to change grid color when mouse enters

let button= document.querySelector('.new');                 //find new grid button in html 
button.addEventListener('click',function() {                //add event when button is clicked
  let size = prompt("Choose grid size between 3-100");      //prompt user to input new grid size
  removeGrid();                                             //call function to remove grid
  createGrid(size);                                         //call function to create new grid using user input
  fill();                                                   //call function to change grid color when mouse enters
});

function createGrid(size){                                  //Function to create new grid based on given size
    for(let i=0; i<size; i++){                              //Loop to create specified number of rows
        let row = document.createElement("div");            //create div
        row.classList.add("row");                           //Add row class to div
        
        for(let j=0; j<size; j++){                          //loop to create and add specified number of boxes to each row
            let box= document.createElement("div");         //create div
            box.classList.add("grid");                      //add grid class to div
            row.append(box);                                //append grid to row
        };
        container.append(row);                              //append row to container
    }
}

function fill(){                                            //function to change grid color
    let grids= document.querySelectorAll('.grid');          //find all of grid div
    grids.forEach((grid) =>{                                //apply following to all grid divs
        grid.addEventListener('mouseenter',function(e) {    //adds effect when mouse enters the grid
         e.target.classList.add("drawn");                   //adds class drawn to grid div
        });
    });
}
function removeGrid(){                                      //function to remove grid
    let rows= document.querySelectorAll(".row");            //find eveything with row class
    rows.forEach((row) =>{                                  //apply following to each row
        row.remove();                                       //remove row from DOM
    });
}
