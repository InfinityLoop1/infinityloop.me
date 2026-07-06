document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);

  document.body.addEventListener("mouseover", (e) => {
    const img = e.target.closest("img[alt]");
    if (img && img.alt) {
      tooltip.textContent = img.alt;
      tooltip.style.display = "block";
    }
  });

  document.body.addEventListener("mousemove", (e) => {
    if (tooltip.style.display === "block") {
      tooltip.style.left = e.clientX + 12 + "px";
      tooltip.style.top = e.clientY + 12 + "px";
    }
  });

  document.body.addEventListener("mouseout", (e) => {
    const img = e.target.closest("img[alt]");
    if (img) {
      tooltip.style.display = "none";
    }
  });

  document.querySelectorAll("img[alt]").forEach((img) => {
    img.addEventListener("mouseenter", () => img.setAttribute("title", ""));
  });
});
