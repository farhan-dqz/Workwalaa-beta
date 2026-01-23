const cards = document.querySelectorAll(".float-card");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX - window.innerWidth / 2) / 60;
  mouseY = (e.clientY - window.innerHeight / 2) / 60;
});

function animate() {
  currentX += (mouseX - currentX) * 0.05;
  currentY += (mouseY - currentY) * 0.05;

  cards.forEach((card, index) => {
    const speed =
      parseFloat(card.style.getPropertyValue("--speed")) || 1;

    const directionX = (index % 2 === 0 ? 1 : -1);
    const directionY = (index % 3 === 0 ? -1 : 1);

    card.style.transform = `
      translate(
        ${currentX * speed * 12 * directionX}px,
        ${currentY * speed * 12 * directionY}px
      )
    `;
  });

  requestAnimationFrame(animate);
}

animate();
