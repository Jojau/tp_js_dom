// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
// votre code

document.body.style.backgroundColor = "#992323";

// Changez la couleur du texte du body en #fff
// votre code

document.body.style.color = "fff";

// Supprimez la ligne suivante
// var workspace = null;
// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
// votre code

var workspace = document.getElementById("workspace");

// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
// votre code

console.log("nombre d'éléments enfants que contient l'élément workspace :", workspace.children.length);

// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Supprimez la ligne suivante
// var p = null;
// Affectez le résultat à la variable p
// votre code

var p = workspace.children[0].textContent;

console.log("Contenu du 1er paragraphe :", p);

// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
// votre code

var titre3 = document.createElement("h3");
titre3.textContent="Hello JS World";
workspace.insertBefore(titre3, workspace.firstChild);

const initTime = 10;

// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher
function runChrono(n) {
  var counter = document.createElement("div");
  workspace.appendChild(counter);

  var chrono = document.createElement("p");
  chrono.textContent = n;
  counter.appendChild(chrono);

  //var i = n;
  intervale = setInterval(function(){
    if(n<=0)
      return; //Stoppe la fonction quand le compteur atteind 0
    
    n--;
    console.log(n);

    chrono.remove(); //on efface le chiffre précédent
    chrono.textContent = n; //on met le nouveau
    counter.appendChild(chrono);

  }, 1000);
}

//console.log(runChrono(10));

//TODO
// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
// votre code
var bouton = document.createElement('button');
bouton.id='start';
bouton.textContent='Start countdown';
workspace.firstChild.insertAdjacentElement('afterEnd', bouton);

const n = 10;

var counter = document.createElement("div");
workspace.appendChild(counter);

var chrono = document.createElement("p");
chrono.textContent = n;
counter.appendChild(chrono);

document.getElementById('start').addEventListener("click", function()
{
  intervale = setInterval(function(){
    if(n<=0)
      return; //Stoppe la fonction quand le compteur atteind 0
    
    n--;
    console.log(n);

    chrono.remove(); //on efface le chiffre précédent
    chrono.textContent = n; //on met le nouveau
    counter.appendChild(chrono);

  }, 1000);
});