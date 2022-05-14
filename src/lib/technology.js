import { technology,techName,techDescription,techImg } from "./elements.js";
import handleData from "./handler.js";
import fetchData from "./fetchData.js";
import classToggler from "./util.js";

// on load display data
window.onload = onLoadFunc

// listen for click event
technology.forEach( element =>{
    element.addEventListener('click', (event)=>{handleEvent(event.target)})
})


// on load function
async function onLoadFunc(){
    const data = await fetchData()
    technology.forEach( element =>{
        if(element.classList.contains("active")){
            handleEvent(element)
        }
    })
}
// event handle function
async function handleEvent(event){
    classToggler(technology, event)
    const data = await handleData(event, "technology")
    displayTechData(data)
}
//display data function
function displayTechData(data){
    techName.textContent = data.name;
    techDescription.textContent = data.description
    techImg.innerHTML=`
    <img
    src="${data.images.portrait}">
    `
}