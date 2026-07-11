# Site vitrine NAYREN

Site statique HTML/CSS/JS. Hébergeable sur GitHub Pages avec le domaine nayren.com.

## Structure
- `index.html` — la page
- `style.css` — le design (couleurs, typos Nayren)
- `products.js` — **le seul fichier à modifier au quotidien** : tes pièces
- `script.js` — construit la grille automatiquement (ne pas toucher)
- `images/` — tes photos de pièces

## Ajouter / retirer une pièce
Ouvre `products.js`. Chaque pièce est un bloc `{ ... }`.
- Ajouter : copie un bloc, change les infos, mets ta photo dans `images/`.
- Retirer : supprime le bloc, ou mets `disponible: false` pour afficher "Vendu".

## Mettre en ligne sur GitHub Pages
1. Crée un dépôt GitHub (ex : `nayren-site`).
2. Pousse ces fichiers dedans.
3. Settings > Pages > Source : branche `main`, dossier `/root`.
4. Custom domain : `nayren.com` (ajoute les DNS chez OVH — enregistrements A vers les IP GitHub Pages + un CNAME `www` vers ton `user.github.io`).
5. Coche "Enforce HTTPS".

## À renseigner avant publication
- Dans `products.js` : remplace les liens Vinted/Vestiaire/WhatsApp par tes vraies URL.
- Dans `index.html` (footer) : vérifie les liens Insta/TikTok/Vinted/Vestiaire.
- Remplace les images placeholder dans `images/` par tes vraies photos (mêmes noms de fichiers, ou change les noms dans products.js).
