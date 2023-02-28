function fibonacciSequence(n) {
    let num1 = 0;
    let num2 = 1;
    let nextNum;
  
    if (n === 0) {
      return `${n} pertence à sequência de Fibonacci.`;
    }
  
    while (num2 <= n) {
      if (n === num2) {
        return `${n} pertence à sequência de Fibonacci.`;
      }
      nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }
  
    return `${n} não pertence à sequência de Fibonacci.`;
  }