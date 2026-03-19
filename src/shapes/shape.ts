/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 15 2026
 * @desc Shape
 *       This interface defines the structure for geometric shapes, including methods to calculate area
 *       and draw the shape on a canvas.
 *
 */

'use strict';

/**
 * Interface representing a geometric shape with methods to calculate area and draw itself on a canvas
 */
export interface Shape {
  /**
   * returns the area of the shape
   */
  getArea(): number;

  /**
   * Draws the shape on the given canvas context
   * @param context The 2D rendering context of a canvas
   */
  draw(context: CanvasRenderingContext2D): void;
}
