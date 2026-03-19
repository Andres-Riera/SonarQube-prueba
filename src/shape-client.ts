/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since Mar 15 2026
 * @desc shape-client
 *       This program is responsible for initializing the view and starting the application.
 *
 */

'use strict';

import { View } from './view.js';

/**
 * Initializes the view and starts the application
 */
export function main(): void {
  try {
    const view = new View('tutorial');
    view.start();
  } catch (error) {
    console.error('Error al inicializar la aplicación:', error);
  }
}

main();