const mensajes = [
  "A pesar de la distancia, estar en contacto contigo me hace bien.",
  "No nos vemos seguido, pero valoro lo que compartimos.",
  "Siempre es grato leerte o escucharte, aunque sea por un momento.",
  "Me agrada lo que estamos construyendo, paso a paso.",
  "La distancia no impide que piense en ti con estima.",
  "Este primer mes ha sido especial, gracias a ti.",
  "Conectamos de una forma que no depende del lugar.",
  "Aunque no estemos cerca, siento que estamos presentes.",
  "Gracias por tu tiempo, tus palabras y estar desde lejos."
];

const container = document.getElementById("container");
const mensajeBox = document.getElementById("mensaje");
for (let i = 0; i < 12; i++) {
  const burbuja = document.createElement("div");
  burbuja.className = "burbuja";
  burbuja.style.left = `${Math.random() * 90}%`;
  burbuja.style.top = `${Math.random() * 60 + 15}%`;
  burbuja.addEventListener("click", () => {
    mensajeBox.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
  });
  container.appendChild(burbuja);
}
