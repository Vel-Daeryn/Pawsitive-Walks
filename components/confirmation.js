/* We search the URL to get back the user request */
const URL = window.location.search

const params = new URLSearchParams(URL)

const mail = params.get("mail")
const object = params.get("object")
const msg = params.get("msg")

const mailContainer = document.querySelectorAll(".mail-answer")
const objectContainer = document.querySelectorAll(".mail-object")
const msgContainer = document.querySelectorAll(".mail-text")



if(mail) {
    mailContainer[0].innerText = mail
    objectContainer[0].innerText = object
    msgContainer[0].innerText = msg
}


