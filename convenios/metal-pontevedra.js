/**
 * Convenio Colectivo de Trabajo para las Empresas del Metal sin Convenio Propio
 * de la Provincia de Pontevedra (2023-2025)
 *
 * Source: BOP Pontevedra - Expediente 36/01/0036/2024
 *         Xunta de Galicia - Consellería de Emprego e Igualdade
 *
 * Incrementos:
 * - 2023: Actualización IPC (3.1% -> 0.1% adicional)
 * - 2024: +3% sobre 2023 actualizado
 * - 2025: +3% sobre 2024 (pendiente publicación)
 *
 * Ámbito: Provincia de Pontevedra (Galicia)
 * Vigencia: 2023-2025
 */

const ConvenioMetalPontevedra = {
    name: 'Metal Pontevedra',
    code: 'metal-pontevedra',
    edition: 'Convenio 2023-2025',
    year: 2023,
    source: 'BOP Pontevedra 36/01/0036/2024',
    boeReference: 'Convenio Colectivo de Trabajo para las Empresas del Metal sin Convenio Propio de Pontevedra',

    /**
     * Professional Groups (Grupos Profesionales)
     */
    groups: {
        '1': {
            name: 'Grupo 1 - Ingenieros y Licenciados',
            description: 'Titulados universitarios superiores con funciones de alta dirección técnica'
        },
        '2': {
            name: 'Grupo 2 - Peritos y Técnicos',
            description: 'Peritos, ingenieros técnicos y jefes de departamento'
        },
        '3': {
            name: 'Grupo 3 - Jefaturas de 2ª y Delineantes',
            description: 'Delineantes proyectistas, jefes de organización y graduados sociales'
        },
        '4': {
            name: 'Grupo 4 - Encargados y Técnicos',
            description: 'Encargados, analistas, técnicos de organización y oficiales administrativos'
        },
        '5': {
            name: 'Grupo 5 - Oficiales de Taller',
            description: 'Oficiales de taller, delineantes y analistas de segunda'
        },
        '6': {
            name: 'Grupo 6 - Oficiales y Especialistas',
            description: 'Oficiales de tercera, especialistas, almaceneros y auxiliares'
        },
        '7': {
            name: 'Grupo 7 - Peones y Personal de Base',
            description: 'Peones, vigilantes, porteros y ordenanzas'
        }
    },

    /**
     * Categories within each group
     * Structure: Grupo + Nivel (A, B, C)
     */
    categories: {
        'grupo_1A': { group: '1', name: 'Ingenieros y Licenciados', level: '1A' },
        'grupo_2A': { group: '2', name: 'Perito con Responsabilidad / Ing. Técnicos', level: '2A' },
        'grupo_2B': { group: '2', name: 'Jefe 1ª Técnico / Jefe Taller / Jefe Org. 1ª', level: '2B' },
        'grupo_3A': { group: '3', name: 'Delineante Proyectista / Jefe 2ª Org.', level: '3A' },
        'grupo_3B': { group: '3', name: 'Maestros Industriales / Contramaestre', level: '3B' },
        'grupo_4A': { group: '4', name: 'Encargado / Analista 1ª / Oficial 1ª Admin', level: '4A' },
        'grupo_4B': { group: '4', name: 'Viajante / Delineante 1ª / Practicantes', level: '4B' },
        'grupo_5A': { group: '5', name: 'Oficial 1ª y 2ª Taller / Delineante 2ª', level: '5A' },
        'grupo_5B': { group: '5', name: 'Analista 2ª / Chófer Camión / Capataz Esp.', level: '5B' },
        'grupo_6A': { group: '6', name: 'Oficial 3ª / Chófer Turismo / Listero', level: '6A' },
        'grupo_6B': { group: '6', name: 'Especialista / Capataz Peones / Almacenero', level: '6B' },
        'grupo_6C': { group: '6', name: 'Pesador / Aux. Laboratorio / Aux. Admin', level: '6C' },
        'grupo_7A': { group: '7', name: 'Peón / Vigilante / Portero y Ordenanza', level: '7A' }
    },

    /**
     * Salary tables by year
     * All amounts are annual gross salary
     *
     * 2023: Con actualización IPC (from BOP)
     * 2024: +3% sobre 2023 (from BOP)
     * 2025: +3% sobre 2024 (estimated)
     */
    salaryTables: {
        2023: {
            // From BOP - Tabla con actualización salarial 2023
            grupo_1A: 40134.46,
            grupo_2A: 36518.68,
            grupo_2B: 31304.18,
            grupo_3A: 28498.72,
            grupo_3B: 27603.04,
            grupo_4A: 25098.00,
            grupo_4B: 24721.05,
            grupo_5A: 23381.04,
            grupo_5B: 22230.73,
            grupo_6A: 21644.94,
            grupo_6B: 21105.76,
            grupo_6C: 20325.70,
            grupo_7A: 20218.91
        },
        2024: {
            // From BOP - Tabla salarial 2024 (+3%)
            grupo_1A: 41338.49,
            grupo_2A: 37614.24,
            grupo_2B: 32243.31,
            grupo_3A: 29353.69,
            grupo_3B: 28431.13,
            grupo_4A: 25850.94,
            grupo_4B: 25462.68,
            grupo_5A: 24082.47,
            grupo_5B: 22897.65,
            grupo_6A: 22294.29,
            grupo_6B: 21738.94,
            grupo_6C: 20935.47,
            grupo_7A: 20825.48
        },
        2025: {
            // Estimated +3% sobre 2024
            grupo_1A: 42578.64,  // 41338.49 * 1.03
            grupo_2A: 38742.67,  // 37614.24 * 1.03
            grupo_2B: 33210.61,  // 32243.31 * 1.03
            grupo_3A: 30234.30,  // 29353.69 * 1.03
            grupo_3B: 29284.06,  // 28431.13 * 1.03
            grupo_4A: 26626.47,  // 25850.94 * 1.03
            grupo_4B: 26226.56,  // 25462.68 * 1.03
            grupo_5A: 24804.94,  // 24082.47 * 1.03
            grupo_5B: 23584.58,  // 22897.65 * 1.03
            grupo_6A: 22963.12,  // 22294.29 * 1.03
            grupo_6B: 22391.11,  // 21738.94 * 1.03
            grupo_6C: 21563.53,  // 20935.47 * 1.03
            grupo_7A: 21450.24   // 20825.48 * 1.03
        }
    },

    /**
     * Monthly base salary (Salario Base Mensual) - for reference
     */
    monthlySalaryBase: {
        2024: {
            grupo_1A: 2952.75,
            grupo_2A: 2686.73,
            grupo_2B: 2303.09,
            grupo_3A: 2096.69,
            grupo_3B: 2030.80,
            grupo_4A: 1846.50,
            grupo_4B: 1818.76,
            grupo_5A: 1720.18,
            grupo_5B: 1635.55,
            grupo_6A: 1592.45,
            grupo_6B: 1552.78,
            grupo_6C: 1495.39,
            grupo_7A: 1487.53
        }
    },

    /**
     * Complements and allowances
     */
    complements: {
        dietaCompleta: 50.84,      // €/día
        mediaDieta: 17.97,         // €/día
        kilometraje: 0.36,         // €/km vehículo propio
        plusTrabajosEspeciales1: 0.73,  // €/hora (un supuesto)
        plusTrabajosEspeciales2: 1.14   // €/hora (dos o más supuestos)
    },

    /**
     * Number of payments per year (14 pagas)
     */
    numPayments: 14,

    /**
     * Get salary for specific category and year
     * @param {string} category - Category code (grupo_1A, grupo_2B, etc.)
     * @param {number} year - 2023, 2024, or 2025
     * @returns {Object|null} Salary details or null if not found
     */
    getSalary: function(category, year) {
        const yearTable = this.salaryTables[year];
        if (!yearTable) return null;

        const annualSalary = yearTable[category];
        if (!annualSalary) return null;

        const categoryInfo = this.categories[category];
        if (!categoryInfo) return null;

        return {
            monthly: annualSalary / this.numPayments,
            annual: annualSalary,
            total: annualSalary,
            category: category,
            categoryName: categoryInfo.name,
            group: categoryInfo.group,
            groupName: this.groups[categoryInfo.group].name,
            year: year
        };
    },

    /**
     * Get all categories for dropdown
     * @returns {Array} Array of category objects
     */
    getCategories: function() {
        return Object.keys(this.categories).map(key => ({
            value: key,
            label: this.categories[key].name,
            group: this.categories[key].group,
            groupName: this.groups[this.categories[key].group].name
        }));
    },

    /**
     * Position descriptions by category
     * Describes responsibilities and typical job functions in the metal industry
     */
    positionDescriptions: {
        'grupo_1A': {
            title: 'Enxeñeiros e Licenciados',
            responsibilities: 'Dirección técnica de proyectos, ingeniería de procesos, diseño de instalaciones industriales, gestión de calidad, I+D, supervisión técnica avanzada',
            experience: '5+ anos + Grao/Licenciatura universitaria',
            equivalentTitles: ['Enxeñeiro/a Industrial', 'Enxeñeiro/a Mecánico', 'Director/a Técnico', 'Xefe/a de Proxectos', 'Industrial Engineer']
        },
        'grupo_2A': {
            title: 'Perito con Responsabilidade / Enxeñeiros Técnicos',
            responsibilities: 'Supervisión técnica especializada, gestión de departamentos técnicos, diseño y cálculo, control de calidad avanzado',
            experience: '4-6 anos + Enxeñaría Técnica',
            equivalentTitles: ['Perito Industrial', 'Enxeñeiro/a Técnico', 'Responsable Técnico', 'Technical Manager']
        },
        'grupo_2B': {
            title: 'Xefe de Taller / Xefe 1ª Técnico / Xefe Organización',
            responsibilities: 'Dirección de taller, laboratorio u organización, coordinación de equipos, planificación de producción, control de calidad',
            experience: '5-8 anos',
            equivalentTitles: ['Xefe de Taller', 'Xefe de Laboratorio', 'Xefe de Organización', 'Workshop Manager', 'Lab Manager']
        },
        'grupo_3A': {
            title: 'Delineante Proxectista / Xefe 2ª Organización',
            responsibilities: 'Diseño técnico de proyectos, delineación de planos complejos, organización de procesos, graduados sociales',
            experience: '3-5 anos',
            equivalentTitles: ['Delineante Proxectista', 'Xefe de 2ª', 'Graduado Social', 'Design Engineer', 'HR Specialist']
        },
        'grupo_3B': {
            title: 'Mestres Industriais / Contramaestre',
            responsibilities: 'Supervisión directa de producción, control de calidad en planta, formación de personal, resolución de incidencias técnicas',
            experience: '4-6 anos',
            equivalentTitles: ['Mestre de Taller', 'Contramaestre', 'Mestre Industrial', 'Foreman', 'Production Supervisor']
        },
        'grupo_4A': {
            title: 'Encargado / Analista 1ª / Oficial 1ª Administrativo',
            responsibilities: 'Supervisión de secciones, análisis de datos, gestión administrativa avanzada, técnico de organización',
            experience: '3-5 anos',
            equivalentTitles: ['Encargado/a', 'Analista', 'Oficial 1ª Administrativo', 'Delineante 1ª', 'Section Leader']
        },
        'grupo_4B': {
            title: 'Viaxante / Delineante 1ª / Practicantes',
            responsibilities: 'Gestión comercial y visitas a clientes, delineación técnica, asistencia sanitaria laboral',
            experience: '2-4 anos',
            equivalentTitles: ['Viaxante', 'Comercial', 'Delineante', 'Practicante', 'Sales Representative']
        },
        'grupo_5A': {
            title: 'Oficial 1ª e 2ª Taller / Delineante 2ª',
            responsibilities: 'Trabajos cualificados de taller, soldadura, mecanizado, delineación técnica, técnico de organización',
            experience: '2-4 anos',
            equivalentTitles: ['Oficial de Taller', 'Soldador/a Oficial', 'Torneiro/a', 'Delineante 2ª', 'Skilled Worker']
        },
        'grupo_5B': {
            title: 'Analista 2ª / Chófer Camión / Capataz Especialistas',
            responsibilities: 'Análisis de datos, conducción de vehículos pesados, supervisión de especialistas',
            experience: '2-3 anos',
            equivalentTitles: ['Analista 2ª', 'Chófer de Camión', 'Capataz', 'Truck Driver', 'Team Lead']
        },
        'grupo_6A': {
            title: 'Oficial 3ª / Chófer Turismo / Listeiro',
            responsibilities: 'Trabajos de taller de nivel inicial, conducción de vehículos ligeros, control de listas y registro',
            experience: '1-2 anos',
            equivalentTitles: ['Oficial 3ª', 'Chófer', 'Listeiro', 'Driver', 'Junior Worker']
        },
        'grupo_6B': {
            title: 'Especialista / Capataz Peóns / Almaceneiro',
            responsibilities: 'Trabajos especializados, supervisión de peones, gestión de almacén y stock',
            experience: '1-2 anos',
            equivalentTitles: ['Especialista', 'Capataz', 'Almaceneiro/a', 'Warehouse Clerk', 'Specialist']
        },
        'grupo_6C': {
            title: 'Pesador / Auxiliar Laboratorio / Auxiliar Administrativo',
            responsibilities: 'Pesaje y control, auxiliar de laboratorio, tareas administrativas básicas, auxiliar de organización',
            experience: '0-1 ano',
            equivalentTitles: ['Pesador/a', 'Auxiliar de Laboratorio', 'Auxiliar Administrativo/a', 'Lab Assistant', 'Admin Assistant']
        },
        'grupo_7A': {
            title: 'Peón / Vixilante / Porteiro e Ordenanza',
            responsibilities: 'Tareas básicas de producción, vigilancia, conserjería, carga y descarga, limpieza industrial',
            experience: '0 anos',
            equivalentTitles: ['Peón Industrial', 'Vixilante', 'Porteiro/a', 'Ordenanza', 'Production Helper', 'Security Guard']
        }
    },

    /**
     * Get position description for a specific category
     * @param {string} category - Category code
     * @returns {Object|null} - Position description or null
     */
    getPositionDescription: function(category) {
        return this.positionDescriptions[category] || null;
    },

    /**
     * Market rates for metal industry roles in Galicia (orientative)
     * Based on market data from Indeed, InfoJobs, Glassdoor (2024-2025)
     */
    marketRates: {
        roles: {
            'grupo_1A': { min: 38000, max: 55000, roles: ['Enxeñeiro Industrial', 'Director Técnico'] },
            'grupo_2A': { min: 32000, max: 45000, roles: ['Perito Industrial', 'Enxeñeiro Técnico'] },
            'grupo_2B': { min: 28000, max: 40000, roles: ['Xefe de Taller', 'Xefe de Laboratorio'] },
            'grupo_3A': { min: 26000, max: 36000, roles: ['Delineante Proxectista', 'Graduado Social'] },
            'grupo_3B': { min: 25000, max: 35000, roles: ['Mestre de Taller', 'Contramaestre'] },
            'grupo_4A': { min: 23000, max: 32000, roles: ['Encargado', 'Analista', 'Oficial 1ª Admin'] },
            'grupo_4B': { min: 22000, max: 30000, roles: ['Comercial', 'Viaxante', 'Delineante'] },
            'grupo_5A': { min: 21000, max: 30000, roles: ['Oficial de Taller', 'Soldador', 'Torneiro'] },
            'grupo_5B': { min: 20000, max: 28000, roles: ['Chófer Camión', 'Capataz'] },
            'grupo_6A': { min: 19000, max: 25000, roles: ['Oficial 3ª', 'Chófer'] },
            'grupo_6B': { min: 18000, max: 24000, roles: ['Especialista', 'Almaceneiro'] },
            'grupo_6C': { min: 17000, max: 22000, roles: ['Auxiliar Administrativo', 'Auxiliar Laboratorio'] },
            'grupo_7A': { min: 16500, max: 21000, roles: ['Peón', 'Vixilante', 'Ordenanza'] }
        },

        /**
         * Get market rate for a category
         */
        getMarketRateForCategory: function(category) {
            const rate = this.roles[category];
            if (!rate) return null;

            return {
                roles: rate.roles,
                marketRange: {
                    min: rate.min,
                    max: rate.max
                }
            };
        }
    }
};

// Export for use in browser
if (typeof window !== 'undefined') {
    window.ConvenioMetalPontevedra = ConvenioMetalPontevedra;
}
