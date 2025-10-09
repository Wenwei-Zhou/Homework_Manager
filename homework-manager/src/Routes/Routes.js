import Home from '../Home/Home.jsx'
import Course from '../Course/Course.jsx'
import Timetable from '../Timetable/Timetable'
import Score from '../Score/Score.jsx'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/course',
        component: Course
    },
    {
        path: '/timetable',
        component: Timetable
    },
    {
        path: '/score',
        component: Score
    }
]