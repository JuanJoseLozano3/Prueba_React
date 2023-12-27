import React from 'react'
import * as GrIcons from "react-icons/gr";
import * as FcIcons from "react-icons/fc";
import * as IoIcons from "react-icons/io5";



export const MenuItems=[
    
    {
        title: '',
        path: '/notification',
        icon: <GrIcons.GrNotification />,
        cName: 'nav-links'
    },
    {
        title: 'Nicolai Martin',
        cName: 'nav-links'
    },
    {
        title: '',
        path: '/options',
        icon: <IoIcons.IoEllipsisHorizontalOutline />,
        cName: 'nav-links'
    },
    {
        title: '',
        path: '/persona',
        icon: <FcIcons.FcBusinessman />,
        cName: 'nav-links'
    }
]