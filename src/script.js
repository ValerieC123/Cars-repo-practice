import getCars from '../../api/getCars/index.js';

// Call the function

function displayCars()
{
    
    let data = getCars();
    document.getElementById("Info").innerHTML = data;
    console.log("DisplayCars in script.js");

}