/*
  ╔══════════════════════════════════════════════════════════════╗
  ║  PIÈCES NAYREN — LE SEUL FICHIER À MODIFIER                   ║
  ╠══════════════════════════════════════════════════════════════╣
  ║                                                              ║
  ║  Pour AJOUTER une pièce : copie un bloc { ... } entier,       ║
  ║  colle-le dans la liste, change les infos.                   ║
  ║                                                              ║
  ║  Pour RETIRER une pièce : supprime son bloc { ... }          ║
  ║  (ou mets  disponible: false  pour la marquer vendue).       ║
  ║                                                              ║
  ║  Pour l'IMAGE : mets ta photo dans le dossier /images        ║
  ║  et écris son nom dans  image: "images/ton-fichier.jpg"      ║
  ║                                                              ║
  ║  lien : l'URL vers Vinted, Vestiaire, ou WhatsApp.           ║
  ║  canal : le texte du bouton ("Vinted", "Vestiaire", "WhatsApp")║
  ║                                                              ║
  ╚══════════════════════════════════════════════════════════════╝
*/

const PIECES = [
  {
    marque: "Balenciaga",
    modele: "Hourglass XS — collaboration Adidas",
    matiere: "Cuir de veau, bleu et blanc",
    image: "images/balenciaga-hourglass-bleu.jpg",
    disponible: true,
    canal: "Vinted",
    lien: "https://www.vinted.fr/",
  },
  {
    marque: "Courrèges",
    modele: "Bucket Hat",
    matiere: "Vinyle craquelé, noir",
    image: "images/courreges-bucket-noir.jpg",
    disponible: true,
    canal: "Vestiaire",
    lien: "https://www.vestiairecollective.com/",
  },
  {
    marque: "Courrèges",
    modele: "Casquette",
    matiere: "Vinyle, pêche",
    image: "images/courreges-casquette-peche.jpg",
    disponible: true,
    canal: "WhatsApp",
    lien: "https://wa.me/33756839656",
  },
  {
    marque: "Courrèges",
    modele: "Mini-jupe 2-poches",
    matiere: "Vinyle, noir",
    image: "images/courreges-jupe-noir.jpg",
    disponible: true,
    canal: "Vinted",
    lien: "https://www.vinted.fr/",
  },
  {
    marque: "Bottega Veneta",
    modele: "Boots lacées",
    matiere: "Rubber, noir",
    image: "images/bottega-boots-noir.jpg",
    disponible: true,
    canal: "Vestiaire",
    lien: "https://www.vestiairecollective.com/",
  },
  {
    marque: "Gucci",
    modele: "Escarpins slingback, mors",
    matiere: "Cuir, crème",
    image: "images/gucci-slingback-creme.jpg",
    disponible: true,
    canal: "WhatsApp",
    lien: "https://wa.me/33756839656",
  },
];

/*
  ── TES LIENS DE CANAUX (à renseigner une fois) ──
  Remplace les liens ci-dessus par tes vraies URL :
  - Vinted    : ton profil ou l'annonce précise
  - Vestiaire : ton profil ou l'annonce précise
  - WhatsApp  : https://wa.me/33XXXXXXXXX  (ton numéro sans le 0, précédé de 33)
*/
