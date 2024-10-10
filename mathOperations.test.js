/**
 * @jest-environment jsdom
 */

// mathOperations.test.js
// Importación de las funciones 'performOperation' y '$exeDevice' desde el archivo 'mathOperations'
const { performOperation } = require('./mathOperations'); 
const { $exeDevice } = require('./mathOperations'); 

/**
 * Grupo de pruebas para las operaciones matemáticas.
 * Estas pruebas evalúan diferentes comportamientos y funcionalidades de las operaciones matemáticas.
 */
describe('Math Operations Tests', () => {   
   
    /**
     * Prueba para validar que el número máximo es mayor que el mínimo.
     * Utiliza elementos HTML para simular un entorno de DOM y verifica la relación entre dos valores.
     */
    test('Debe validar correctamente que el número máximo es mayor que el mínimo', () => {
        // Simulación del DOM con dos inputs que tienen valores 5 y 10.
        document.body.innerHTML = `
            <input id="eRMQmin" value="5" />
            <input id="eRMQmax" value="10" />
        `;

        // Extracción de los valores de los inputs por su ID.
        const min = document.getElementById('eRMQmin').value;
        const max = document.getElementById('eRMQmax').value;

        // Verificación de que el valor mínimo es menor que el valor máximo.
        expect(parseInt(min)).toBeLessThan(parseInt(max));
    });

    /**
     * Prueba que valida si la función $exeDevice.onlyNumbers permite solo números en los inputs.
     * Simula la entrada de un valor mixto de letras y números, y verifica que solo los números se mantengan.
     */
    test('Debe permitir solo números en inputs', () => {
        // Creación de un elemento input simulado.
        const inputElement = document.createElement('input');
        // Asignación de un valor mixto (números y letras).
        inputElement.value = '123abc';

        // Llamado a la función 'onlyNumbers' que debería filtrar los caracteres no numéricos.
        $exeDevice.onlyNumbers(inputElement);

        // Verificación de que el valor filtrado es solo los números '123'.
        expect(inputElement.value).toBe('123'); // Solo debe mantener los números
    });
});

/**
 * Grupo de pruebas para validar las operaciones matemáticas básicas (suma, resta, multiplicación y división), incluyendo fracciones.
 */
describe('Math Operations Tests with Fractions', () => {

    /**
     * Prueba que verifica si la operación de suma se realiza correctamente con fracciones.
     * Simula la operación de sumar dos números fraccionarios.
     */
    test('Debe realizar correctamente la suma con fracciones', () => {
        const operandA = 5.5; // Fracción
        const operandB = 3.25; // Fracción
        const operation = 'add'; // Definición de la operación de suma

        // Llamado a la función 'performOperation' y verificación del resultado.
        const result = performOperation(operandA, operandB, operation);
        expect(result).toBe(8.75); // 5.5 + 3.25 = 8.75
    });

    /**
     * Prueba que verifica si la operación de resta se realiza correctamente con un número entero y una fracción.
     * Simula la operación de restar un número entero con una fracción.
     */
    test('Debe realizar correctamente la resta con un entero y una fracción', () => {
        const operandA = 10;
        const operandB = 7.5; // Fracción
        const operation = 'subtract'; // Definición de la operación de resta

        // Llamado a la función 'performOperation' y verificación del resultado.
        const result = performOperation(operandA, operandB, operation);
        expect(result).toBe(2.5); // 10 - 7.5 = 2.5
    });

    /**
     * Prueba que verifica si la operación de multiplicación se realiza correctamente con fracciones.
     * Simula la operación de multiplicar dos números fraccionarios.
     */
    test('Debe realizar correctamente la multiplicación con fracciones', () => {
        const operandA = 2.5; // Fracción
        const operandB = 4; // Entero
        const operation = 'multiply'; // Definición de la operación de multiplicación

        // Llamado a la función 'performOperation' y verificación del resultado.
        const result = performOperation(operandA, operandB, operation);
        expect(result).toBe(10); // 2.5 * 4 = 10
    });

    /**
     * Prueba que verifica si la operación de división se realiza correctamente con fracciones.
     * Simula la operación de dividir dos números fraccionarios.
     */
    test('Debe realizar correctamente la división con fracciones', () => {
        const operandA = 5.5; // Fracción
        const operandB = 2.75; // Fracción
        const operation = 'divide'; // Definición de la operación de división

        // Llamado a la función 'performOperation' y verificación del resultado.
        const result = performOperation(operandA, operandB, operation);
        expect(result).toBe(2); // 5.5 / 2.75 = 2
    });

    /**
     * Prueba que verifica el comportamiento de la división entre un entero y una fracción.
     * La operación de dividir debería devolver un valor fraccionario.
     */
    test('Debe realizar correctamente la división de un entero por una fracción', () => {
        const operandA = 10;
        const operandB = 2.5; // Fracción
        const operation = 'divide'; // Definición de la operación de división

        // Llamado a la función 'performOperation' y verificación del resultado.
        const result = performOperation(operandA, operandB, operation);
        expect(result).toBe(4); // 10 / 2.5 = 4
    });

    /**
     * Prueba que verifica el comportamiento de la división entre cero con fracciones.
     * La operación de dividir un número fraccionario por cero debería devolver 'Infinity'.
     */
    test('Debe manejar la división entre un número fraccionario y cero', () => {
        const operandA = 3.5; // Fracción
        const operandB = 0; // División por cero
        const operation = 'divide'; // Definición de la operación de división

        // Llamado a la función 'performOperation' y verificación del resultado.
        const result = performOperation(operandA, operandB, operation);
        expect(result).toBe(Infinity); // 3.5 / 0 debe devolver Infinity
    });
});

