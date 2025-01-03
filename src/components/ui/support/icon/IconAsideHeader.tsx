'use client';
import { FC } from 'react';
import { IOpenState } from '../../aside/Aside';

const IconAsideHeader: FC<{
  isOpenAside: IOpenState;
  children: React.ReactNode;
  icon: React.ReactNode;
}> = ({ isOpenAside, children, icon }) => {
  return (
    <div
      className={`flex items-center ${
        isOpenAside.mouseEnter || isOpenAside.opened ? 'gap-2' : ''
      }`}
    >
      {icon}

      <p
        className={`text-[#16171d] font-bold transition-all duration-500 overflow-hidden
            ${
              isOpenAside.mouseEnter ||
              isOpenAside.mouseOver ||
              isOpenAside.opened
                ? 'w-auto max-w-[200px]'
                : 'w-0 max-w-0'
            } 
            ${
              isOpenAside.mouseEnter ||
              isOpenAside.mouseOver ||
              isOpenAside.opened
                ? 'opacity-100'
                : 'opacity-0'
            }`}
      >
        {children}
      </p>
    </div>
  );
};

export default IconAsideHeader;
