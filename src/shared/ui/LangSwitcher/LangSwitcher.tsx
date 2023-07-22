import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

interface LangSwitcherProps {
 className?: string;
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
 const { className } = props;
 const { t, i18n } = useTranslation();
 const toggle = () => {
   i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
 }
 return (
   <div>
     <Button onClick={toggle}>{t("Язык")}</Button>
   </div>
 )
}