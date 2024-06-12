// //troca de tema para dark para light
trocaTema = () => {
  // // //sempre conferir button
  // document.querySelector("body").style.background = "pINK"

  document.documentElement.classList.toggle("light");

  const inLight = document.documentElement.classList.contains("light");

  const imagem = inLight ? "./img/foto 2.jpg" : "./img/foto perfil.enc";

  document.querySelector("#perfil img").setAttribute("src", imagem);
  if (inLight) {
    document
      .querySelector("#perfil img")
      .setAttribute("alt", "menino tirando foto retrato de formatura");
  } else {
    document
      .querySelector("#perfil img")
      .setAttribute(
        "alt",
        "menino de 16 anos tirando foto no banheiro da igreja porem  o celular está cobrindo o seu rosto"
      );
  }
};
