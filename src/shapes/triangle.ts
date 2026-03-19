/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 15 2026
 * @desc Triangle
 *       This class implements the Shape interface for a triangle, including methods to calculate area
 *       and draw the shape on a canvas.
 *
 */

'use strict';

import { Shape } from './shape.js';

/**
 * Class representing a triangle shape, implementing the Shape interface.
 * ```typescript
 * const triangle = new Triangle(50, 50, 10, 50, 'red', 'black', 2);
 * console.log(triangle.getArea()); // Outputs the area of the triangle (250 in this case)
 * triangle.draw(context); // Draws the triangle on the canvas context
 * ```
 */
export class Triangle implements Shape {
  /**
   * Create a triangle
   * these are the arguments you pass in
   * add default values to avoid errors on empty arguments
   * @param {number} xPosition - X coord of the Triangle's position
   * @param {number} yPosition - Y coord of the Triangle's position
   * @param {number} base
   * @param {number} height
   * @param {string} fillColor  
   * @param {string} strokeColor  
   * @param {number} strokeWidth  
   */
  constructor(
    private xPosition: number = 0, 
    private yPosition: number = 0, 
    private base: number = 0,
    private height: number = 0,
    private fillColor: string = 'black', 
    private strokeColor: string = 'black', 
    private strokeWidth: number = 2
  ) {}

  getArea(): number {
    return (this.base * this.height) / 2;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.save();
    context.fillStyle = this.fillColor;
    context.lineWidth = this.strokeWidth;
    context.strokeStyle = this.strokeColor;

    context.beginPath();
    context.moveTo(this.xPosition, this.yPosition); 
    context.lineTo(this.xPosition + this.base, this.yPosition); 
    context.lineTo(this.xPosition + (this.base / 2), this.yPosition - this.height); 
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();
  }
}