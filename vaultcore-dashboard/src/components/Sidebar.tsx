import React, { useState } from 'react';
import { useSidebar } from '../context/SidebarContext';
import './Sidebar.css';

const Sidebar = () => {
    const { sidebarOpen, setSidebarOpen } = useSidebar();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
            />
            <div className={`sidebar-container ${sidebarOpen ? '' : 'closed'}`}>

                <div className="titulo-sidebar">
                    <h1 className="logo text-2xl">VaultCore</h1>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                        <i
                            className={`fas fa-${sidebarOpen ? 'times' : 'bars'} text-white`}
                            onClick={toggleSidebar}
                        />
                    </div>
                </div>
                <nav className="flex-1">
                    <div className="mb-2 text-sm font-medium text-gray-400 uppercase">
                        Principal
                    </div>
                    <a
                        href="#"
                        className="nav-item active block px-4 py-3 rounded mb-1 flex items-center"
                    >
                        <i className="fas fa-tachometer-alt w-5" />
                        <span className="ml-3">Dashboard</span>
                    </a>
                    <a
                        href="#"
                        className="nav-item block px-4 py-3 rounded mb-1 flex items-center"
                    >
                        <i className="fas fa-video w-5" />
                        <span className="ml-3">Cámaras</span>
                    </a>
                    <a
                        href="#"
                        className="nav-item block px-4 py-3 rounded mb-1 flex items-center"
                    >
                        <i className="fas fa-user-shield w-5" />
                        <span className="ml-3">Guardias</span>
                    </a>
                    <div className="mt-6 mb-2 text-sm font-medium text-gray-400 uppercase">
                        Sistema
                    </div>
                    <a
                        href="#"
                        className="nav-item block px-4 py-3 rounded mb-1 flex items-center"
                    >
                        <i className="fas fa-cog w-5" />
                        <span className="ml-3">Configuración</span>
                    </a>
                    <a
                        href="#"
                        className="nav-item block px-4 py-3 rounded mb-1 flex items-center"
                    >
                        <i className="fas fa-file-alt w-5" />
                        <span className="ml-3">Reportes</span>
                    </a>
                </nav>
                <div className="mt-auto">
                    <div className="border-t border-gray-700 pt-4">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <span className="font-bold text-xs">OP</span>
                            </div>
                            <div className="ml-3">
                                <p className="font-medium">Operador</p>
                                <p className="text-xs text-gray-400">Turno activo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

};
export default Sidebar;
