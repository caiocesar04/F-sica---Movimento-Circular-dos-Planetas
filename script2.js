const planeta = document.getElementById("planeta");
const raioElement = document.getElementById("raio");
const massaElement = document.getElementById("massa");
const tempoElement = document.getElementById("tempo");
const gravitacional = 5;
let velocidade = 0;
let massa = massaElement.value.replace(",", ".");
let raio = raioElement.value;
let radiano = 0;
let tempo = 0;
const orbita = document.getElementById("orbita");

orbita.style.height = `${raio}vmin`;
orbita.style.width = `${raio}vmin`;

setInterval(() => {
  planeta.style.left = `${Math.cos(radiano) * raio}vmin`;
  planeta.style.top = `${Math.sin(radiano) * raio}vmin`;
  velocidade =  Math.sqrt ( gravitacional * massa/raio);
  document.getElementById("velocidade").innerText=velocidade.toFixed(4);
  radiano += velocidade * massa;
  console.log(planeta.style.top>raio-5)
  if(tempo==raio){
    tempo=0;
    tempoElement.innerText=tempo;
  }
}, 1000 / 60); 
setInterval(() => {
 tempo++;
 tempoElement.innerText=tempo;
},1 ) 

function mudarValores() {
  raio = raioElement.value;
  massa = massaElement.value.replace(",", ".");
  orbita.style.height = `${raio}vmin`;
  orbita.style.width = `${raio}vmin`;
  console.log("valores", { raio, massa });
}
