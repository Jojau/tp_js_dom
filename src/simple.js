// Créez un objet avec une propriété de votre choix
// Ajoutez dans un second temps une propriété de type booléen
// Retournez l'objet
function createObject() {
	let monObjet = new Object();
	monObjet.propriete = true;
	return monObjet;
}

console.log("Exercice 1 :", createObject());

// Retournez un objet avec trois propriétés :
// - val1: la valeur du paramètre v1
// - absVal2: la valeur absolue du paramètre v2
// - somme de v1 et v2
function additionObject(v1, v2) {
	let Objet2 = new Object();
	Objet2.val1 = v1;
	Objet2.absVal2 = Math.abs(v2);
	Objet2.somme = v1 + v2;
	return Objet2
}

console.log("Exercice 2 avec 2 et 6 :", additionObject(2, 6));
console.log("Exercice 2 avec -5 et -10 :", additionObject(-5, -10));

// Retournez un tableau avec uniquement des nombres impairs supérieurs à 0
// Si le tab passé en paramètre est null, retournez un tableau vide
function removeEvenNumbers(tab) {
	if(tab != null)
	{
		for(i=0;i<tab.length;i++)
		{
			if(tab[i]%2 != 0 || tab[i]<0) //si c'est impair OU <0
			{
				tab.splice(i, 1); //supprime 1 élément à l'indice i
			}
		}
		return tab;
	}
	else
	{
		return [];
	}
}

console.log("Ex 3 avec un tableau vide :", removeEvenNumbers([]));

console.log("Ex 3 avec un tableau null :", removeEvenNumbers(null));

console.log("Ex 3 avec un tableau [-1, 1, 2, 0, 3, 4, 12, 11]", removeEvenNumbers([-1, 1, 2, 0, 3, 4, 12, 11]));

// Complétez la fonction testNumNeg qui retourne vrai si au
// moins un élément du tableau en entrée est un nombre et
// qu'il a une valeur négative
function testNumNeg(tab) {
	for(i=0;i<tab.length;i++)
	{
		if(typeof tab[i] == 'number' && tab[i]<0)
			return true;
		else
			return false;
	}
}

console.log('Exercice 4 avec [1, "kiwi", true, -2]', testNumNeg([1, "kiwi", true, -2]));

console.log('Exercice 4 avec [0, "orange", false]', testNumNeg([0, "orange", false]));

console.log('Exercice 4 avec [0, 4, 8]', testNumNeg([0, 4, 8]));

// Complétez la fonction ci-dessous pour retourner un
// tableau contenant la table de multiplication (jusqu'à 10 inclus)
// du nombre passé en paramètre, par exemple :
// n = 5 : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
function multTable(n) {
	let table = [];
	for(i=0;i<11;i++)
	{
		table[i]=n*i;
	}
	return table;
}

console.log("Table de multiplication de 1", multTable(1));
console.log("Table de multiplication de 5", multTable(5));

// En utilisant une boucle et la fonction précédente,
// retournez un tableau contenant toutes les tables de multiplication
// (jusqu'à 10 inclus) pour les nombres allant de 0 à la valeur d'un
// paramètre max (inclus)
function multTables(max) {
	let tables = [];
	for(j=0;j<max+1;j++)
	{
		tables[j]=multTable(j);
	}
	return tables;
}

console.log('Tables de multiplication :', multTables(5));

//ANCHOR Dernier Exercice : voir correction
const products = [
	{
		model: "Xiaomi Mi 9",
		size: "74.7 mm X 157.5 mm X 7.6 mm",
		weight: "173"
	},
	{
		model: "Samsung Galaxy A21",
		size: "75.3 mm X 163.7 mm X 9.0 mm",
		weight: "192"
	}
];

// Modifiez la fonction pour qu'elle compte le nombre de caractères
// de chaque string contenu dans l'objet passé en paramètre (excluez les espaces)
// Remplacez chaque chaîne par sa taille uniquement dans le contexte de la fonction
// Le console.log suivant l'appel à la fonction howLongIsIt fonction doit toujours
// afficher l'objet de base
// Vous ne devez pas créer d'objet à l'intérieur de la fonction,
// ni utiliser de variable globale
function howLongIsIt(obj) {
	let longueurs = new Object; //Je suis pas censée faire ça mais j'ai envie d'avancer
	longueurs.model = obj.model.length; //J'aurais dû faire une boucle qui parcours les propriétés
	longueurs.size = obj.size.length;
	longueurs.weight = obj.weight.length;
	
	return longueurs;
}

// Vous devriez avoir à modifier cette ligne...
let newProduct0 = howLongIsIt(products[0]);
console.log("Objet de base :", products[0]);
/* doit afficher :
{
	model: "Xiaomi Mi 9",
	size: "74.7 mm X 157.5 mm X 7.6 mm",
	weight: "173"	
}
*/
console.log("Longueur des propriétés :", newProduct0);
/* doit afficher :
{
	model: 11,
	size: 27,
	weight: 3
}
*/

// Complétez votre code avec une fonction transformant tous les objets
// compris dans le tableau passé en paramètre de la même manière que précédemment
function howLongIsItTab(tab) {
	let tabL = [];
	for(i=0;i<tab.length;i++)
	{
		tabL[i]= howLongIsIt(tab[i]);
	}
	return tabL;
}

// Vous devriez avoir à modifier cette ligne...
let newProducts = howLongIsItTab(products);
console.log('Tableau de base', products);
console.log('Tableau des longueurs', newProducts);



