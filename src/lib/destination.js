import { destinations,planetName,planetDescription,planetImg,planetAvgDist,planetEstTravelTime } from "./elements.js"
import handleData from "./handler.js";
import fetchData from "./fetchData.js";
import classToggler from "./util.js";

// on load display data
window.onload = onLoadFunc

// listen for click event
destinations.forEach( element =>{
    element.addEventListener('click', (event)=>{handleEvent(event.target)})
})


// on load function
async function onLoadFunc(){
    const data = await fetchData()
    destinations.forEach( element =>{
        if(element.classList.contains("active")){
            handleEvent(element)
        }
    })
}
// event handle function
async function handleEvent(event){
    classToggler(destinations, event)
    const data = await handleData(event, "destinations")
    console.log(data)
    displayPlanetData(data)
}
// display data function
function displayPlanetData(data){
    planetName.textContent = data.name;
    planetDescription.textContent = data.description;
    planetAvgDist.textContent = data.distance;
    planetEstTravelTime.textContent = data.travel;
    planetImg.innerHTML = `
    <img 
    src="${data.images.png}"
    >
    `
}