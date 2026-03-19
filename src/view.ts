/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 15 2026
 * @desc View
 *       This class is responsible for managing the canvas and rendering shapes.
 *
 */

'use strict';

import { Shape } from './shapes/shape.js';
import { Square } from './shapes/square.js';
import { Circle } from './shapes/circle.js';
import { Rectangle } from './shapes/rectangle.js';
import { Triangle } from './shapes/triangle.js';

/**
 * View class responsible for managing the canvas and rendering shapes
 */
export class View {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  /**
   * Constructor initializes the canvas and its context
   * @param canvasId 
   */
  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!this.canvas) {
      throw new Error(`Canvas con id ${canvasId} no encontrado.`);
    }
    const context: CanvasRenderingContext2D | null = this.canvas.getContext('2d');
    if (!context) {
      throw new Error('No se pudo obtener el contexto');
    }
    this.context = context;
  }

  /**
   * Initiates the drawing process
   */
  start(): void {
    const numberOfShapes = this.askForNumberOfShapes();
    if (numberOfShapes > 0) {
      const shapes = this.generateRandomShapes(numberOfShapes);
      this.render(shapes);
    } else {
      console.log('No se dibujará ninguna figura.');
    }
  }

  /**
   * Renders the shapes on the canvas
   * @param shapes The array of shapes to draw
   */
  render(shapes: Shape[]): void {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    for (const shape of shapes) {
      shape.draw(this.context);
    }
  }

  /**
   * Asks the user for the number of shapes to draw
   * @returns The number entered or 0 if it's invalid
   */
  private askForNumberOfShapes(): number {
    const input = window.prompt('¿Cuántas figuras geométricas deseas dibujar?', '10');
    if (input === null) {
      return 0;
    }
    const count = parseInt(input, 10);
    return isNaN(count) || count < 0 ? 0 : count;
  }

  /**
   * Generates an array of random shapes
   * @param count The number of shapes to generate
   * @returns An array of Shape instances
   */
  private generateRandomShapes(count: number): Shape[] {
    const shapes: Shape[] = [];
    const maxWidth = this.canvas.width;
    const maxHeight = this.canvas.height;

    for (let i = 0; i < count; i++) {
      const size = this.getRandomNumber(20, 100);
      const size2 = this.getRandomNumber(20, 100); // for rectangle or triangle height
      const x = this.getRandomNumber(0, maxWidth - size);
      const y = this.getRandomNumber(0, maxHeight - size);
      
      const fillColor = this.getRandomColor();
      const strokeColor = this.getRandomColor();
      const strokeWidth = this.getRandomNumber(1, 5);

      const shapeType = this.getRandomNumber(0, 3);

      let shape: Shape = this.generateShape(shapeType, x, y, size, size2, fillColor, strokeColor, strokeWidth);
      shapes.push(shape);
    }

    return shapes;
  }

  /**
   * Generates a random number between min and max (inclusive)
   * @param min 
   * @param max 
   * @returns random number between min and max
   */
  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generates a random color for fill and stroke
   * @returns color in rgba format
   */
  private getRandomColor(): string {
    const red = this.getRandomNumber(0, 255);
    const green = this.getRandomNumber(0, 255);
    const blue = this.getRandomNumber(0, 255);
    return `rgba(${red}, ${green}, ${blue}, 1)`;
  }

  /**
   * Generates a shape based on the type
   * @param type The type of shape to generate (0 for square, 1 for circle)
   * @param xCoordinate The x-coordinate of the shape
   * @param yCoordinate The y-coordinate of the shape
   * @param size
   * @param fillColor
   * @param strokeColor
   * @param strokeWidth
   * @returns shape instance
   */
  private generateShape(
    type: number,
    xCoordinate: number,
    yCoordinate: number,
    size: number,
    size2: number, // for rectangle or triangle height
    fillColor: string,
    strokeColor: string,
    strokeWidth: number
  ): Shape {
    switch (type) {
      case 0:
        return new Square(xCoordinate, yCoordinate, size, fillColor, strokeColor, strokeWidth);
      case 1:
        return new Circle(xCoordinate, yCoordinate, size / 2, fillColor, strokeColor, strokeWidth);
      case 2:
        return new Rectangle(xCoordinate, yCoordinate, size, size2, fillColor, strokeColor, strokeWidth);
      case 3:
        return new Triangle(xCoordinate, yCoordinate, size, size2, fillColor, strokeColor, strokeWidth);
      default:
        throw new Error('Tipo de figura no reconocido');
    }
  }
}