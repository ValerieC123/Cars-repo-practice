function displayCars()
{
    
    (async function() {
        const { text } = await( await fetch(`/api/getCars`)).json();
        console.log(text);
    }());
    console.log("DisplayCars in script.js");

}