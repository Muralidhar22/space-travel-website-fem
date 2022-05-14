import { openMenu,closeMenu,primaryNav } from "./lib/elements.js"

/**************************************************
 * Open menu and close menu function on mobile view
 ***********************************************/
openMenu.addEventListener('click',menuToggle)
closeMenu.addEventListener('click',menuToggle)
function menuToggle(event){
    const element = event.target.closest("button")
    if(element === openMenu ){
        primaryNav.classList.toggle("display-block")
    }
    else if(element === closeMenu){
        primaryNav.classList.toggle("display-block")
    }
}