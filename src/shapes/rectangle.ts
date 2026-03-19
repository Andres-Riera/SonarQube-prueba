/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 15 2026
 * @desc Rectangle
 *       This class implements the Shape interface for a rectangle, including methods to calculate area
 *       and draw the shape on a canvas.
 *
 */

'use strict';

import { Shape } from './shape.js';

/**
 * Class representing a rectangle shape, implementing the Shape interface.
 * ```typescript
 * const rectangle = new Rectangle(50, 50, 10, 20, 'red', 'black', 2);
 * console.log(rectangle.getArea()); // Outputs the area of the rectangle (200 in this case)
 * rectangle.draw(context); // Draws the rectangle on the canvas context
 * ```
 */
export class Rectangle implements Shape {
  /**
   * Create a rectangle
   * these are the arguments you pass in
   * add default values to avoid errors on empty arguments
   * @param {number} xPosition - X coord of the Rectangle's position
   * @param {number} yPosition - Y coord of the Rectangle's position
   * @param {number} width
   * @param {number} height
   * @param {string} fillColor  
   * @param {string} strokeColor  
   * @param {number} strokeWidth  
   */
  constructor(
    private xPosition: number = 0, 
    private yPosition: number = 0, 
    private width: number = 0,
    private height: number = 0,
    private fillColor: string = 'black', 
    private strokeColor: string = 'black', 
    private strokeWidth: number = 2
  ) {}

  getArea(): number {
    return this.width * this.height;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.save();
    context.fillStyle = this.fillColor;
    context.lineWidth = this.strokeWidth;
    context.strokeStyle = this.strokeColor;

    context.beginPath();
    context.rect(this.xPosition, this.yPosition, this.width, this.height);
    context.fill();
    context.stroke();

    context.restore();
  }
}