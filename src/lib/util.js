export default function classToggler(allEl, activeEl){
    allEl.forEach(element =>{
        if(element === activeEl){
            element.classList.add("active")
        }
        else if(element.classList.contains("active")){
            element.classList.remove("active")
        } 
       
    })
}