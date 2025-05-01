import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
    test('renderiza 5 filas cuando se proporcionan cursos', () => {
        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];
        render(<CourseList courses={courses} />);
        // Se esperan 2 filas de encabezado + 3 filas de cursos = 5 filas en total.
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(5);
    });

    test('renderiza 1 fila en el tbody cuando el arreglo de cursos está vacío', () => {
        render(<CourseList courses={[]} />);
        // Suponiendo que en tbody solo se muestra la fila "No course available yet".
        const tbody = document.querySelector('tbody');
        const rows = tbody.querySelectorAll('tr');
        expect(rows).toHaveLength(1);
    });
});