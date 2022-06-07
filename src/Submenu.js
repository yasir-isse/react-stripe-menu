import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { isSubmenuOpen, location, currentPage } = useGlobalContext();
  const submenuClass = `${isSubmenuOpen ? 'submenu show' : 'submenu'}`;
  const [columns, setColumns] = useState('col-2');

  const container = useRef();
  const { page, links } = currentPage;

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { centerPosition, bottomPosition } = location;
    submenu.style.left = `${centerPosition}px`;
    submenu.style.top = `${bottomPosition}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length === 4) {
      setColumns('col-4');
    }
  }, [location, links]);

  return (
    <aside className={submenuClass} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
