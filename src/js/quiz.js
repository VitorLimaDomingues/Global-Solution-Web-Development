// Adicionando alert para o quiz
alert('Vamos testar seus conhecimentos sobre o Smart - Grid');

// Trocar cor de fundo do site
function trocar(cor) {
    document.body.style.background = cor;
}

// Array de objetos contendo as perguntas e respostas corretas do quiz
const perguntas = [
    { pergunta: "1. O que é um Smart Grid? \n a) Uma rede elétrica com tecnologia digital para otimizar o consumo. \n b) Um sistema de energia renovável autossuficiente. \n c) Um tipo de usina elétrica movida a energia solar.", resposta: "A" },
    { pergunta: "2. Qual é a principal vantagem do Smart Grid sobre redes elétricas tradicionais? \n a) Ele permite monitoramento em tempo real e ajustes automáticos. \n b) Ele utiliza exclusivamente fontes renováveis. \n c) Ele não requer manutenção regular.", resposta: "A" },
    { pergunta: "3. Quais fontes de energia são mais bem integradas em um Smart Grid? \n a) Fontes de energia renováveis, como solar e eólica. \n b) Fontes nucleares. \n c) Combustíveis fósseis, como petróleo e carvão.", resposta: "A" },
    { pergunta: "4. Como o Smart Grid contribui para a sustentabilidade? \n a) Reduzindo o consumo de energia. \n b) Diminuindo a dependência de fontes não renováveis. \n c) Eliminando o uso de energia elétrica.", resposta: "B" },
    { pergunta: "5. Qual dispositivo é essencial para monitorar o consumo em um Smart Grid? \n a) Painel solar. \n b) Medidor inteligente (Smart Meter). \n c) Transformador elétrico.", resposta: "B" },
    { pergunta: "6. O que o Smart Grid utiliza para identificar e corrigir falhas automaticamente? \n a) Inteligência artificial e sensores. \n b) Energia reserva. \n c) Técnicos especializados 24/7.", resposta: "A" },
    { pergunta: "7. Como o Smart Grid melhora a confiabilidade do sistema elétrico? \n a) Ele armazena energia indefinidamente. \n b) Ele identifica e resolve problemas rapidamente, reduzindo interrupções. \n c) Ele não sofre com sobrecargas.", resposta: "B" },
    { pergunta: "8. Qual é o impacto do Smart Grid nos custos de energia? \n a) Reduz os custos operacionais e incentiva o consumo eficiente. \n b) Aumenta os custos por exigir manutenção constante. \n c) Não altera os custos energéticos.", resposta: "A" },
    { pergunta: "9. Por que o Smart Grid é importante para o futuro energético? \n a) Ele suporta novas tecnologias, como veículos elétricos. \n b) Ele elimina a necessidade de redes elétricas físicas. \n c) Ele reduz a geração de energia.", resposta: "A" },
    { pergunta: "10. Quais tecnologias são integradas ao Smart Grid? \n a) Sensores, análise de dados e automação. \n b) Cabos convencionais e geradores mecânicos. \n c) Apenas energia solar e eólica.", resposta: "A" }
];

// Declarando a variável que conta o número de acertos
let acertos = 0;

// Loop que percorre todas as perguntas
for (let i = 0; i < perguntas.length; i++) {
    const respostaUsuario = prompt(perguntas[i].pergunta);

    if (respostaUsuario.toLowerCase() === perguntas[i].resposta.toLowerCase()) {
        acertos++;
    }
}

// Determinar a mensagem com base no número de acertos
let mensagem;

if (acertos <= 3) {
    mensagem = "Você precisa estudar mais sobre o assunto!";
} else if (acertos <= 6) {
    mensagem = "Você tem certo conhecimento sobre o Smart Grid!";
} else if (acertos <= 9) {
    mensagem = "Você tem bom conhecimento sobre o Smart Grid!";
} else {
    mensagem = "Você tem total conhecimento sobre o Smart Grid!";
}

// Exibir resultado no elemento com id "msg"
document.getElementById("msg").innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas! ${mensagem}`;
