// CARROSSEL
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')

let active = 0
const total = items.length
let timer

function update(direction) {

    if (!items.length) return

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active++

        if (active === total) {
            active = 0
        }
    }
    else {
        active--

        if (active < 0) {
            active = total - 1
        }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    if (numberIndicator) {
        numberIndicator.textContent = String(active + 1).padStart(2, '0')
    }
}

if (prevButton && nextButton) {

    clearInterval(timer)

    timer = setInterval(() => {
        update(1)
    }, 5000)

    prevButton.addEventListener('click', () => {
        update(-1)
    })

    nextButton.addEventListener('click', () => {
        update(1)
    })
}

fetch("./components/menu.html")
    .then(res => res.text())
    .then(data => {

        const menu = document.getElementById("menu")

        if (menu) {
            menu.innerHTML = data

            const toggle = document.getElementById("menu-toggle")
            const nav = document.getElementById("nav-menu")

            if (toggle && nav) {
                toggle.addEventListener("click", () => {
                    nav.classList.toggle("active")
                })
            }
        }
    })


fetch("./components/footer.html")
    .then(res => res.text())
    .then(data => {
        const footer = document.getElementById("footer")
        if (footer) {
            footer.innerHTML = data
        }
    })

function abrirDigitom() {
    window.location.href = "./pages/digitom-web.html"
}

document.addEventListener("DOMContentLoaded", function () {

    const abrirPlanos = document.getElementById("abrirPlanos")
    const modalPlanos = document.getElementById("modalPlanos")
    const fecharModal = document.getElementById("fecharModal")

    if (abrirPlanos && modalPlanos) {

        abrirPlanos.addEventListener("click", function () {

            modalPlanos.style.display = "flex"

        })
    }

    if (fecharModal && modalPlanos) {

        fecharModal.addEventListener("click", function () {

            modalPlanos.style.display = "none"

        })
    }
})

window.addEventListener("click", function (event) {

    const modalPlanos = document.getElementById("modalPlanos")

    if (event.target === modalPlanos) {
        modalPlanos.style.display = "none"
    }
})