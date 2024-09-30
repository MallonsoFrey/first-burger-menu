const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
})

document.querySelectorAll(".nav__list-item__link").forEach(elem => elem.addEventListener('click',() => {
  hamburger.classList.remove("active")
  menu.classList.remove("active")
}))

/*const container = document.querySelector('.container')
const output = document.querySelector('.container__output')
const ul = document.querySelector('ul')
const li = document.querySelector('li')

let sentence = ''

container.addEventListener('click', (event) => {
    sentence += ' ' + event.target.textContent
    output.textContent = sentence
    console.log('container clicked')
})

ul.addEventListener('click', () => { //textContent элемента <ul> включает текст всех его дочерних элементов.
  console.log('ul clicked')
})

li.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log('li clicked')
})*/