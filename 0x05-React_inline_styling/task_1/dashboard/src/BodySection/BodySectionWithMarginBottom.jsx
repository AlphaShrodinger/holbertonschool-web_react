import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
    courseList: {
        listStyleType: 'none',
        padding: '0',
    },
});

function CourseList() {
    return (
        <ul className={css(styles.courseList)}>
            <CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Duration" />
            <CourseListRow isHeader={false} textFirstCell="Math" textSecondCell="3 months" />
            <CourseListRow isHeader={false} textFirstCell="Science" textSecondCell="4 months" />
        </ul>
    );
}

export default CourseList;