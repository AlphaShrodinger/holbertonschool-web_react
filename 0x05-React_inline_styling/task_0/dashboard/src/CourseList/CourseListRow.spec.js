import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    it('renders a header row with background color #deb5b545', () => {
        const { container } = render(
            <CourseListRow isHeader={true} textFirstCell="Header" />
        );
        expect(container.querySelector('tr').style.backgroundColor).toBe('rgb(222, 181, 181)');
    });

    it('renders a header row with two cells and background color #deb5b545', () => {
        const { container } = render(
            <CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />
        );
        expect(container.querySelector('tr').style.backgroundColor).toBe('rgb(222, 181, 181)');
    });

    it('renders a regular row with background color #f5f5f5ab', () => {
        const { container } = render(
            <CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />
        );
        expect(container.querySelector('tr').style.backgroundColor).toBe('rgba(245, 245, 245, 0.67)');
    });
});