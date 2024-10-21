// generic.ts

/**
 * Generic identity function.
 * @param value - The input value of type T.
 * @returns The input value of type T.
 */
export function identity<T>(value: T): T {
    // Replace the following line with your code 
    return value;
  }

/**
 * Generic array reversal function.
 * @param arr - The input array of type T.
 * @returns A new array with the elements in reverse order.
 */
export function reverseArray<T>(arr: T[]): T[] {
    // Replace the following line with your code 
    return arr.slice().reverse();
  }

/**
 * Generic object mapper function.
 * @param obj - The input object with keys of type K and values of type V.
 * @param mapFn - The mapping function to convert values of type V to type U.
 * @returns A new object with the same keys but values of type U.
 */
export function mapObject<K extends string | number | symbol, V, U>(
    obj: Record<K, V>,
    mapFn: (value: V) => U
  ): Record<K, U> {
    // Replace the following line with your code 
    const temp: Record<K, U> = {} as Record<K, U>;

    for (const key in obj) 
      temp[key] = mapFn(obj[key]);   
    
    return temp;
  }

/**
 * Generic array filtering function.
 * @param arr - The input array of type T.
 * @param predicate - The predicate function to filter elements of type T.
 * @returns A new array with elements that pass the predicate function.
 */
export function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[] {
    // Replace the following line with your code 
    return arr.filter(predicate);
  }
    
  