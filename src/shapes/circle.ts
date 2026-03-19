/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 15 2026
 * @desc Circle
 *       This class implements the Shape interface for a circle, including methods to calculate area
 *       and draw the shape on a canvas.
 *
 */

'use strict';

import { Shape } from './shape.js';

/**
 * Class representing a circle shape, implementing the Shape interface.
 * ```typescript
 * const circle = new Circle(50, 50, 20, 'red', 'black', 2);
 * console.log(circle.getArea()); // Outputs the area of the circle (1256.6370614359173 in this case)
 * circle.draw(context); // Draws the circle on the canvas context
 * ```
 */
export class Circle implements Shape {
  /**
   * Create a circle
   * these are the arguments you pass in
   * add default values to avoid errors on empty arguments
   * @param {number} xPosition - X coord of the Circle's position
   * @param {number} yPosition - Y coord of the Circle's position
   * @param {number} radius
   * @param {string} fillColor  
   * @param {string} strokeColor  
   * @param {number} strokeWidth  
   */
  constructor(
    private xPosition: number = 0, 
    private yPosition: number = 0, 
    private radius: number = 0,
    private fillColor: string = 'black', 
    private strokeColor: string = 'black', 
    private strokeWidth: number = 2
  ) {}

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.save();
    context.fillStyle = this.fillColor;
    context.lineWidth = this.strokeWidth;
    context.strokeStyle = this.strokeColor;

    context.beginPath();
    context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    context.restore();
  }
}