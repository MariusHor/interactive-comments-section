export const getElementById = (selector) => document.getElementById(selector)

export const scrollToElement = (element) =>
  element.scrollIntoView({ block: 'center', behavior: 'smooth' })

export const highlightElement = (element) => {
  element.classList.add('highlight')
  setTimeout(() => {
    element.classList.remove('highlight')
  }, 2000)
}
