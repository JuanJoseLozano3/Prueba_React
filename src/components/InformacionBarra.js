import React from 'react'
import * as TiIcons from "react-icons/ti";
import * as ImIcons from "react-icons/im";


export const SidebarData=[
    {
        title: 'Administración en SST',
        path: '/',
        cName: 'nav-text1'
    },
    {
        title: 'Trabajadores',
        path: '/trabajadores',
        icon: <TiIcons.TiArrowDown />,
        cName: 'nav-text'
    },
    {
        title: 'Ausentismo',
        path: '/ausentismo',
        icon: <TiIcons.TiArrowDown />,
        cName: 'nav-text'
    },
    {
        title: 'Accidentalidad',
        path: '/accidentalidad',
        icon: <TiIcons.TiArrowDown />,
        cName: 'nav-text'
    },
    {
        title: 'Vacunación',
        path: '/vacunacion',
        icon: <TiIcons.TiArrowDown />,
        cName: 'nav-text'
    },
    {
        title: 'Administrar',
        path: '/administrar',
        icon: <TiIcons.TiArrowDown />,
        cName: 'nav-text'
    },
    {
        title: 'Salir',
        path: '/salir',
        icon: <ImIcons.ImExit />,
        cName: 'nav-text2'
    }
]