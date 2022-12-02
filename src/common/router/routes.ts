import Links from "common/components/Links";
import Api from "components/Api/Api";
import Counter from "components/Counter/Counter";
import DispatchCounter from "components/DispatchCounter/DispatchCounter";
import Interval from "components/Interval/Interval";
import Reuseable from "components/Reusable/Reuseable";
import React from "react";

export interface IRoute {
    title: string,
    keyWords?: string[],
    url: string,
    Component: React.FC
    visible: boolean,
    dificulty: number,
}

export const Routes: IRoute[] = [
    {
        title: 'links',
        url: '/',
        Component: Links,
        visible: false,
        dificulty: 0,
    },
    {
        title: "counter",
        keyWords: ['useState', 'eventHandling'],
        url: '/counter',
        Component: Counter,
        visible: true,
        dificulty: 1
    },
    {
        title: "reusable component",
        keyWords: ['typescript', 'component structering'],
        url: '/reuseable',
        Component: Reuseable,
        visible: true,
        dificulty: 2,
    },
    {
        title: "Dispatch Counter",
        keyWords: ['useReducer', 'eventHandling'],
        url: '/dispatch',
        Component: DispatchCounter,
        visible: true,
        dificulty: 3,
    },
    {
        title: "Api Interaction",
        keyWords: ['useEffect', 'async'],
        url: '/api',
        Component: Api,
        visible: true,
        dificulty: 1,
    },
    {
        title: "Interval handling",
        keyWords: ['window', 'useEffect', 'timeouts', 'cleanup'],
        url: '/interval',
        Component: Interval,
        visible: true,
        dificulty: 3,
    }
]