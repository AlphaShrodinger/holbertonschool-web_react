// CourseListRow.jsx
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Define the styles using Aphrodite's StyleSheet.create method
const styles = StyleSheet.create({
    // Style for the default rows
    defaultRow: {
        backgroundColor: '#f9f9f9',
        borderBottom: '1px solid #ddd',
        padding: '10px 15px',
    },
    // Style for the header rows
    headerRow: {
        backgroundColor: '#4CAF50',
        color: 'white',
        fontWeight: 'bold',
        padding: '10px 15px',
    },
    // Style for th elements (table headers)
    th: {
        padding: '10px 15px',
        textAlign: 'left',
        borderBottom: '2px solid #ddd',
    },
    // Additional style to separate header row
    headerTh: {
        backgroundColor: '#4CAF50',
        color: 'white',
    },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    // If isHeader is true, render a header row
    if (isHeader) {
        return (
            <tr className={css(styles.headerRow)}>
                <th className={css(styles.headerTh)}>{textFirstCell}</th>
                <th className={css(styles.headerTh)}>{textSecondCell}</th>
            </tr>
        );
    }

    // Render a default row
    return (
        <tr className={css(styles.defaultRow)}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
    );
}

export default CourseListRow;
