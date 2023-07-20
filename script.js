function toggleMode() {
  const html = document.documentElement
  const avatar = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    html.classList.remove('light')
    avatar.setAttribute('src', './assets/assets/avatar-light.png')
  } else {
    html.classList.add('light')
    avatar.setAttribute("src", "./assets/assets/avatar.png")
  }

  // html.classList.toggle('light')
}