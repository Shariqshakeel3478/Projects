const buttons = document.querySelectorAll(".filter-buttons button")
const cards = document.querySelectorAll(".cards .card")


function filterCards(e) {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")
    console.log(e.target)
    cards.forEach(card => {

        card.classList.add("hide")

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
            card.classList.remove("hide")
        }

    })
}

buttons.forEach(button => button.addEventListener("click", filterCards))






window.addEventListener('scroll', function () {
    var navbar = document.getElementById('home');
    if (this.window.scrollY > 10) {
        navbar.classList.add("scrolled")
    } else {
        navbar.classList.remove("scrolled")
    }
})