'use client';
import { FC, useState } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import IconAsideHeader from '../support/icon/IconAsideHeader';
export interface IOpenState {
  closed: boolean;
  mouseEnter: boolean;
  mouseOver: boolean;
  opened: boolean;
}

const Aside: FC = () => {
  const [isOpenAside, setIsOpenAside] = useState<IOpenState>({
    closed: true,
    mouseEnter: false,
    mouseOver: false,
    opened: false,
  });

  const handleMouseEnter = () => {
    setIsOpenAside((prev) => ({ ...prev, mouseEnter: true }));
  };

  const handleMouseOver = () => {
    setIsOpenAside((prev) => ({ ...prev, mouseOver: true }));
  };

  const handleMouseLeave = () => {
    if (!isOpenAside.opened) {
      setIsOpenAside((prev) => ({
        ...prev,
        mouseEnter: false,
        mouseOver: false,
      }));
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenAside((prev) => ({
      ...prev,
      opened: !prev.opened,
      mouseEnter: false,
      mouseOver: false,
    }));
  };

  return (
    <aside
      className={`fixed min-h-full bg-[rgba(0,0,0,0.5)] right-0 rounded-l-3xl
                transition-all duration-300 ease-in-out
                ${isOpenAside.opened ? 'w-screen' : 'w-16'}
                ${
                  (isOpenAside.mouseEnter || isOpenAside.mouseOver) &&
                  !isOpenAside.opened
                    ? 'w-24'
                    : ''
                }`}
      onMouseEnter={handleMouseEnter}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <header
        className={`fixed min-h-full right-0 rounded-l-[1.75rem] bg-slate-100
                    transition-all duration-300 ease-in-out flex flex-col items-center justify-center
                    ${isOpenAside.opened ? 'w-72' : 'w-12'}
                    ${
                      isOpenAside.mouseEnter ||
                      isOpenAside.mouseOver ||
                      isOpenAside.opened
                        ? 'w-20'
                        : ''
                    }`}
        onClick={handleClick}
      >
        <IconAsideHeader
          isOpenAside={isOpenAside}
          icon={
            <FaUserAstronaut
              size={24}
              color="#16171d"
              className="cursor-pointer"
            />
          }
        >
          user
        </IconAsideHeader>
      </header>
    </aside>
  );
};

export default Aside;
