/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 01 2026
 * @desc My set class
 *       This file defines a MySet class that represents a set of numbers
 *       and implements methods to perform operations on sets.
 *
 */

'use strict';

/**
 * Class representing a set of numbers.
 * ```typescript
 * const set1: MySet = new MySet();
 * set1.add(1);
 * set1.add(2);
 * console.log(set1.toString()); // prints '{1, 2}'
 * console.log(set1.has(1)); // prints true
 * console.log(set1.has(3)); // prints false
 * console.log(set1.size()); // prints 2
 * const set2: MySet = new MySet();
 * set2.add(2);
 * set2.add(3);
 * const union: MySet = set1.union(set2);
 * console.log(union.toString()); // prints '{1, 2, 3}'
 */
export class MySet {
  /**
   * @param {number[]} elements the elements of the set
   */
  constructor(private elements: number[] = []) {}

  toString(): string {
    return `{${this.elements.join(', ')}}`;
  }
  add(element: number): void {
    if (!this.has(element)) {
      this.elements.push(element);
    }
  }
  has(element: number): boolean {
    for (let i: number = 0; i < this.elements.length; i++) {
      if (this.elements[i] === element) {
        return true;
      }
    }
    return false;
  }
  size(): number {
    return this.elements.length;
  }
  union(other: MySet): MySet {
    const result: MySet = new MySet();
    for (let i: number = 0; i < this.elements.length; i++) {
      result.add(this.elements[i]);
    }
    for (let i: number = 0; i < other.elements.length; i++) {
      result.add(other.elements[i]);
    }
    return result;
  }
  intersection(other: MySet): MySet {
    const result: MySet = new MySet();
    for (let i: number = 0; i < this.elements.length; i++) {
      if (other.has(this.elements[i])) {
        result.add(this.elements[i]);
      }
    }
    return result;
  }
  difference(other: MySet): MySet {
    const result: MySet = new MySet();
    for (let i: number = 0; i < this.elements.length; i++) {
      if (!other.has(this.elements[i])) {
        result.add(this.elements[i]);
      }
    }
    return result;
  }
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isSubsetOf(other: MySet): boolean {
    for (let i: number = 0; i < this.elements.length; i++) {
      if (!other.has(this.elements[i])) {
        return false;
      }
    }
    return true;
  }
  isDisjointOf(other: MySet): boolean {
    for (let i: number = 0; i < this.elements.length; i++) {
      if (other.has(this.elements[i])) {
        return false;
      }
    }
    return true;
  }
  isEqual(other: MySet): boolean {
    if (this.size() !== other.size()) {
      return false;
    }
    return this.isSubsetOf(other) && other.isSubsetOf(this);
  }
}