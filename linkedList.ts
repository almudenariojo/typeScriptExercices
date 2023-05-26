class ListNode<T> {
  value: T;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;  // apuntador al nodo previo inicializado en null
    this.next = null;  // apuntador al nodo siguiente inicializado en null
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null; // referencia al primer nodo de la lista, inicializado en null
  private tail: ListNode<T> | null; // referencia al último nodo de la lista, inicializado en null

  constructor() {
    this.head = null; // inicializa la lista vacía
    this.tail = null; // inicializa la lista vacía
  }

  push(value: T) { // añade un nodo con el valor especificado al final de la lista
    const node = new ListNode(value); // crea un nuevo nodo con el valor especificado

    if (!this.tail) { // si la lista está vacía
      this.head = node; // establece el nuevo nodo como el primer nodo
      this.tail = node; // establece el nuevo nodo como el último nodo
      return;
    }

    node.prev = this.tail; // establece el nodo anterior al nuevo nodo como el nodo actual que está en la cola de la lista
    this.tail.next = node; // establece el nuevo nodo como el siguiente nodo del actual que está en la cola de la lista
    this.tail = node; // establece el nuevo nodo como el último nodo
  }

  pop(): T { // elimina el último nodo de la lista y devuelve su valor
    if (!this.tail) { // si la lista está vacía
      throw new Error("Can't pop an empty list"); // lanza una excepción
    }

    const value = this.tail.value; // almacena el valor del nodo que se va a eliminar

    if (this.tail === this.head) { // si hay sólo un nodo en la lista
      this.tail = null; // establece la cola de la lista en null
      this.head = null; // establece la cabeza de la lista en null
      return value; // devuelve el valor del nodo que se eliminó
    }

    this.tail = this.tail.prev; // establece el nodo actual que está en la cola de la lista como el nodo anterior
    if (this.tail) { // si la cola de la lista no es null
      this.tail.next = null; // establece el siguiente nodo del nodo actual que está en la cola de la lista en null
    }

    return value; // devuelve el valor del nodo que se eliminó
  }

  shift(): T { // elimina el primer nodo de la lista y devuelve su valor
    if (!this.head) { // si la lista está vacía
      throw new Error("Can't shift an empty list"); // lanza una excepción
    }

    const value = this.head.value; // almacena el valor del nodo que se va a eliminar

    if (this.tail === this.head) { // si hay sólo un nodo en la lista
      this.tail = null; // establece la cola de la lista en null
      this.head = null; // establece la cabeza de la lista en null
      return value; // devuelve el valor del nodo que se eliminó
    }

    return value;
  }

  unshift(value: T) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
}

const list = new LinkedList<number>();

list.push(1);
list.push(2);
list.unshift(0);

console.log(list.pop()); // 2
console.log(list.shift()); // 0
console.log(list.pop()); // 1
