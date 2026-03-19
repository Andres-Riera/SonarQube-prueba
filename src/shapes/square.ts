/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 15 2026
 * @desc Square
 *       This class implements the Shape interface for a square, including methods to calculate area
 *       and draw the shape on a canvas.
 *
 */

'use strict';

import { Shape } from './shape.js';

/**
 * Class representing a square shape, implementing the Shape interface.
 * ```typescript
 * const square = new Square(50, 50, 20, 'red', 'black', 2);
 * console.log(square.getArea()); // Outputs the area of the square (400 in this case)
 * square.draw(context); // Draws the square on the canvas context
 * ```
 */
export class Square implements Shape {
  /**
   * Create a square
   * these are the arguments you pass in
   * add default values to avoid errors on empty arguments
   * @param {number} xPosition - X coord of the Square's position
   * @param {number} yPosition - Y coord of the Square's position
   * @param {number} side
   * @param {string} fillColor  
   * @param {string} strokeColor  
   * @param {number} strokeWidth  
   */
  constructor(
    private xPosition: number = 0, 
    private yPosition: number = 0, 
    private side: number = 0,
    private fillColor: string = 'black', 
    private strokeColor: string = 'black', 
    private strokeWidth: number = 2
  ) {}

  getArea(): number {
    return this.side * this.side;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.save();
    context.fillStyle = this.fillColor;
    context.lineWidth = this.strokeWidth;
    context.strokeStyle = this.strokeColor;

    context.beginPath();
    context.rect(this.xPosition, this.yPosition, this.side, this.side);
    context.fill();
    context.stroke();

    context.restore();
  }
}