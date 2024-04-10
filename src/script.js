import getCars from '../../api/getCars/index.js';

// Call the function

function displayCars()
{
    
    let data = getCars();
    console.log("DisplayCars in script.js");

}