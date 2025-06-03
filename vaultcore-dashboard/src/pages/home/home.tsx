import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import './home.css'

const home = () => {

    useEffect(() => {
        const ctx = document.getElementById('guardChart') as HTMLCanvasElement;
        if (!ctx) return;

        const myChart = new Chart(ctx, {
            type: 'doughnut', // o 'bar', 'line', etc.
            data: {
                labels: ['En ruta', 'Fuera de ruta'],
                datasets: [
                    {
                        data: [3, 1],
                        backgroundColor: ['#10b981', '#f59e0b'],
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' },
                },
            },
        });
        return () => {
            myChart.destroy();
        };
    }, []);

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

            <div className="slide">
                {/* Home Content */}
                <div className="main-content">
                    {/* Stats Overview */}
                    <div className="stats-overview">
                        {/* Evento */}
                        <div className="card">
                            <div className="card-header">
                                <div className="header-title">Eventos hoy</div>
                                <div className="header-icon">
                                    <i className="fas fa-bell text-blue-500" />
                                </div>
                            </div>
                            <div className="card-number">24</div>
                            <div className="card-change up">
                                <i className="fas fa-arrow-up" />
                                12% vs. ayer
                            </div>
                        </div>

                        {/* Cámaras */}
                        <div className="card">
                            <div className="card-header">
                                <div className="header-title">Cámaras activas</div>
                                <div className="header-icon green">
                                    <i className="fas fa-video" />
                                </div>
                            </div>
                            <div className="card-number">16/18</div>
                            <div className="card-change down">
                                <i className="fas fa-exclamation-triangle" />
                                2 desconectadas
                            </div>
                        </div>

                        {/* Guardias */}
                        <div className="card">
                            <div className="card-header">
                                <div className="header-title">Guardias en ruta</div>
                                <div className="header-icon purple">
                                    <i className="fas fa-user-shield" />
                                </div>
                            </div>
                            <div className="card-number">4</div>
                            <div className="card-change ok">
                                <i className="fas fa-check-circle" />
                                Todos en posición
                            </div>
                        </div>

                        {/* Alertas */}
                        <div className="card">
                            <div className="card-header">
                                <div className="header-title">Alertas activas</div>
                                <div className="header-icon red">
                                    <i className="fas fa-exclamation-circle" />
                                </div>
                            </div>
                            <div className="card-number">2</div>
                            <div className="card-change warn">
                                <i className="fas fa-clock" />
                                1 requiere atención
                            </div>
                        </div>
                        {/* Cámaras principales */}
                        <div className="card col-span-2">
                            <div className="card-header-space">
                                <h3 className="font-semibold text-lg">
                                    Vista de Cámaras Principales
                                </h3>
                                <a href="#" className="text-blue-500 hover:text-blue-400 text-sm">
                                    Ver todas
                                </a>
                            </div>
                            <div className="camera-grid">
                                <div className="camera-feed h-36 rounded">
                                    <div className="absolute top-2 left-2 flex items-center">
                                        <div className="bg-green-500 h-2 w-2 rounded-full mr-2" />
                                        <span className="text-xs font-medium">Entrada Principal</span>
                                    </div>
                                </div>
                                <div className="camera-feed h-36 rounded">
                                    <div className="absolute top-2 left-2 flex items-center">
                                        <div className="bg-green-500 h-2 w-2 rounded-full mr-2" />
                                        <span className="text-xs font-medium">Estacionamiento</span>
                                    </div>
                                </div>
                                <div className="camera-feed h-36 rounded">
                                    <div className="absolute top-2 left-2 flex items-center">
                                        <div className="bg-green-500 h-2 w-2 rounded-full mr-2" />
                                        <span className="text-xs font-medium">Bodega</span>
                                    </div>
                                </div>
                                <div className="camera-feed h-36 rounded">
                                    <div className="absolute top-2 left-2 flex items-center">
                                        <div className="bg-red-500 h-2 w-2 rounded-full mr-2" />
                                        <span className="text-xs font-medium">Pasillo Principal</span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                        <span className="text-red-500 font-bold">ALERTA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Eventos Recientes*/}
                        <div className="card col-span-2 events-container">
                            <div className="card-header-space">
                                <h3 className="font-semibold text-lg">Eventos Recientes</h3>
                                <a href="#" className="text-blue-500 hover:text-blue-400 text-sm">
                                    Ver todos
                                </a>
                            </div>
                            <div className="events-list">
                                <div className="event-high bg-red-500/10 p-3 rounded w-full">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium text-red-400">
                                                Movimiento detectado
                                            </h4>
                                            <p className="text-sm text-gray-400">Pasillo Principal</p>
                                        </div>
                                        <span className="text-xs text-gray-400">14:25</span>
                                    </div>
                                    <div className="mt-2 flex">
                                        <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2">
                                            <i className="fas fa-eye mr-1" /> Ver
                                        </button>
                                        <button className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
                                            <i className="fas fa-check mr-1" /> Resolver
                                        </button>
                                    </div>
                                </div>
                                <div className="event-high bg-red-500/10 p-3 rounded">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium text-red-400">
                                                Cámara desconectada
                                            </h4>
                                            <p className="text-sm text-gray-400">Salida Emergencia</p>
                                        </div>
                                        <span className="text-xs text-gray-400">14:10</span>
                                    </div>
                                </div>
                                <div className="event-medium bg-yellow-500/10 p-3 rounded">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium text-yellow-500">
                                                Guardia fuera de ruta
                                            </h4>
                                            <p className="text-sm text-gray-400">Sector A3</p>
                                        </div>
                                        <span className="text-xs text-gray-400">13:45</span>
                                    </div>
                                </div>
                                <div className="event-low bg-green-500/10 p-3 rounded">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium text-green-500">
                                                Ronda completada
                                            </h4>
                                            <p className="text-sm text-gray-400">Sector B2</p>
                                        </div>
                                        <span className="text-xs text-gray-400">13:30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Monitoreo de Guardias */}
                    <div className="card monitoring-guardias">
                        <div className="card-header-space">
                            <h3>Monitoreo de Guardias</h3>
                            <a href="#">Ver detalles</a>
                        </div>
                        <div className="monitoring-grid">
                            <div className="chart-container">
                                <canvas id="guardChart" />
                            </div>
                            <div className="guardias-grid">
                                <div className="guard-card">
                                    <div className="guard-header">
                                        <div className="guard-avatar">JR</div>
                                        <div>
                                            <p className="guard-name">Juan Rodríguez</p>
                                            <p className="guard-sector">Sector A</p>
                                        </div>
                                    </div>
                                    <div className="guard-status">
                                        <div className="status ok">
                                            <i className="fas fa-check-circle" /> En ruta
                                        </div>
                                        <div className="status-time">13:45 - 21:45</div>
                                    </div>
                                </div>
                                <div className="guard-card">
                                    <div className="guard-header">
                                        <div className="guard-avatar">MS</div>
                                        <div>
                                            <p className="guard-name">María Salazar</p>
                                            <p className="guard-sector">Sector B</p>
                                        </div>
                                    </div>
                                    <div className="guard-status">
                                        <div className="status ok">
                                            <i className="fas fa-check-circle" /> En ruta
                                        </div>
                                        <div className="status-time">13:45 - 21:45</div>
                                    </div>
                                </div>
                                <div className="guard-card">
                                    <div className="guard-header">
                                        <div className="guard-avatar">PL</div>
                                        <div>
                                            <p className="guard-name">Pedro López</p>
                                            <p className="guard-sector">Sector C</p>
                                        </div>
                                    </div>
                                    <div className="guard-status">
                                        <div className="status warn">
                                            <i className="fas fa-exclamation-circle" /> Fuera de ruta
                                        </div>
                                        <div className="status-time">13:45 - 21:45</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default home;
