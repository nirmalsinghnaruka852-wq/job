import type { RouteObject } from 'react-router-dom'
import App from '../App'


export const Route:RouteObject[] =[
    {
        path:'/',
        element:<App></App>

    },
    {
        path:'/home',
        element: ''
    }
]