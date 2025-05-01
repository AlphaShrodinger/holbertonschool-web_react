import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
    test('renderiza 1 th con colSpan=2 cuando isHeader es true y textSecondCell es null', () => {
        const { container } = render(<CourseListRow isHeader={true} textFirstCell="Available courses" />);
        const thElements = container.querySelectorAll('th');
        expect(thElements.length).toBe(1);
        expect(thElements[0].getAttribute('colspan')).toBe("2");
    });

    test('renderiza 2 th cuando isHeader es true y se proporciona textSecondCell', () => {
        const { container } = render(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />);
        const thElements = container.querySelectorAll('th');
        expect(thElements.length).toBe(2);
    });

    test('renderiza 2 td cuando isHeader es false', () => {
        const { container } = render(<CourseListRow textFirstCell="ES6" textSecondCell="60" />);
        const tdElements = container.querySelectorAll('td');
        expect(tdElements.length).toBe(2);
    });
});