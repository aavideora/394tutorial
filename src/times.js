export const hasConflict = (course, selected) => (
    selected.some(selection => courseConflict(course, selection))
);
export const terms = { F: 'Fall', W: 'Winter', S: 'Spring' };

export const days = ['M', 'Tu', 'W', 'Th', 'F'];
export const courseConflict = (course1, course2) => (
    getCourseTerm(course1) === getCourseTerm(course2)
    && timeConflict(course1, course2)
);

export const getCourseTerm = course => (
    terms[course.id.charAt(0)]
);
export const timeConflict = (course1, course2) => (
    daysOverlap(course1.days, course2.days) && hoursOverlap(course1.hours, course2.hours)
);

