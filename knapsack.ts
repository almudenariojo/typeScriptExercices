interface Item {
  weight: number;
  value: number;
}

function knapsack(items: Item[], W: number): number {
  const n = items.length;
  const dp: number[][] = [];

  // Inicializar la matriz dp con 0's
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= W; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      // Si el ítem actual no cabe en la mochila, no lo incluimos
      if (items[i - 1].weight > w) {
        dp[i][w] = dp[i - 1][w];
      } else {
        // Tomamos el máximo entre incluir o no incluir el ítem actual
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - items[i - 1].weight] + items[i - 1].value
        );
      }
    }
  }

  // El valor máximo está en la última celda de la matriz dp
  return dp[n][W];
}

// Ejemplo de uso
const items: Item[] = [
  { weight: 5, value: 10 },
  { weight: 4, value: 40 },
  { weight: 6, value: 30 },
  { weight: 4, value: 50 },
];
const knapsackLimit = 10;

const maxValue = knapsack(items, knapsackLimit);
console.log(`El valor máximo que se puede obtener es ${maxValue}`);
