class Matrix {
  private readonly rows: number[][];

  constructor(input: string) {
    this.rows = input.split('\n').map((row) =>
      row.split(' ').map((num) => Number(num))
    );
  }

  get columns(): number[][] {
    return this.rows[0].map((_, index) => this.rows.map((row) => row[index]));
  }
}


const matrix = new Matrix('1 2 3\n4 5 6\n7 8 9');
console.log(matrix.rows); // output: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(matrix.columns); // output: [ [1, 4, 7], [2, 5, 8], [3, 6, 9] ]


  

 

  