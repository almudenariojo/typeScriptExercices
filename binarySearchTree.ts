class TreeNode {
  data: number; // El valor almacenado en el nodo
  left: TreeNode | null; // El nodo hijo izquierdo, o null si no existe
  right: TreeNode | null; // El nodo hijo derecho, o null si no existe

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data: number) {
    if (data < this.data) {
      if (this.left === null) {
        this.left = new TreeNode(data);
      } else {
        this.left.insert(data);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(data);
      } else {
        this.right.insert(data);
      }
    }
  }

  search(data: number): boolean {
    if (data === this.data) {
      return true;
    } else if (data < this.data) {
      return this.left === null ? false : this.left.search(data);
    } else {
      return this.right === null ? false : this.right.search(data);
    }
  }

  inorderTraversal() {
    if (this.left !== null) {
      this.left.inorderTraversal();
    }
    console.log(this.data);
    if (this.right !== null) {
      this.right.inorderTraversal();
    }
  }
}
const root = new TreeNode(4);
root.insert(2);
root.insert(6);
root.insert(3);
root.insert(1);
root.insert(5);
root.insert(7);

root.inorderTraversal(); // Salida: 1 2 3 4 5 6 7
console.log(root.search(5)); // Salida: true

