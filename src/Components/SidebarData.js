import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideberData = [
    {
        title: 'Overview',
        path: '/overview',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [ {
            title: 'Users',
            path: '/overview/users',
        },
        {
            title: 'Revenue',
            path: '/overview/revenue',
        },
    ]
    },
    {
        title: 'Reports',
        path: '/reports',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [ {
            title: 'Reports',
            path: '/reports/reports',
        },
        {
            title: 'Reports2',
            path: '/reports/reports2',
        },
        {
            title: 'Reports3',
            path: '/reports/reports3',
        },
    ]
    },
    {
        title: 'Products',
        path: '/products',
    }

]
