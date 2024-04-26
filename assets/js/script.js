let list = [
  {
    id: 1,
    couleur: "Blanc",
    image: "img1.png",
    libelle: "Arrière",
  },
  {
    id: 2,
    couleur: "Blanc",
    image: "img2.png",
    libelle: "Avant",
  },
  {
    id: 3,
    couleur: "Blanc",
    image: "img3.png",
    libelle: "Coté",
  },
  {
    id: 4,
    couleur: "Noir",
    image: "img4.png",
    libelle: "Arrière",
  },
  {
    id: 4,
    couleur: "Noir",
    image: "img5.png",
    libelle: "Avant",
  },
  {
    id: 5,
    couleur: "Noir",
    image: "img6.png",
    libelle: "Coté",
  },
  {
    id: 6,
    couleur: "Bleu",
    image: "img15.png",
    libelle: "Arrière",
  },
  {
    id: 7,
    couleur: "Bleu",
    image: "img14.png",
    libelle: "Avant",
  },
  {
    id: 8,
    couleur: "Bleu",
    image: "img16.png",
    libelle: "Coté",
  },
  {
    id: 9,
    couleur: "Rose",
    image: "img13.png",
    libelle: "Arrière",
  },
  {
    id: 10,
    couleur: "Rose",
    image: "img17.png",
    libelle: "Avant",
  },
  {
    id: 11,
    couleur: "Rose",
    image: "img18.png",
    libelle: "Coté",
  },
  {
    id: 12,
    couleur: "BlancNoir",
    image: "img10.png",
    libelle: "Arrière",
  },
  {
    id: 13,
    couleur: "BlancNOIR",
    image: "img8.png",
    libelle: "Arrière",
  },
  {
    id: 14,
    couleur: "BleuRose",
    image: "img22.png",
    libelle: "Arrière",
  },
  {
    id: 15,
    couleur: "BleuRose",
    image: "img19.png",
    libelle: "Arrière",
  },
];

function recherche(arg) {
  console.log(arg.value);
}

(function affichage() {
  list.forEach((elm) => {
    let content = document.querySelector("#contenu");
    content.innerHTML +=
      `
       <div class="col-md-3 mb-1 mt-2">
              <div class="card w-100">
                <div class="card-header">
                 ` +
      elm.couleur +
      `
                </div>
                  <div class="card-body" style="height: 300px;">
                    <img src="assets/images/nouveau/` +
      elm.image +
      `" alt="" style="height: 100%; width: 100%;">
                  </div>
                  <div class="card-footer d-flex justify-content-center">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#commander` +
      elm.id +
      `">
                       commander 
                </button>
                  </div>
            </div>
          </div>

          <div class="modal fade" id="commander` +
      elm.id +
      `" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Faire une commande</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form class="row g-3">
                <div class="col-md-6">
                    <label for="Nom" class="form-label">Nom et prenom</label>
                    <input type="text" class="form-control" id="Nom" placeholder="entrer votre Nom et Prenom">
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="mail" class="form-control" id="email" placeholder="Entrer votre Email">
                </div>
                <div class="col-md-12">
                    <label for="telephone" class="form-label">Contact</label>
                    <input type="tel" class="form-control" id="telephone" placeholder="numéro de téléphone">
                </div>
            </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">fermer</button>
                  <button type="button" class="btn btn-primary">Envoyer</button>
                </div>
              </div>
            </div>
          </div>
          
          `;
  });
})();
