

//using js to update cs variables


//selecting three inputs 
 const inputs = document.querySelectorAll(".controls input");  //gives a node list instead of array

 //rather than converting node list to array we use the given for-each functionality in node list



function handleUpdate()
{

    //dataset is an object that contains all data attributes from that specific element

    const suffix = this.dataset.sizing || ''; //those that dont have sizing will go for nothing like color values
    //console.log(this.name);

    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);



}



//listen for a change event for each of the inputs
inputs.forEach(function (input){input.addEventListener("change",handleUpdate)}); 

//listen for a change event for each of the inputs
inputs.forEach(function (input){input.addEventListener("mousemove",handleUpdate)}); 


// const inputs = document.querySelectorAll(".constant input");

// function handleUpdate()
// {
//    const suffix= this.dataset.sizing || '';
//    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

// }

// inputs.forEach(input => input.addEventListener("change",handleUpdate));
// inputs.forEach(input => input.addEventListener("mouseover",handleUpdate));




