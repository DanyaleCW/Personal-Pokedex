


class Pokemon {
	constructor(name,sprites,hp,attack,defense,abilities){
		this.name = name;
		this.sprites = sprites;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.abilities = abilities;
	}
}


class Trainer {
	constructor() {
		this.pokemon = [];
	}
	
	

add(Pokemon) {
	this.pokemon.push(Pokemon)
}

get(name) {
	for (let j = 0; j < this.pokemon.length; j++) {
		if(name == this.pokemon[j].name){
			return(this.pokemon[j]);

		}
		

}

}


displayAll() {
	for (let i = 0; i < this.pokemon.length; i++) {
		console.log(this.pokemon[i])

		
	}
	}	
}

let newTrainer = new Trainer()

newTrainer.getPokemon;

//aerodactyl	

// $(document).ready(function(){

	let getAerodactyl = function () {

	 $.ajax({
	 	url:"https://pokeapi.co/api/v2/pokemon/142/", 
		type: 'GET',
		success: function(data) {
			$('#aerodactyl').append(data);
			$('new_div').show();
		// for (i = 0; i < newTrainer.length; i++) {
			let name = data.name;
			let sprites = data.sprites.front_shiny;
			let sprites1 = data.sprites.back_shiny;
			let	hp = data.stats[5].base_stat;	
			let attack = data.stats[4].base_stat;
			let defense = data.stats[3].base_stat;
			let abilities = data.abilities[0].ability.name;
			let abilities1 = data.abilities[1].ability.name;
			let abilities2 = data.abilities[2].ability.name;
			let newDiv = $('<div class="aero"></div>')

		let aerodactyl = new Pokemon(name,sprites,hp,attack,defense,abilities);
			newTrainer.pokemon.push(aerodactyl);

console.log(newTrainer);

			$(newDiv).append('<div class="name">' + name + '</div>');
			$(newDiv).append(`<img class="sprites" src='${sprites}' height="200" width="200">`);
			$(newDiv).append(`<img class="sprites1" src='${sprites1}' height="200" width="200">`);
			$(newDiv).append('<div class="hp">' + 'HP:' + ' '+ hp + '</div>');
			$(newDiv).append('<div class ="attack">' + 'ATTACK:' + ' '+ attack + '</div>');
			$(newDiv).append('<div class ="defense">' + 'DEFENSE:' + ' '+ defense + '</div>');
			$(newDiv).append('<div class ="abilities">' + 'ABILITIES:' + ' '+ abilities + ',' + ' ' + abilities1 + ',' + 
				' ' + abilities2 + '</div>');

			$('#aerodactyl').append(newDiv);

			// newTrainer.pokemon[]
 //}
		}	

		
});
		 }

	

let getMisagius = function () {

	 $.ajax({
	 	url:"https://pokeapi.co/api/v2/pokemon/429/", 
		type: 'GET',
		success: function(data) {
			let name = data.name
			let sprites = data.sprites.front_default
			let sprites1 = data.sprites.back_default
			let	hp = data.stats[5].base_stat	
			let attack = data.stats[4].base_stat 
			let defense = data.stats[3].base_stat
			let abilities = data.abilities[0].ability.name
			let newDiv = $('<div class="misa"></div>')

			let mismagius = new Pokemon(name,sprites,hp,attack,defense,abilities);
			newTrainer.pokemon.push(mismagius);

console.log(newTrainer);


			$(newDiv).append('<div class="name">' + name + '</div>');
			$(newDiv).append(`<img class="sprites" src='${sprites}' height="200" width="200">`);
			$(newDiv).append(`<img class="sprites1" src='${sprites1}' height="200" width="200">`);
			$(newDiv).append('<div class="hp">' + 'HP:' + ' '+ hp + '</div>');
			$(newDiv).append('<div class ="attack">'  + 'ATTACK:' + ' ' +attack + '</div>');
			$(newDiv).append('<div class ="defense">'  + 'DEFENSE:' + ' '+  defense + '</div>');
			$(newDiv).append('<div class ="abilities">' + 'ABILITIES:' + ' '+ abilities + '</div>');

			$('#mismagius').append(newDiv);
		},	

		
});
		 }

	// });

//drapion


let getDrapion = function () {

// $(document).ready(function(){

	 $.ajax({
	 	url:"https://pokeapi.co/api/v2/pokemon/452/", 
		type: 'GET',
		success: function(data) {
			
			let name = data.name
			let sprites = data.sprites.front_default
			let sprites1 = data.sprites.back_default
			let	hp = data.stats[5].base_stat	
			let attack = data.stats[4].base_stat 
			let defense = data.stats[3].base_stat
			let abilities = data.abilities[0].ability.name
			let abilities1 = data.abilities[1].ability.name
			let abilities2 = data.abilities[2].ability.name
			let newDiv = $('<div class="drap"></div>')

 			let drapion = new Pokemon(name,sprites,hp,attack,defense,abilities);
			newTrainer.pokemon.push(drapion);

 console.log(newTrainer);
 console.log(drapion);
 

			$(newDiv).append('<div class="name">' + name + '</div>');
			$(newDiv).append(`<img class="sprites" src='${sprites}' height="200" width="200">`);
			$(newDiv).append(`<img class="sprites1" src='${sprites1}' height="200" width="200">`);
			$(newDiv).append('<div class="hp">' + 'HP:' + ' ' + hp + '</div>');
			$(newDiv).append('<div class ="attack">'  + 'ATTACK:' + ' '+  attack + '</div>');
			$(newDiv).append('<div class ="defense">'  + 'DEFENSE:' + ' '+  defense + '</div>');
			$(newDiv).append('<div class ="abilities">' + 'ABILITIES:' + ' '+ abilities + ',' + ' ' + abilities1 + ',' + 
				' ' + abilities2 + '</div>');

			 $('#drapion').append(newDiv);

			  //(newTrainer.pokemon[2]).this.name;
		
		},	

});
}


	getAerodactyl(0);
	getMisagius(1);
	getDrapion(2);




//ajax calls will load after everthing else with the code below. 

// $.when(aerodactyl(), misaguis(), drapion().done(function(a1, a2, a3, a4){
//     // the code here will be executed when all four ajax requests resolve.
//     // a1, a2, a3 and a4 are lists of length 3 containing the response text,
//     // status, and jqXHR object for each of the four ajax calls respectively.
// });

// function ajax1() {
//     // NOTE:  This function must return the value 
//     //        from calling the $.ajax() method.
//     return $.ajax({
//         url: "someUrl",
//         dataType: "json",
//         data:  yourJsonData,            
//         ...
//     });
// }

		// complete: function () {
		// 	(purpleMenace.pokemon[0].hp)
		// }
	// });











