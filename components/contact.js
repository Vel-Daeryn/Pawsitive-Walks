/*
Copy mail adress
*/

const mailAdress = document.getElementById("mail-name")
const alert = document.getElementById("alert")

mailAdress.addEventListener("click", () => {

    const copyMail = "cette-adresse-est-factice@gmail.com"
    navigator.clipboard.writeText(copyMail).then(() => {
        alert.classList.add("visible")

        setTimeout(() => {
            alert.classList.remove("visible")
        }, 1000);
    })

})

/*
Storing data in URL when submitting forms
*/

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    /* get value from user */
    const mail = document.getElementById("email").value
    const object = document.getElementById("object").value
    const message = document.getElementById("message").value

    /* encoding value got from user. */
    const mailURL = encodeURIComponent(mail)
    const objectURL = encodeURIComponent(object)
    const msgURL = encodeURIComponent(message)

    /* sending user on a confirmation page */
    window.location.href = `confirmation.html?mail=${mailURL}&object=${objectURL}&msg=${msgURL}`
})
