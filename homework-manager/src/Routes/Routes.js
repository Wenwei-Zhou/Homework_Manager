import Home from '../Home/Home.jsx'
import Homework from '../Homework/Homework'
import Timetable from '../Timetable/Timetable'
import Target from '../Target/Target'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/homework',
        component: Homework
    },
    {
        path: '/timetable',
        component: Timetable
    },
    {
        path: '/target',
        component: Target
    }
]