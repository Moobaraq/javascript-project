const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const year = document.getElementById('year')
const loading = document.querySelector('#spin')

const currentYear = new Date().getFullYear()
const newYearTime = new Date(`01 January ${currentYear + 1} 00:00:00`)

year.innerHTML = currentYear + 1

function updateCountdown() {
    const currentTime = new Date()
    const countdown = newYearTime - currentTime

    const d = Math.floor(countdown / 1000 /60 / 60 / 24)
    const h = Math.floor(countdown / 1000 /60 / 60) % 24
    const m = Math.floor(countdown / 1000 /60 ) % 60
    const s = Math.floor(countdown / 1000) % 60

    days.innerHTML = d < 10 ? '0' +d: d
    hours.innerHTML = h < 10 ? '0' + h: h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s: s
}
setInterval(updateCountdown, 1000)

