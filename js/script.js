

// prima di tutto devo creare un array:

const personArray = [
   {
    nome: "Wayne",
    surname: "Barnett",
    profession:"founder & ceo",
    image: "wayne-barnett-founder-ceo.jpg"
   },
   {
    nome: "Angela",
    surname: "Carroll",
    profession:"chief editor",
    image: "angela-caroll-chief-editor.jpg"
   },
   {
    nome: "walter",
    surname: "Gordon",
    profession:"Office Manager",
    image: "walter-gordon-office-manager.jpg"
   },
   {
    nome: "Angela",
    surname: "Lopez",
    profession:"Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
   },
   {
    nome: "Scott",
    surname: "Estrada",
    profession:"Developer",
    image: "scott-estrada-developer.jpg"
   },
   {
    nome: "Barbara",
    surname: "Ramos",
    profession:"Graphic designer",
    image: "barbara-ramos-graphic-designer.jpg "
   }
]

// console.log(personArray);


const infoContainer = document.getElementById(`info-container`);


for(let i = 0; i < personArray.length; i++){
    const infoPerson = personArray[i];
    for(let key in infoPerson){
        infoContainer.innerHTML += `<li>${key}:${infoPerson[key]}</li>`;
    }
}



    
