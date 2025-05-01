import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList({ courses }) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {courses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" />
                ) : (
                    courses.map((course) => (
                        <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit.toString()}
                        />
                    ))
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    courses: PropTypes.array,
};

CourseList.defaultProps = {
    courses: [],
};

export default CourseList;