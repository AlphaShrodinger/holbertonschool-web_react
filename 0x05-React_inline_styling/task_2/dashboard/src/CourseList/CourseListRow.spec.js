// CourseListRow.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

// Mock Aphrodite style injection (suppress real style injection in tests)
jest.mock('aphrodite', () => {
    const original = jest.requireActual('aphrodite');
    return {
        ...original,
        css: (...args) => args.join(' '), // Simply join class names for testing
    };
});

describe('CourseListRow component', () => {
    test('renders a header row with correct text in th elements', () => {
        render(<CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Credit" />);

        // Check if the header row is rendered correctly
        expect(screen.getByText('Course Name')).toBeInTheDocument();
        expect(screen.getByText('Credit')).toBeInTheDocument();

        // Check that the correct class is applied for header rows
        const row = screen.getByRole('row');
        expect(row).toHaveClass('headerRow');  // Class for header row
    });

    test('renders a default row with correct text in td elements', () => {
        render(<CourseListRow isHeader={false} textFirstCell="Math" textSecondCell="10" />);

        // Check if the default row is rendered correctly
        expect(screen.getByText('Math')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();

        // Check that the correct class is applied for default rows
        const row = screen.getByRole('row');
        expect(row).toHaveClass('defaultRow');  // Class for default row
    });

    test('renders textFirstCell correctly when passed', () => {
        render(<CourseListRow isHeader={false} textFirstCell="Physics" textSecondCell="5" />);

        // Check if the first cell is rendered correctly
        expect(screen.getByText('Physics')).toBeInTheDocument();
    });

    test('renders textSecondCell correctly when passed', () => {
        render(<CourseListRow isHeader={false} textFirstCell="Biology" textSecondCell="3" />);

        // Check if the second cell is rendered correctly
        expect(screen.getByText('3')).toBeInTheDocument();
    });

    test('header row applies correct th styles', () => {
        render(<CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Credit" />);

        const firstTh = screen.getByText('Course Name').closest('th');
        const secondTh = screen.getByText('Credit').closest('th');

        // Check if the th element for header has the correct class for styling
        expect(firstTh).toHaveClass('headerTh');
        expect(secondTh).toHaveClass('headerTh');
    });

    test('default row applies correct td styling', () => {
        render(<CourseListRow isHeader={false} textFirstCell="Math" textSecondCell="10" />);

        const firstTd = screen.getByText('Math').closest('td');
        const secondTd = screen.getByText('10').closest('td');

        // Check if the td elements for default row are rendered with the correct class
        expect(firstTd).toHaveClass('defaultRow');
        expect(secondTd).toHaveClass('defaultRow');
    });
});
