/*
  Ce fichier construit la grille automatiquement à partir de products.js.
  Tu n'as normalement pas besoin d'y toucher.
*/

(function () {
  const grid = document.getElementById("grid");
  if (!grid || typeof PIECES === "undefined") return;

  PIECES.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = (i * 0.06) + "s";

    // Visuel
    const visual = document.createElement("div");
    visual.className = "card-visual" + (p.image ? "" : " empty");
    if (p.image) {
      const img = document.createElement("img");
      img.src = p.image;
      img.alt = p.marque + " " + p.modele;
      img.loading = "lazy";
      visual.appendChild(img);
    }
    if (p.disponible === false) {
      const sold = document.createElement("div");
      sold.className = "card-sold";
      sold.textContent = "Vendu";
      visual.appendChild(sold);
    }
    card.appendChild(visual);

    // Corps
    const body = document.createElement("div");
    body.className = "card-body";

    const brand = document.createElement("div");
    brand.className = "card-brand";
    brand.textContent = p.marque;
    body.appendChild(brand);

    const model = document.createElement("div");
    model.className = "card-model";
    model.textContent = p.modele;
    body.appendChild(model);

    if (p.matiere) {
      const mat = document.createElement("div");
      mat.className = "card-matiere";
      mat.textContent = p.matiere;
      body.appendChild(mat);
    }

    // Bouton
    if (p.disponible === false) {
      const cta = document.createElement("span");
      cta.className = "card-cta disabled";
      cta.textContent = "Vendu";
      body.appendChild(cta);
    } else {
      const cta = document.createElement("a");
      cta.className = "card-cta";
      cta.href = p.lien || "#";
      cta.target = "_blank";
      cta.rel = "noopener";
      cta.textContent = (p.canal ? p.canal : "Découvrir") + " \u2192";
      body.appendChild(cta);
    }

    card.appendChild(body);
    grid.appendChild(card);
  });
})();
