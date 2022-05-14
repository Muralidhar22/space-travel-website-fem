import { crew,crewMemberRole,crewMemberName, crewMemberBio,crewMemberImage } from "./elements.js"
import handleData from "./handler.js";
import fetchData from "./fetchData.js";
import classToggler from "./util.js";

// on load display data
window.onload = onLoadFunc

// listen for click event
crew.forEach( element =>{
    element.addEventListener('click', (event)=>{handleEvent(event.target)})
})


// on load function
async function onLoadFunc(){
    const data = await fetchData()
    crew.forEach( element =>{
        if(element.classList.contains("active")){
            handleEvent(element)
        }
    })
}
// event handle function
async function handleEvent(event){
    classToggler(crew, event)
    const data = await handleData(event, "crew")
    displayCrewData(data)
    console.log(data)
}
// display data func
function displayCrewData(data){
    crewMemberRole.textContent = data.role;
    crewMemberName.textContent = data.name;
    crewMemberBio.textContent = data.bio;
    crewMemberImage.innerHTML = `
    <img 
    src="${data.images.png}"
    >
    `
}