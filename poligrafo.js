const perguntas = [
    "Telefonou para a vítima?",
    "Esteve no local da ocorrência?",
    "Mora perto da vítima?",
    "Já trabalhou com a vítima?",
    "Você devia algum dinheiro à vítima?",
    "Encontrou a vítima no dia do crime?",
    "Já teve alguma briga com a vítima?",
    "Estava nas proximidades no momento do crime?",
    "Ficou nervoso ao saber do crime?"
  ];
  
  const respostas = ['nao', 'nao', 'sim', 'nao', 'nao', 'sim', 'nao', 'sim', 'nao'];
  
  let respostasSim = 0;
  
  console.log("Respostas:");
  for (let i = 0; i < perguntas.length; i++) {
    console.log(`${i + 1}. ${perguntas[i]} ${respostas[i]}`);
    if (respostas[i] === 'sim') {
      respostasSim++;
    }
  }
  
  let classificacao = 'inocente';
  if (respostasSim === 5) {
    classificacao = 'suspeita';
  } else if (respostasSim >= 6 && respostasSim <= 8) {
    classificacao = 'cúmplice';
  } else if (respostasSim >= 9) {
    classificacao = 'culpada';
  }
  
console.log("Possível envolvimento na ocorrência:", classificacao);
  