const nav = document.querySelector('#main')
const topOfNav = nav.offsetTop

const fixNav = () => {
  console.log(topOfNav)
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav')
  } else {
    document.body.classList.remove('fixed-nav')

  }
}

window.addEventListener('scroll', fixNav)