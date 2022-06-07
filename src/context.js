import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [currentPage, setCurrentPage] = useState({ page: '', links: [] });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setLocation(coordinates);
    setCurrentPage(page);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => setIsSubmenuOpen(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        currentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
