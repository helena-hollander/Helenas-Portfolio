
//Opret HTML element

const body = document.body
const div = document.createElement("div")
div.innerText ="Virker du?"
body.append(div)



const testAbout = document.querySelector("#about")
testAbout.style.backgroundColor = "red"

//Tekststrenge


//document.getElementById ("overskrift").textContent = "Ny Titel";


//Mandag 4. September - Lav liste i JS
let jsInspirationTitle = document.querySelector('#listetitel');
jsInspirationTitle.innerHTML = "Inspirationsliste:";

   

let jsInspirationEl = document.querySelector('#inspiration')
let jsInspiration1 = {
    title: 'Laura Callaghan',
    url: "https://www.instagram.com/lauracallaghanillustration/" ,
}
let jsInspiration2 = {
    title: 'BEE Illustrates',
    url: "https://www.instagram.com/beeillustrates/?hl=da" ,  
}
let jsInspiration3 = {
    title: 'Josh and Matt Design',
    url: "https://www.instagram.com/joshandmattdesign/?hl=da" ,   
}

//Samler disse data i en Array:
let jsInspiration = [jsInspiration1, jsInspiration2, jsInspiration3];

//Anker-tag. Denne linker vores nye data til selve siden, så vi kan sen den.
//jsInspirationEl.innerHTML = ""

let jsLink1 = document.createElement('a');
jsLink1.innerText = jsInspiration1.title;
jsLink1.setAttribute('href', jsInspiration1.url);
console.log(jsLink1);

let link1El = document.createElement('li');
link1El.appendChild(jsLink1);

let jsLink2 = document.createElement('a');
jsLink2.innerText = jsInspiration2.title;
jsLink2.setAttribute('href', jsInspiration2.url);
console.log(jsLink2);

let link2El = document.createElement('li');
link2El.appendChild(jsLink2);

let jsLink3 = document.createElement('a');
jsLink3.innerText = jsInspiration3.title;
jsLink3.setAttribute('href', jsInspiration3.url);
console.log(jsLink3);

let link3El = document.createElement('li');
link3El.appendChild(jsLink3);

jsInspirationEl.appendChild(link1El);
jsInspirationEl.appendChild(link2El);
jsInspirationEl.appendChild(link3El);








