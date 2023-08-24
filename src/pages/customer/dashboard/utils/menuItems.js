import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    // {
    //     id: 1,
    //     title: 'Dashboard',
    //     icon: dashboard,
    //     link: '/dashboard'
    // },
    {
        id: 2,
        title: "Profit Rate",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Sales Report",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Monthly Report",
        icon: expenses,
        link: "/dashboard",
    },
]