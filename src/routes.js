import { AppPage } from './pages/AppPage'
import { LoginSignup } from './pages/LoginSignup'
import { MedicineTable } from './cmps/Doctor/Medicine/MedicineTable'
import { Timeline } from './pages/Timeline.jsx'
import { MedicinesChecklist } from './pages/MedicinesChecklist.jsx'
import { SuccessStories } from './pages/SuccessStories'
const routes = [
    {
        path: '/',
        component: AppPage,
        isExact: true
    },
    {
        path: '/auth',
        component: LoginSignup,
        isExact: true
    },
    {
        path: '/admin',
        component: MedicineTable,
        isExact: true
    },
    {
        path: '/timeline',
        component: Timeline,
        isExact: true
    },
    {
        path: '/medicines',
        component: MedicinesChecklist,
        isExact: true
    },
    {
        path: '/success-stories',
        component: SuccessStories,
        isExact: true
    },
    {
        path: '/tips',
        component: SuccessStories,
        isExact: true
    },
]

export default routes;