// let zbir = 0;

// document.getElementById("main").addEventListener('click', function(ev){
// 	if(ev.target.classList.contains('card')){
// 		const kart = parseInt(ev.target.textContent);
// 		zbir+=kart;
// 		console.log(zbir);
// 	}
// });

let komp = [];
let korisnik = [];
const dugme = document.getElementById('pocni');
dugme.addEventListener('click', function(){
	let user_in = 5;
	radi();
})

async function radi(){
	await generisi();
	for(let i=0;i<5;i++){
		const asd = await user_klik();
		korisnik.push(asd);
		if(asd===komp[i]){
			console.log('ok');
		} else{
			greska();
			break;
		}
	}
	bravo();
};


function generisi(){
	for(let i=0; i<5; i++){
		setTimeout(() =>{
			const rand = Math.floor(Math.random()*15) + 1;
			komp.push(rand);

			const ajdi = "card" + rand;
			const karta = document.getElementById(ajdi);

			karta.classList.add('gold');
			setTimeout(function(){
				karta.classList.remove('gold');
			}, 500)
			console.log(komp)
		}, 700*i);
	}

}

function user_klik(){
	return new Promise((resolve)=>{
		document.getElementById("main").addEventListener('click', function(ev){
			if(ev.target.classList.contains('card')){
				const kart = parseInt(ev.target.textContent);
				resolve(kart);
				console.log(kart);
			}
		});
	});
}

function greska(){
	komp.splice(0,komp.length);
	korisnik.splice(0,korisnik.length);

	const sve_karte = document.querySelectorAll('.card');
	sve_karte.forEach(svaka =>{
		for(let i =0;i<10;i++){
			svaka.classList.add('red');
			setTimeout(function(){
					svaka.classList.remove('red');
			}, 2300)
		}
	})
}
function bravo(){
	komp.splice(0,komp.length);
	korisnik.splice(0,korisnik.length);

	const sve_karte = document.querySelectorAll('.card');
	sve_karte.forEach(svaka =>{
		for(let i =0;i<10;i++){
			svaka.classList.add('green');
			setTimeout(function(){
					svaka.classList.remove('green');
			}, 2300)
		}
	})
}