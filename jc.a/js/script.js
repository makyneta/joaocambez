// Atualiza todos os elementos com a classe 'year'
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

//
// Header
fetch("/joaocambez/jc.a/h/header-jc.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-jc").innerHTML = data;

    const script = document.createElement("script");
    script.src = "/joaocambez/jc.a/h/script.js";
    document.body.appendChild(script);
  });
