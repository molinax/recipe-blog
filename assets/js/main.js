const checkDivs = document.querySelectorAll('[data-check]')

checkDivs.forEach(checkDiv => {
  checkDiv.addEventListener('click', (event) => {
    toggleCheck(event.target)
  })
})

const toggleCheck = (element) => element.classList.toggle('checked')