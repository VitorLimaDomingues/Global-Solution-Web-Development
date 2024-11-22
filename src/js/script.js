// Adicionando uma mensagem de boas vindas
// alert('Bem-vindo ao Site Energia verde!')

// Função para trocar cor do body do site
function trocar(cor){
    document.body.style.background = cor
}

function instagram() {
    alert("Nosso instagram: @EnergiaVerde_br")
}

function facebook() {
    alert("Nosso facebook: EnergiaVerde_br")
}

let imagens =[
    "src/assets/img1.jpg",
    "src/assets/img2.jpg",
    "src/assets/img3.jpg"
];

let i = 0;
let time = 3000;

function slideShow(){
    document.getElementById('image').src=imagens[i]
    i++;
    if(i == imagens.length) {i = 0;}
    setTimeout('slideShow()', time)
}
slideShow();