function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de mailson futurista, com oculos para proteção de raios UV"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

/* Anotações comando github*/

/*Comando que inicia  o git (repositório) no seu projeto*/
//git Int

/*Como que adiciona todos os arquivos modificados, ao stage*/
//git add .

/*Comando que cria e descreve um ponto na história do projeto (timline) */
//git commit -m "message here"

/*Evia alterações para o repositório remoto*/
//git push
