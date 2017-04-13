const ul = document.getElementById('list');

const createNode = (el) => document.createElement(el);

const append = (parent, el) => parent.appendChild(el);


let film = [];

const handleList = () => {
	const select = document.getElementById('select');
		if (select.selectIndex) {
			let option = select.selectedIndex;
			const title = film[option][0];
			console.log(title);
			const planet = film[option][1];
			const vessel = film[option][2];
			const all = title + planet + vessel;
			return all;
			console.log(all);

		}
}


const listGenerator = () => {
	fetch("http://swapi.co/api/films/")
	.then((res) => res.json())
	.then((data)=> {
		// console.log(data.results);
		let results = data.results;

    	return results.map((result) => {
    		film.push([`${result.title}`, `${result.planets.length}`, `${result.vehicles.length}`]);
    		console.log(film);
    		film.forEach((each) => {
    			console.log(each[0]);
    		});
    		let li = createNode('li'),
          	span = createNode('span');
          	span.innerHTML = `Titres: ${result.title},<br/> Nombre de planètes: ${result.planets.length},<br/> Nombre de vaisseaux: ${result.vehicles.length}`;
		    append(li, span);
  	        append(ul, li);
    	})
	})
	.catch((err) => {
		console.log(err);
	});
}

// Il aurait fallu créer une fonction qui gère la selection des films pour changer l'etat du résultat.
// Pour le film en question afficher ses données tout en les effaçants lorsqu'on choisit un autre film.
