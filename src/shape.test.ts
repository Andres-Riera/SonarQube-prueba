/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 15 2026
 * @desc Tests for Shapes
 *       This program tests the Shapes classes
 *
 */

import { Shape } from './shapes/shape';
import { Square } from './shapes/square';
import { Circle } from './shapes/circle';
import { Rectangle } from './shapes/rectangle';
import { Triangle } from './shapes/triangle';

describe('Square', () => {
  it('should be instantiated correctly', () => {
    const figura: Shape = new Square();
    expect(figura).toBeInstanceOf(Square);
  });

  it('should calculate the area correctly', () => {
    const square: Shape = new Square(
      0,
      0,
      5,
    );
    expect(square.getArea()).toBe(25);
  });
});

describe('Circle', () => {
  it('should be instantiated correctly', () => {
    const figura: Shape = new Circle();
    expect(figura).toBeInstanceOf(Circle);
  });

  it('should calculate the area correctly', () => {
    const circle: Shape = new Circle(
      0,
      0,
      5,
    );
    expect(circle.getArea()).toBeCloseTo(78.5398);
  });
});

describe('Rectangle', () => {
  it('should be instantiated correctly', () => {
    const figura: Shape = new Rectangle();
    expect(figura).toBeInstanceOf(Rectangle);
  });

  it('should calculate the area correctly', () => {
    const rectangle: Shape = new Rectangle(
      0,
      0,
      5,
      10
    );
    expect(rectangle.getArea()).toBe(50);
  });
});

describe('Triangle', () => {
  it('should be instantiated correctly', () => {
    const figura: Shape = new Triangle();
    expect(figura).toBeInstanceOf(Triangle);
  });

  it('should calculate the area correctly', () => {
    const triangle: Shape = new Triangle(
      0,
      0,
      5,
      10
    );
    expect(triangle.getArea()).toBe(25);
  });
});
