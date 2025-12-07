/**
 * Convenio Colectivo del Sector Industria, Servicios e Instalaciones del Metal
 * de la Comunidad de Madrid (2024-2026)
 *
 * Source: BOCM-20250118-1 (Boletín Oficial de la Comunidad de Madrid)
 *
 * Incrementos:
 * - 2024: +3% sobre tablas 2023
 * - 2025: +3% sobre tablas 2024
 * - 2026: +2% sobre tablas 2025
 *
 * Cláusula de revisión:
 * - Si IPC > incremento pactado: actualización de la diferencia
 * - Tope máximo 4% en 2024 y 2025
 *
 * Ámbito: Comunidad de Madrid
 * Vigencia: 1 enero 2024 - 31 diciembre 2026
 */

const ConvenioMetalMadrid = {
    name: 'Metal Madrid',
    code: 'metal-madrid',
    edition: 'Convenio 2024-2026',
    year: 2024,
    source: 'BOCM-20250118-1',
    boeReference: 'Convenio Colectivo del Sector Industria, Servicios e Instalaciones del Metal de la Comunidad de Madrid',

    /**
     * Professional Groups (Grupos Profesionales)
     * Based on functional description from the convenio
     */
    groups: {
        '1': {
            name: 'Grupo 1 - Licenciados/as y Grados',
            description: 'Titulados universitarios superiores que ejercen funciones propias de su titulación'
        },
        '2': {
            name: 'Grupo 2 - Técnicos/as',
            description: 'Técnicos con formación específica que realizan funciones técnicas complejas'
        },
        '3': {
            name: 'Grupo 3 - Técnicos/as Auxiliares',
            description: 'Técnicos auxiliares con funciones de apoyo técnico cualificado'
        },
        '4': {
            name: 'Grupo 4 - Empleados/as',
            description: 'Personal administrativo y de gestión con tareas de responsabilidad media'
        },
        '5': {
            name: 'Grupo 5 - Operarios/as',
            description: 'Personal de producción cualificado con experiencia'
        },
        '6': {
            name: 'Grupo 6 - Empleados/as Auxiliares',
            description: 'Personal administrativo y de servicios con tareas de apoyo'
        },
        '7': {
            name: 'Grupo 7 - Operarios/as Auxiliares',
            description: 'Personal de producción con tareas básicas y de apoyo'
        }
    },

    /**
     * Categories within each group
     */
    categories: {
        'grupo_1': { group: '1', name: 'Licenciada/o - Grado', level: 1 },
        'grupo_2': { group: '2', name: 'Técnico/a', level: 2 },
        'grupo_3': { group: '3', name: 'Técnica/o Auxiliar', level: 3 },
        'grupo_4': { group: '4', name: 'Empleado/a', level: 4 },
        'grupo_5': { group: '5', name: 'Operaria/o', level: 5 },
        'grupo_6': { group: '6', name: 'Empleado/a Auxiliar', level: 6 },
        'grupo_7': { group: '7', name: 'Operaria/o Auxiliar', level: 7 }
    },

    /**
     * Salary tables by year
     * All amounts are annual gross salary (14 payments)
     *
     * 2024: Base from BOCM tables
     * 2025: +3% sobre 2024
     * 2026: +2% sobre 2025
     */
    salaryTables: {
        2024: {
            grupo_1: 33675.00,
            grupo_2: 28260.02,
            grupo_3: 25479.52,
            grupo_4: 22778.08,
            grupo_5: 21191.40,
            grupo_6: 20969.71,
            grupo_7: 19691.10
        },
        2025: {
            grupo_1: 34685.25,  // 33675.00 * 1.03
            grupo_2: 29107.82,  // 28260.02 * 1.03
            grupo_3: 26243.90,  // 25479.52 * 1.03
            grupo_4: 23461.42,  // 22778.08 * 1.03
            grupo_5: 21827.14,  // 21191.40 * 1.03
            grupo_6: 21598.80,  // 20969.71 * 1.03
            grupo_7: 20281.83   // 19691.10 * 1.03
        },
        2026: {
            grupo_1: 35378.96,  // 34685.25 * 1.02
            grupo_2: 29689.98,  // 29107.82 * 1.02
            grupo_3: 26768.78,  // 26243.90 * 1.02
            grupo_4: 23930.65,  // 23461.42 * 1.02
            grupo_5: 22263.68,  // 21827.14 * 1.02
            grupo_6: 22030.78,  // 21598.80 * 1.02
            grupo_7: 20687.47   // 20281.83 * 1.02
        }
    },

    /**
     * Quinquenio values by group (5-year seniority bonus)
     * Monthly amounts from BOCM table
     */
    quinquenios: {
        2024: {
            grupo_1: 40.66,
            grupo_2: 37.01,
            grupo_3: 34.06,
            grupo_4: 31.77,
            grupo_5: 30.37,
            grupo_6: 29.69,
            grupo_7: 29.34
        }
    },

    /**
     * Complements base for calculating night shift and other bonuses
     * Monthly/daily amounts
     */
    complementsBase: {
        2024: {
            grupo_1: 1076.38,
            grupo_2: 953.89,
            grupo_3: 869.79,
            grupo_4: 800.71,
            grupo_5: 25.18,   // Daily rate
            grupo_6: 744.06,
            grupo_7: 24.06    // Daily rate
        }
    },

    /**
     * Number of payments per year
     */
    numPayments: 14,

    /**
     * Get salary for specific category and year
     * @param {string} category - Category code (grupo_1, grupo_2, etc.)
     * @param {number} year - 2024, 2025, or 2026
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
        'grupo_1': {
            title: 'Licenciado/a - Grado',
            responsibilities: 'Dirección técnica de proyectos, ingeniería de procesos, diseño de instalaciones industriales, gestión de calidad, I+D, supervisión técnica avanzada',
            experience: '5+ años + Grado/Licenciatura universitaria',
            equivalentTitles: ['Ingeniero/a Industrial', 'Ingeniero/a Mecánico', 'Director/a Técnico', 'Jefe/a de Proyectos', 'Responsable de I+D', 'Quality Manager', 'Industrial Engineer']
        },
        'grupo_2': {
            title: 'Técnico/a',
            responsibilities: 'Diseño técnico, programación CNC, planificación de producción, gestión de mantenimiento, supervisión de equipos, control de calidad',
            experience: '3-5 años + FP Superior / Grado Medio',
            equivalentTitles: ['Técnico/a de Producción', 'Programador/a CNC', 'Técnico/a de Calidad', 'Jefe/a de Taller', 'Supervisor/a de Producción', 'Técnico/a de Mantenimiento', 'Production Technician']
        },
        'grupo_3': {
            title: 'Técnica/o Auxiliar',
            responsibilities: 'Apoyo técnico en producción, mantenimiento preventivo, control de procesos, documentación técnica, soporte a ingeniería',
            experience: '2-3 años + FP Medio',
            equivalentTitles: ['Técnico/a Auxiliar', 'Ayudante de Taller', 'Auxiliar de Mantenimiento', 'Técnico/a Junior', 'Assistant Technician', 'Delineante']
        },
        'grupo_4': {
            title: 'Empleado/a',
            responsibilities: 'Gestión administrativa, contabilidad, recursos humanos, compras, logística, atención a clientes y proveedores',
            experience: '2-4 años',
            equivalentTitles: ['Administrativo/a', 'Contable', 'Técnico/a de RRHH', 'Responsable de Compras', 'Gestor/a de Logística', 'Office Manager', 'Administrative']
        },
        'grupo_5': {
            title: 'Operario/a',
            responsibilities: 'Operación de maquinaria industrial, soldadura, montaje, mecanizado, fabricación, control de calidad de producto',
            experience: '2-4 años',
            equivalentTitles: ['Operario/a Especialista', 'Soldador/a', 'Tornero/a', 'Fresador/a', 'Montador/a Industrial', 'Operador/a de Maquinaria', 'Machine Operator', 'Welder']
        },
        'grupo_6': {
            title: 'Empleado/a Auxiliar',
            responsibilities: 'Tareas administrativas básicas, archivo, recepción, gestión documental, apoyo a departamentos, atención telefónica',
            experience: '0-2 años',
            equivalentTitles: ['Auxiliar Administrativo/a', 'Recepcionista', 'Auxiliar de Oficina', 'Administrative Assistant', 'Office Assistant', 'Auxiliar Contable']
        },
        'grupo_7': {
            title: 'Operario/a Auxiliar',
            responsibilities: 'Tareas básicas de producción, carga y descarga, limpieza industrial, apoyo en montaje, almacén, embalaje',
            experience: '0-1 año',
            equivalentTitles: ['Peón Industrial', 'Mozo/a de Almacén', 'Operario/a de Producción', 'Ayudante de Fabricación', 'Warehouse Operator', 'Production Helper', 'Embalador/a']
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
     * Market rates for metal industry roles in Madrid (orientative)
     * Based on market data from Indeed, InfoJobs, Glassdoor (2024-2025)
     */
    marketRates: {
        roles: {
            'grupo_1': { min: 35000, max: 55000, roles: ['Ingeniero Industrial', 'Director Técnico', 'Jefe de Proyectos'] },
            'grupo_2': { min: 28000, max: 40000, roles: ['Técnico de Producción', 'Programador CNC', 'Jefe de Taller'] },
            'grupo_3': { min: 24000, max: 32000, roles: ['Técnico Auxiliar', 'Delineante', 'Auxiliar de Mantenimiento'] },
            'grupo_4': { min: 22000, max: 30000, roles: ['Administrativo', 'Contable', 'Técnico RRHH'] },
            'grupo_5': { min: 21000, max: 30000, roles: ['Soldador', 'Tornero', 'Operario Especialista'] },
            'grupo_6': { min: 18000, max: 23000, roles: ['Auxiliar Administrativo', 'Recepcionista'] },
            'grupo_7': { min: 17000, max: 21000, roles: ['Peón Industrial', 'Mozo de Almacén', 'Operario de Producción'] }
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
    window.ConvenioMetalMadrid = ConvenioMetalMadrid;
}
