import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

import { useState, type PropsWithChildren } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LOCAL_STORAGE_COLLAPSE_KEY } from 'shared/lib/consts/localStorage';

interface SidebarProps {
 className?: string;
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
    const { className } = props;
   const [collapsed, setCollapsed] = useState(Boolean(localStorage.getItem(LOCAL_STORAGE_COLLAPSE_KEY)) || false)

   const collapse = () => {
       const newCollapse = !collapsed
      setCollapsed(newCollapse)
      if (!newCollapse) {
         localStorage.removeItem(LOCAL_STORAGE_COLLAPSE_KEY)
      } else {
         localStorage.setItem(LOCAL_STORAGE_COLLAPSE_KEY, String(newCollapse))
      }
    }

 return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
         <button onClick={collapse}>Collapse</button>
         <div className={cls.switchers}>
            <ThemeSwitcher/>
         </div>
    </div>
 );
}