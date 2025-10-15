const html = document.documentElement
const switchButton = document.querySelector("#switch button")
const profileImg = document.querySelector("#profile img")

switchButton.addEventListener("click", function () {
  html.classList.toggle("light")

  const lightMode = html.classList.contains("light")

  if (lightMode) {
    profileImg.setAttribute("src", "./assets/avatar.png")
  } else {
    profileImg.setAttribute("src", "./assets/avatar-light.png")
  }
})
