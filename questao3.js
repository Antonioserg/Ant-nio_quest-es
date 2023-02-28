fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const valores = data.map(item => item.valor);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const mediaMensal = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    console.log(`Menor valor de faturamento diário: ${menorValor}`);
    console.log(`Maior valor de faturamento diário: ${maiorValor}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
  })
  .catch(error => console.error(error));