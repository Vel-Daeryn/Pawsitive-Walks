/* 
Carousel of Customers Survey
*/

const survey = document.querySelectorAll(".customer-answer")
const carouselButtons = document.querySelectorAll("#customer-survey > .button-container > button")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
let surveyIndex = 0;

carouselButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault()

        if(e.target.id === "prev") {

            if(surveyIndex === 0) {
                survey[surveyIndex].classList.remove("displayed")
                surveyIndex += carouselButtons.length
                survey[surveyIndex].classList.add("displayed")
            } else {
                survey[surveyIndex].classList.remove("displayed")
                surveyIndex -= 1
                survey[surveyIndex].classList.add("displayed")
            }   
        }
        
        if(e.target.id === "next") {

            if(surveyIndex === survey.length - 1) {
                survey[surveyIndex].classList.remove("displayed")
                surveyIndex = 0
                survey[surveyIndex].classList.add("displayed")
            } else {
                survey[surveyIndex].classList.remove("displayed")
                surveyIndex += 1
                survey[surveyIndex].classList.add("displayed")
            }
        }
        
    })
})