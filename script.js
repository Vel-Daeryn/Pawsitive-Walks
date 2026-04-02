/* 
Get the main navigation under 720px width to modify it's classes as to add some animation via CSS class system before erasing the links from the
flow of the pages. (by display: none)
*/

const buttonMenu = document.querySelector("nav .burger-menu")
const burgerMenu = document.getElementById("burger-menu")
const closeMenu = document.getElementById("close-burger-menu")
const navigation = document.getElementById("primary-navigation")

let menuState = true

buttonMenu.addEventListener("click", function(e) {
    e.preventDefault()

    if (menuState === true) {
        menuState = false
        burgerMenu.classList.add("inactive")
        closeMenu.classList.remove("inactive")
        navigation.classList.add("active")
        buttonMenu.ariaExpanded = true
    } else {
        menuState = true
        burgerMenu.classList.remove("inactive")
        closeMenu.classList.add("inactive")
        navigation.classList.remove("active")
        navigation.classList.add("closed")
        buttonMenu.ariaExpanded = false

        setTimeout(() => {
            navigation.classList.remove("closed")
        }, 1000);
    }
}) 