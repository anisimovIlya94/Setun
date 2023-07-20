import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ButtonTheme {
    CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme
}

export function Button(props: PropsWithChildren<ButtonProps>) {
 const { className, theme = ButtonTheme.CLEAR, children, ...otherProps } = props;

 return (
     <button
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
     >
        {children}
    </button>
 );
}