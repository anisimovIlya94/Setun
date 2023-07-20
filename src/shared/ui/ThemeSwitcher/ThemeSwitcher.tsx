import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import ToggleOn from "shared/assets/icons/toggle-on.svg"
import ToggleOff from "shared/assets/icons/toggle-off.svg"

import type { PropsWithChildren } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from '../Button/Button';

interface ThemeSwitcherProps {
 className?: string;
}

export function ThemeSwitcher(props: PropsWithChildren<ThemeSwitcherProps>) {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

 return (
    <Button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
         {theme === Theme.DARK ? <ToggleOn className={cls.off} /> : <ToggleOff className={cls.off}/>}
    </Button>
 );
}