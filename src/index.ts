// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair('1', 'Eugene');

// class ArrayUtils {
//   static wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// let numbers = ArrayUtils.wrapInArray(2);

// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function APIFetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }

// let result = APIFetch<User>('url');
// result.data?.username;

// class Man {
//   constructor(public name: string) {}
// }

// class Builder extends Man {}

// function echo<T extends Man>(value: T): T {
//   return value;
// }

// echo(new Builder('Eugene'));

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  private _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

let store = new Store<Product>();
