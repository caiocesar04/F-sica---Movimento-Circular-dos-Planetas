const planeta = document.getElementById("planeta");
const raioElement = document.getElementById("raio");
const massaElement = document.getElementById("massa");
let velocidade = 0;
let massa = massaElement.value.replace(",", ".");
let raio = raioElement.value;
let radiano = 0;
const orbita = document.getElementById("orbita");

orbita.style.height = `${raio}vmin`;
orbita.style.width = `${raio}vmin`;

setInterval(() => {
  planeta.style.left = `${Math.cos(radiano) * raio}vmin`;
  planeta.style.top = `${Math.sin(radiano) * raio}vmin`;
  velocidade =  `${Math.sqrt (massa/raio)}`;
  radiano += velocidade * massa;
}, 1000 / 60); 

function mudarValores() {
  raio = raioElement.value;
  massa = massaElement.value.replace(",", ".");
  orbita.style.height = `${raio}vmin`;
  orbita.style.width = `${raio}vmin`;
  console.log("valores", { raio, massa });
}
