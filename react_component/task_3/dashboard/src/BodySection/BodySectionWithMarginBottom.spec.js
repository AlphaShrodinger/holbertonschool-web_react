import React from 'react';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('renders div with class bodySectionWithMargin', () => {
    const { container } = render(
        <BodySectionWithMarginBottom title="Sample Title">
            <p>Sample Content</p>
        </BodySectionWithMarginBottom>
    );
    expect(container.firstChild).toHaveClass('bodySectionWithMargin');
});

test('renders BodySection inside', () => {
    const { getByText } = render(
        <BodySectionWithMarginBottom title="Title Test">
            <p>Inner content</p>
        </BodySectionWithMarginBottom>
    );
    expect(getByText('Title Test')).toBeInTheDocument();
    expect(getByText('Inner content')).toBeInTheDocument();
});