import { useEffect, useState } from 'react';
import './header.css';

interface TopBarProps {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

export default function Header({ sidebarOpen, toggleSidebar }: TopBarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => setCurrentDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatDateTime = (date: Date) =>
        date.toLocaleDateString('es-ES', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }) +
        ' | ' +
        date.toLocaleTimeString('es-ES', { hour12: false });

    console.log("", sidebarOpen);
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
            <div className={`top-bar ${sidebarOpen ? "sidebar-open" : ""}`}>
                <div className="page-title" >
                    <button
                        className={`sidebar-toggle-btn ${sidebarOpen ? "fade-out" : "fade-in"}`}
                        onClick={toggleSidebar}
                        style={{ position: 'static', marginLeft: 0, zIndex: 1001, opacity: sidebarOpen ? 0 : 1, transition: 'opacity 0.5s ease' }}
                    >
                        <i className="fas fa-bars" />
                    </button>
                </div>
                <div className="top-bar-actions">
                    <div className="date-time">{formatDateTime(currentDate)}</div>
                    <div className="action-item">
                        <div className="action-button">
                            <i className="fas fa-bell" />
                            <div className="notification-badge">5</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}