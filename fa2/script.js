const musica = document.getElementById("musica");
const boton = document.getElementById("boton");

let yaSono = false;

// Música al primer clic
document.body.addEventListener("click", () => {
  if (!yaSono) {
    musica.volume = 0.1;
    musica.play();
    yaSono = true;
  }
});

boton.addEventListener("click", () => {
  alert("💖 Tú eres mi todo 💖Namvre como me costo hacer esto desde 0 y en unas 3horitas lo hice para qe veassss y ni se hacer nada de eso y lo hice pa ti solo te amo mucho preciosa pero mucho te amo espero le guste esto que le hice.");
});

// Corazones flotando
setInterval(() => {
  const corazon = document.createElement("div");
  corazon.innerHTML = "💖";
  corazon.style.position = "fixed";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.top = "100vh";
  corazon.style.fontSize = "24px";
  corazon.style.animation = "subir 3s linear";
  document.body.appendChild(corazon);

  const cora = document.createElement("div");
  cora.innerHTML = "💕";
  cora.style.position = "fixed";
  cora.style.left = Math.random() * 100 + "vw";
  cora.style.top = "100vh";
  cora.style.fontSize = "24px";
  cora.style.animation = "subir 3s linear";
  document.body.appendChild(cora);

  const fa = document.createElement("div");
  fa.innerHTML = "💗";
  fa.style.position = "fixed";
  fa.style.left = Math.random() * 100 + "vw";
  fa.style.top = "100vh";
  fa.style.fontSize = "24px";
  fa.style.animation = "subir 3s linear";
  document.body.appendChild(fa);

    const a = document.createElement("div");
  a.innerHTML = "💖";
  a.style.position = "fixed";
  a.style.left = Math.random() * 100 + "vw";
  a.style.top = "100vh";
  a.style.fontSize = "24px";
  a.style.animation = "subir 3s linear";
  document.body.appendChild(a);
  setTimeout(() => a.remove(), 3000);

      const ñ = document.createElement("div");
  ñ.innerHTML = "🦋";
  ñ.style.position = "fixed";
  ñ.style.left = Math.random() * 100 + "vw";
  ñ.style.top = "100vh";
  ñ.style.fontSize = "24px";
  ñ.style.animation = "subir 3s linear";
  document.body.appendChild(ñ);
  setTimeout(() => a.remove(), 3000);
}, 500);


