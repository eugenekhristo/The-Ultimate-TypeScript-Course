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

// type mapping

type ReadOnlyProduct = {
  // index signature
  // keyof
  readonly [K in keyof Product]: Product[K];
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  readonly [K in keyof T]: T[K] | null;
};

let product: ReadOnly<Product> = { name: 'a', price: 1 };

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: 'a', price: 1 });
store.find('price', 1);

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
