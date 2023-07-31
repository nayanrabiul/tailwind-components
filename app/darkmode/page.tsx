'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/darkMode';

export default function Home() {

    let { theme, setLightTheme, setDarkTheme, setSystemTheme } = useTheme();

    let buttonClass = '  bg-slate-900 px-4  text-white py-2 rounded-lg shadow-lg ring-1 ring-slate-900/5';
    let letThemeSet = (item) => {
        if (item === 'light') {
            setLightTheme();
        } else if (item === 'dark') {
            setDarkTheme();
        } else if (item === 'system') {
            setSystemTheme();
        }
    };


    return (
        <main className={`h-[100vh] ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'}`}>
            <div className='p-12'>
                <h1 className={'text-2xl'}>Current Theme: <span className={'font-bold uppercase'}>{theme} </span></h1>
                <div className={'space-x-3 py-4'}>
                    {
                        ['light', 'dark', 'system'].map((item, index) => {
                            return (
                                <button key={index} onClick={() => {
                                    letThemeSet(item);
                                }} className={`${buttonClass} ${item === theme ? 'bg-slate-500' : ''}`}>{item}</button>
                            );
                        })
                    }

                </div>
                <div className={'flex justify-left items-center'}>
                    <div
                        className='max-w-lg bg-white dark:bg-slate-800 rounded-lg p-6 ring-1 ring-slate-900/5 shadow-[0_0_10px]'>
                        <h3 className='text-slate-900 dark:text-white  text-base font-medium tracking-tight'>Writes
                            Upside-Down</h3>
                        <p className='text-slate-500 dark:text-slate-400 mt-2 text-sm'>The Zero Gravity Pen can be used
                            to
                            write in any orientation, including upside-down. It even works in outer space.</p>
                    </div>
                </div>

            </div>
        </main>

    );
}


