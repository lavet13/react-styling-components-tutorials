import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = ({ items, onDeleteItem }) => {
    return (
        <ul className="goal-list">
            {items.map(({ id, text }) => (
                <CourseGoalItem key={id} id={id} onDelete={onDeleteItem}>
                    {text}
                </CourseGoalItem>
            ))}
        </ul>
    );
};

export default CourseGoalList;
