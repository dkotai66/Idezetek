import './style.css';
let abcButton = document.getElementById('abcButton');
let theButton = document.getElementById('theButton');
let lengthButton = document.getElementById('lengthButton');
let dbButton = document.getElementById('dbButton');
let number = document.getElementById('number');
let stringTomb = new Array(String);


function adatMegjelenites(adatlista){
    let lista = document.getElementById('idezetek');
    lista.textContent="";
    for (let p of adatlista){ 
        let li = document.createElement('li');
        let q = document.createElement('q');
        li.textContent = p.author ;
        q.textContent = p.quote;
        lista.appendChild(li);
        lista.appendChild(q);
    } 
}

function AdatMegjelenites(adatlista){
    let lista = document.getElementById('idezetek');
    lista.textContent="";
    for (let p of adatlista){ 
        let ol = document.createElement('ol');
        let li = document.createElement('li');
        li.textContent = p.author ;
        lista.appendChild(ol);
        lista.appendChild(li);
    } 
}


document.addEventListener('DOMContentLoaded', async () => {

    abcButton.addEventListener('click', async () => {
    let response = await fetch('/quotes.json'); 
    let eredmeny = await response.json();
    let quetes = eredmeny.quotes;
    let quetesABC = eredmeny.quotes.sort(function(a,b){
        if(a.author.toLowerCase() < b.author.toLowerCase()){
            return -1;
        }
        else if(a.author.toLowerCase() > b.author.toLowerCase()){
            return 1;
        }
        else{
            return 0;
        }
    })
    adatMegjelenites(quetesABC);
    });

    theButton.addEventListener('click', async () => {
        let idezetekListaja = [];
        let response = await fetch('/quotes.json'); 
        let eredmeny = await response.json();
        let quetes = eredmeny.quotes;
        let idezet = '';
        for(let u of quetes){
            idezet = u.quote;
            idezetekListaja.push(idezet);
            
        }
        AdatMegjelenites(idezetekListaja);
    });

    lengthButton.addEventListener('click', async () => {
        let hossz = 0;
        let hosszakListaja = [];
        let response = await fetch('/quotes.json'); 
        let eredmeny = await response.json();
        let quetes = eredmeny.quotes;
        let idezet='';
        let idezetHossz = 0;
        for(let u of quetes){
            idezet=u.quote;
            idezetHossz = idezet.length;            
            hosszakListaja.push(idezetHossz);
        }
        
        document.getElementById('hossz').textContent = hosszakListaja.join(', ');
    });

    dbButton.addEventListener('click', async () => {
        let userText = document.getElementById('userText').value;
        let response = await fetch('/quotes.json'); 
        let eredmeny = await response.json();
        let quetes = eredmeny.quotes;
        let adatok = eredmeny.quotes.filter(e=>e.author==userText);
        let listahossz = adatok.length
        
        document.getElementById('dbOut').value = listahossz;
    });


})

