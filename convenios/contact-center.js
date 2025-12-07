/**
 * III Convenio Colectivo Estatal del Sector de Contact Center (2020-2026)
 * (Antes Telemarketing)
 *
 * Source: BOE-A-2023-13741 (III Convenio original, 09/06/2023)
 *         BOE-A-2025-8781 (Tablas salariales 2025)
 *
 * Incrementos:
 * - 2020: 0%
 * - 2021: 0%
 * - 2022: +3.5%
 * - 2023: +3.5%
 * - 2024: +3%
 * - 2025: IPC anterior (mín 1%, máx 3.5%) - aplicado 3.22%
 * - 2026: IPC anterior + 0.5% (mín 1%, máx 3.5%)
 *
 * Ámbito: Nacional (todo el territorio español)
 * Trabajadores afectados: ~110,000
 */

const ConvenioContactCenter = {
    name: 'Contact Center (Telemarketing)',
    code: 'contact-center',
    edition: 'III Convenio',
    year: 2023,
    source: 'BOE-A-2023-13741',
    boeReference: 'III Convenio colectivo de ámbito estatal del sector de contact center 2020-2026',

    /**
     * Professional Groups (Grupos Profesionales)
     */
    groups: {
        'A': {
            name: 'Grupo A - Dirección y Mandos Superiores',
            description: 'Funciones directivas, ejecutivas, coordinadoras o asesoras con autonomía y responsabilidad',
            levels: [1, 2]
        },
        'B': {
            name: 'Grupo B - Personal Técnico Titulado',
            description: 'Personal con cualificación profesional especializada',
            levels: [3, 4, 5]
        },
        'C': {
            name: 'Grupo C - Personal Técnico Informático',
            description: 'Funciones de sistemas y desarrollos informáticos',
            levels: [4, 5, 6]
        },
        'D': {
            name: 'Grupo D - Administración y Operaciones',
            description: 'Personal administrativo y de operación de contact center',
            levels: [6, 7, 8, 9, 10]
        },
        'E': {
            name: 'Grupo E - Servicios Generales',
            description: 'Personal sin cualificación profesional específica (conserjes, ordenanzas, limpieza)',
            levels: [10]
        }
    },

    /**
     * Professional Levels with descriptions
     * Note: Levels 11 and 12 were eliminated on 01/01/2024, merged into Level 10
     */
    levels: {
        1: {
            name: 'Nivel 1 - Dirección',
            description: 'Director/a General, Director/a de Área',
            group: 'A',
            roles: ['Director General', 'Director de Operaciones', 'Director Comercial']
        },
        2: {
            name: 'Nivel 2 - Jefatura Superior',
            description: 'Jefe/a de Área, Jefe/a de Departamento',
            group: 'A',
            roles: ['Jefe de Área', 'Jefe de Departamento', 'Responsable de Cuenta']
        },
        3: {
            name: 'Nivel 3 - Jefatura Técnica',
            description: 'Analista Funcional, Jefe/a de Proyecto',
            group: 'B',
            roles: ['Analista Funcional', 'Jefe de Proyecto', 'Responsable Técnico']
        },
        4: {
            name: 'Nivel 4 - Técnico Superior',
            description: 'Analista, Titulado/a Superior, Técnico/a de Sistemas A',
            group: 'B',
            roles: ['Analista', 'Titulado Superior', 'Técnico de Sistemas Senior']
        },
        5: {
            name: 'Nivel 5 - Técnico Medio',
            description: 'Titulado/a Medio, Técnico/a de Sistemas B, Analista Programador, Programador Senior',
            group: 'B',
            roles: ['Titulado Medio', 'Analista Programador', 'Programador Senior']
        },
        6: {
            name: 'Nivel 6 - Técnico Operativo',
            description: 'Programador Junior, Supervisor/a, Formador/a',
            group: 'D',
            roles: ['Programador Junior', 'Supervisor', 'Formador', 'Quality Analyst']
        },
        7: {
            name: 'Nivel 7 - Coordinación',
            description: 'Coordinador/a, Ayudante de Sistemas',
            group: 'D',
            roles: ['Coordinador', 'Ayudante de Sistemas', 'Team Leader']
        },
        8: {
            name: 'Nivel 8 - Gestor Especializado',
            description: 'Gestor/a Telefónico/a Especialista, Teleoperador/a Especialista',
            group: 'D',
            roles: ['Gestor Telefónico', 'Teleoperador Especialista', 'Agente Senior']
        },
        9: {
            name: 'Nivel 9 - Administrativo',
            description: 'Auxiliar Administrativo, Oficial Administrativo',
            group: 'D',
            roles: ['Auxiliar Administrativo', 'Oficial Administrativo', 'Back Office']
        },
        10: {
            name: 'Nivel 10 - Teleoperador/a',
            description: 'Teleoperador/a, Operador/a de Contact Center',
            group: 'D',
            roles: ['Teleoperador', 'Operador', 'Agente de Contact Center', 'Customer Service Agent']
        }
    },

    /**
     * Salary tables by year
     * All amounts are annual gross salary (14 payments)
     *
     * Note: 2025 data from BOE-A-2025-8781
     * Earlier years calculated backwards using known increments
     */
    salaryTables: {
        2022: {
            1: 36888.89,
            2: 33429.09,
            3: 28823.09,
            4: 24217.10,
            5: 21339.13,
            6: 18206.38,
            7: 17392.27,
            8: 16524.29,
            9: 15945.84,
            10: 15059.90
        },
        2023: {
            1: 38180.00,
            2: 34600.00,
            3: 29833.00,
            4: 25066.00,
            5: 22084.00,
            6: 18843.00,
            7: 18001.00,
            8: 17102.00,
            9: 16504.00,
            10: 15591.00
        },
        2024: {
            1: 39325.40,
            2: 35638.00,
            3: 30728.00,
            4: 25818.00,
            5: 22746.52,
            6: 19408.29,
            7: 18541.03,
            8: 17615.06,
            9: 16999.12,
            10: 16059.43
        },
        2025: {
            1: 40426.93,
            2: 36636.61,
            3: 31588.90,
            4: 26541.19,
            5: 23384.11,
            6: 19946.60,
            7: 19042.00,
            8: 18092.14,
            9: 17458.94,
            10: 16576.00
        },
        2026: {
            // Estimated with 3% increase (IPC + 0.5%, within 1%-3.5% range)
            1: 41639.74,
            2: 37735.71,
            3: 32536.57,
            4: 27337.43,
            5: 24085.63,
            6: 20545.00,
            7: 19613.26,
            8: 18634.90,
            9: 17982.71,
            10: 17073.28
        }
    },

    /**
     * Complements and bonuses (monthly/hourly/daily as specified)
     */
    complements: {
        2024: {
            plusIdiomas: 122.94,      // €/mes - Language bonus
            plusNocturnidad: 1.84,    // €/hora - Night shift (22:00-06:00)
            plusTransporte: 6.16,     // €/día trabajado - Transport allowance
            plusFestivo: 20.31,       // €/día - Holiday work
            plusDomingo: 8.96,        // €/día - Sunday work
            plusTeletrabajo30h: 1.26, // €/día - Remote work (30+ hours/week)
            plusTeletrabajo30hMenos: 0.99 // €/día - Remote work (<30 hours/week)
        },
        2025: {
            plusIdiomas: 126.64,
            plusNocturnidad: 1.90,
            plusTransporte: 6.34,
            plusFestivo: 20.90,
            plusDomingo: 9.23,
            plusTeletrabajo30h: 1.30,
            plusTeletrabajo30hMenos: 1.02
        },
        2026: {
            // Estimated with 3% increase
            plusIdiomas: 130.44,
            plusNocturnidad: 1.96,
            plusTransporte: 6.53,
            plusFestivo: 21.53,
            plusDomingo: 9.51,
            plusTeletrabajo30h: 1.34,
            plusTeletrabajo30hMenos: 1.05
        }
    },

    /**
     * Number of payments per year
     */
    numPayments: 14,

    /**
     * Get salary for specific level and year
     * @param {number} level - Level 1-10
     * @param {number} year - 2022-2026
     * @returns {Object|null} Salary details or null if not found
     */
    getSalary: function(level, year) {
        const yearTable = this.salaryTables[year];
        if (!yearTable) return null;

        const annualSalary = yearTable[level];
        if (!annualSalary) return null;

        const levelInfo = this.levels[level];
        if (!levelInfo) return null;

        return {
            monthly: annualSalary / this.numPayments,
            annual: annualSalary,
            total: annualSalary,
            level: level,
            levelName: levelInfo.name,
            levelDescription: levelInfo.description,
            group: levelInfo.group,
            groupName: this.groups[levelInfo.group].name,
            roles: levelInfo.roles,
            year: year
        };
    },

    /**
     * Get all levels for dropdown
     * @returns {Array} Array of level objects
     */
    getLevels: function() {
        return Object.keys(this.levels).map(key => ({
            value: parseInt(key),
            label: this.levels[key].name,
            description: this.levels[key].description,
            group: this.levels[key].group
        }));
    },

    /**
     * Position descriptions by level
     * Describes responsibilities and typical job functions
     */
    positionDescriptions: {
        1: {
            title: 'Director/a General / Director/a de Operaciones',
            responsibilities: 'Dirección estratégica del contact center, gestión de P&L, relación con clientes corporativos, definición de KPIs, expansión de negocio',
            experience: '10+ años',
            equivalentTitles: ['Director General', 'Director de Operaciones', 'Managing Director', 'Operations Director', 'Country Manager']
        },
        2: {
            title: 'Jefe/a de Área / Account Manager',
            responsibilities: 'Gestión de grandes cuentas, supervisión de múltiples campañas, reporting ejecutivo, negociación de contratos, gestión de equipos',
            experience: '6-10 años',
            equivalentTitles: ['Jefe de Área', 'Account Director', 'Responsable de Cuenta', 'Campaign Director', 'Head of Operations']
        },
        3: {
            title: 'Jefe/a de Proyecto / Analista Funcional',
            responsibilities: 'Gestión de proyectos de implementación, análisis de requisitos, coordinación técnica, documentación funcional, UAT',
            experience: '4-6 años',
            equivalentTitles: ['Project Manager', 'Analista Funcional', 'Jefe de Proyecto', 'Implementation Manager', 'Functional Analyst']
        },
        4: {
            title: 'Analista / Técnico de Sistemas Senior',
            responsibilities: 'Análisis de datos y reporting, administración de sistemas, soporte nivel 2-3, automatizaciones, integraciones',
            experience: '3-5 años',
            equivalentTitles: ['Analista', 'Systems Analyst', 'Técnico de Sistemas', 'BI Analyst', 'Data Analyst', 'Programador Senior']
        },
        5: {
            title: 'Programador / Técnico Medio',
            responsibilities: 'Desarrollo y mantenimiento de aplicaciones, scripts de automatización, soporte técnico, documentación técnica',
            experience: '2-4 años',
            equivalentTitles: ['Programador', 'Developer', 'Analista Programador', 'Software Developer', 'Técnico Informático']
        },
        6: {
            title: 'Supervisor/a / Quality Analyst',
            responsibilities: 'Supervisión de agentes en tiempo real, escuchas de calidad, feedback y coaching, gestión de incidencias, reporting de turno',
            experience: '2-4 años',
            equivalentTitles: ['Supervisor', 'Team Leader', 'Quality Analyst', 'QA Analyst', 'Formador', 'Trainer', 'Real-Time Analyst']
        },
        7: {
            title: 'Coordinador/a',
            responsibilities: 'Coordinación de equipos pequeños, apoyo a supervisión, gestión de horarios, resolución de incidencias operativas',
            experience: '1-3 años',
            equivalentTitles: ['Coordinador', 'Team Leader Junior', 'Senior Agent', 'Workforce Coordinator', 'Scheduler']
        },
        8: {
            title: 'Gestor/a Telefónico Especialista',
            responsibilities: 'Atención de llamadas complejas, gestión de reclamaciones, retención de clientes, ventas especializadas, back office avanzado',
            experience: '1-2 años',
            equivalentTitles: ['Gestor Telefónico', 'Senior Agent', 'Teleoperador Especialista', 'Retention Agent', 'Customer Care Specialist']
        },
        9: {
            title: 'Auxiliar Administrativo/a',
            responsibilities: 'Tareas administrativas de soporte, gestión documental, back office, archivo, atención telefónica interna',
            experience: '0-2 años',
            equivalentTitles: ['Auxiliar Administrativo', 'Back Office Agent', 'Administrative Support', 'Oficial Administrativo']
        },
        10: {
            title: 'Teleoperador/a',
            responsibilities: 'Atención telefónica entrante/saliente, resolución de consultas, gestión de incidencias básicas, registro en CRM, venta telefónica',
            experience: '0-1 año',
            equivalentTitles: ['Teleoperador', 'Agente de Contact Center', 'Customer Service Agent', 'Call Center Agent', 'Operador', 'CSR']
        }
    },

    /**
     * Get position description for a specific level
     * @param {number} level - Level 1-10
     * @returns {Object|null} - Position description or null
     */
    getPositionDescription: function(level) {
        return this.positionDescriptions[level] || null;
    },

    /**
     * Market rates for contact center roles (orientative)
     * Based on market data from Indeed, Glassdoor, InfoJobs (2024-2025)
     */
    marketRates: {
        roles: {
            'director': { min: 45000, max: 70000, roles: ['Director de Operaciones', 'Director de Contact Center'] },
            'jefe_area': { min: 35000, max: 50000, roles: ['Jefe de Área', 'Account Manager', 'Responsable de Cuenta'] },
            'jefe_proyecto': { min: 30000, max: 42000, roles: ['Jefe de Proyecto', 'Project Manager', 'Analista Funcional'] },
            'analista': { min: 26000, max: 36000, roles: ['Analista', 'Técnico de Sistemas', 'Programador Senior'] },
            'tecnico_medio': { min: 22000, max: 30000, roles: ['Programador', 'Técnico Medio', 'Analista Programador'] },
            'supervisor': { min: 20000, max: 26000, roles: ['Supervisor', 'Team Leader', 'Quality Analyst'] },
            'coordinador': { min: 18000, max: 24000, roles: ['Coordinador', 'Formador', 'Trainer'] },
            'teleoperador_esp': { min: 17000, max: 21000, roles: ['Teleoperador Especialista', 'Agente Senior', 'Gestor Telefónico'] },
            'administrativo': { min: 16000, max: 20000, roles: ['Auxiliar Administrativo', 'Back Office'] },
            'teleoperador': { min: 15000, max: 18000, roles: ['Teleoperador', 'Agente de Contact Center', 'Customer Service'] }
        },

        /**
         * Get market rate for a level
         */
        getMarketRateForCategory: function(level) {
            const levelMap = {
                1: 'director',
                2: 'jefe_area',
                3: 'jefe_proyecto',
                4: 'analista',
                5: 'tecnico_medio',
                6: 'supervisor',
                7: 'coordinador',
                8: 'teleoperador_esp',
                9: 'administrativo',
                10: 'teleoperador'
            };

            const marketKey = levelMap[level];
            if (!marketKey) return null;

            const rate = this.roles[marketKey];
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
    window.ConvenioContactCenter = ConvenioContactCenter;
}
