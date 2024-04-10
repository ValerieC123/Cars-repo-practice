function displayCars()
{
    fetch('./cars.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    
    console.log("The cars should be displayed here");
}