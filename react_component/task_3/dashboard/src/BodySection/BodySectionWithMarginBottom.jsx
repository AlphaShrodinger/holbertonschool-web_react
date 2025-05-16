import React from 'react';
import BodySection from './BodySection';
import './BodySection.css';

const BodySectionWithMarginBottom = ({ title, children }) => (
    <div className="bodySectionWithMargin">
        <BodySection title={title}>{children}</BodySection>
    </div>
);

export default BodySectionWithMarginBottom;