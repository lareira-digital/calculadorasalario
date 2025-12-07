/**
 * Convenio Colectivo Provincial para la Industria Siderometalúrgica
 * de la Provincia de A Coruña (2020-2025)
 *
 * Source: BOP A Coruña - Número 146, 3 de agosto de 2022 (Convenio base)
 *         BOP A Coruña - Número 30, 13 de febrero de 2025 (Tablas 2024-2025)
 *
 * Incrementos:
 * - 2021: +4.5% sobre 2019
 * - 2022: +4% sobre 2021
 * - 2023: +4% sobre 2022
 * - 2024: +3% sobre 2023 + revisión IPC (2.8%)
 * - 2025: +1.5% sobre 2024
 *
 * Cláusula de revisión: Si IPC > incremento pactado
 *
 * Ámbito: Provincia de A Coruña (Galicia)
 * Vigencia: 1 enero 2020 - 31 diciembre 2025
 */

const ConvenioMetalCoruna = {
    name: 'Metal A Coruña',
    code: 'metal-coruna',
    edition: 'Convenio 2020-2025',
    year: 2020,
    source: 'BOP A Coruña 2022/4651, 2025/911',
    boeReference: 'Convenio Colectivo Provincial para la Industria Siderometalúrgica de A Coruña',

    /**
     * Professional Groups (Grupos Profesionales)
     */
    groups: {
        '1': {
            name: 'Grupo 1 - Técnicos de Grado Superior',
            description: 'Titulados universitarios superiores que ejercen funciones propias de su titulación'
        },
        '2': {
            name: 'Grupo 2 - Técnicos de Grado Medio',
            description: 'Titulados de grado medio con funciones técnicas especializadas'
        },
        '3': {
            name: 'Grupo 3 - Jefaturas y Técnicos',
            description: 'Jefes de taller, administración, organización y técnicos industriales'
        },
        '4': {
            name: 'Grupo 4 - Técnicos de Organización',
            description: 'Delineantes, encargados y técnicos de organización'
        },
        '5': {
            name: 'Grupo 5 - Oficiales y Profesionales',
            description: 'Oficiales administrativos y profesionales de oficio cualificados'
        },
        '6': {
            name: 'Grupo 6 - Auxiliares y Especialistas',
            description: 'Almaceneros, auxiliares administrativos, especialistas y telefonistas'
        },
        '7': {
            name: 'Grupo 7 - Personal de Base',
            description: 'Peones, ordenanzas, porteros y vigilantes'
        }
    },

    /**
     * Categories within each group
     * Note: Groups 3 and 5 have sublevels (A, B, C)
     */
    categories: {
        'grupo_1': { group: '1', name: 'Técnicos de Grado Superior', level: 1 },
        'grupo_2': { group: '2', name: 'Técnicos de Grado Medio', level: 2 },
        'grupo_3A': { group: '3', name: 'Jefe de Taller / Jefe Administrativo 1ª y 2ª', level: '3A' },
        'grupo_3B': { group: '3', name: 'Jefe Organización / Delineante Proyectista', level: '3B' },
        'grupo_3C': { group: '3', name: 'Maestro de Taller / Contramaestre', level: '3C' },
        'grupo_4': { group: '4', name: 'Delineante 1ª / Encargado / Técnico Organización', level: 4 },
        'grupo_5A': { group: '5', name: 'Oficial Administración 1ª y 2ª / Viajante', level: '5A' },
        'grupo_5B': { group: '5', name: 'Profesional de Oficio 1ª y 2ª / Chófer', level: '5B' },
        'grupo_6': { group: '6', name: 'Almacenero / Aux. Admón / Especialista', level: 6 },
        'grupo_7': { group: '7', name: 'Peón / Ordenanza / Portero / Vigilante', level: 7 }
    },

    /**
     * Salary tables by year
     * All amounts are annual gross salary (Total Retribución)
     * Includes: Salario Base + Plus Asistencia + Pagas Extras
     *
     * 2023: Estimated (+4% sobre 2022)
     * 2024: From BOP 2025 (revisado con IPC 2.8%)
     * 2025: From BOP 2025
     */
    salaryTables: {
        2023: {
            // Estimated: 2022 * 1.04
            grupo_1: 32389.91,   // 31144.14 * 1.04
            grupo_2: 31180.26,   // 29981.02 * 1.04
            grupo_3A: 28274.38,  // 27186.90 * 1.04
            grupo_3B: 27368.60,  // 26315.96 * 1.04
            grupo_3C: 27080.75,  // 26039.18 * 1.04
            grupo_4: 25555.59,   // 24572.68 * 1.04
            grupo_5A: 25386.55,  // 24410.14 * 1.04
            grupo_5B: 23913.95,  // 22994.18 * 1.04
            grupo_6: 23182.74,   // 22291.10 * 1.04
            grupo_7: 22359.67    // 21499.68 * 1.04
        },
        2024: {
            // From BOP 2025/911 - Revisión salarial 2024 (con IPC 2.8%)
            grupo_1: 33548.11,
            grupo_2: 32295.25,
            grupo_3A: 29285.67,
            grupo_3B: 28347.39,
            grupo_3C: 28049.19,
            grupo_4: 26469.57,
            grupo_5A: 26294.43,
            grupo_5B: 24769.13,
            grupo_6: 24012.01,
            grupo_7: 23159.41
        },
        2025: {
            // From BOP 2025/911 - Tablas salariales 2025
            grupo_1: 34051.33,
            grupo_2: 32779.71,
            grupo_3A: 29724.91,
            grupo_3B: 28772.63,
            grupo_3C: 28469.95,
            grupo_4: 26866.67,
            grupo_5A: 26688.87,
            grupo_5B: 25140.61,
            grupo_6: 24372.15,
            grupo_7: 23506.81
        }
    },

    /**
     * Monthly base salary (Salario Base Mensual) - for reference
     */
    monthlySalaryBase: {
        2025: {
            grupo_1: 2291.89,
            grupo_2: 2201.06,
            grupo_3A: 1982.86,
            grupo_3B: 1914.84,
            grupo_3C: 1893.22,
            grupo_4: 1778.70,
            grupo_5A: 1766.00,
            grupo_5B: 1655.41,
            grupo_6: 1600.52,
            grupo_7: 1538.71
        }
    },

    /**
     * Complemento Personal (seniority bonus per year of service)
     * Annual amount, not including extra payments
     */
    complementoPersonal: {
        2025: {
            grupo_1: 222.50,
            grupo_2: 213.69,
            grupo_3A: 192.54,
            grupo_3B: 185.91,
            grupo_3C: 183.80,
            grupo_4: 172.67,
            grupo_5A: 171.46,
            grupo_5B: 161.35,
            grupo_6: 155.38,
            grupo_7: 149.94
        }
    },

    /**
     * Plus Asistencia (daily attendance bonus)
     */
    plusAsistencia: {
        2025: 5.63  // €/día
    },

    /**
     * Number of payments per year (12 + 2 extras)
     */
    numPayments: 14,

    /**
     * Get salary for specific category and year
     * @param {string} category - Category code (grupo_1, grupo_3A, etc.)
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
        'grupo_1': {
            title: 'Técnicos de Grado Superior',
            responsibilities: 'Dirección técnica de proyectos, ingeniería de procesos, diseño de instalaciones industriales, gestión de calidad, I+D, supervisión técnica avanzada, cálculos estructurales',
            experience: '5+ anos + Grao/Licenciatura universitaria',
            equivalentTitles: ['Enxeñeiro/a Industrial', 'Enxeñeiro/a Mecánico', 'Director/a Técnico', 'Xefe/a de Proxectos', 'Responsable de I+D', 'Industrial Engineer', 'Technical Director']
        },
        'grupo_2': {
            title: 'Técnicos de Grado Medio',
            responsibilities: 'Supervisión técnica, diseño asistido, programación de producción, control de calidad, gestión de mantenimiento, soporte a ingeniería',
            experience: '3-5 anos + FP Superior / Grao Medio',
            equivalentTitles: ['Técnico/a Superior', 'Perito Industrial', 'Técnico/a de Calidade', 'Supervisor/a Técnico', 'Technical Supervisor']
        },
        'grupo_3A': {
            title: 'Xefe de Taller / Xefe Administrativo 1ª e 2ª',
            responsibilities: 'Dirección de taller o departamento administrativo, coordinación de equipos, planificación de producción, gestión de recursos, control presupuestario',
            experience: '5-8 anos',
            equivalentTitles: ['Xefe de Taller', 'Xefe Administrativo', 'Workshop Manager', 'Responsable de Produción', 'Office Manager']
        },
        'grupo_3B': {
            title: 'Xefe de Organización / Delineante Proxectista',
            responsibilities: 'Organización de procesos productivos, diseño técnico de proyectos, delineación de planos complejos, métodos y tiempos, mejora continua',
            experience: '4-6 anos',
            equivalentTitles: ['Xefe de Organización', 'Delineante Proxectista', 'Debuxante Proxectista', 'Process Engineer', 'Design Engineer']
        },
        'grupo_3C': {
            title: 'Mestre de Taller / Contramestre',
            responsibilities: 'Supervisión directa de operarios, control de calidad en producción, distribución de tareas, formación de personal, resolución de incidencias técnicas',
            experience: '4-6 anos',
            equivalentTitles: ['Mestre de Taller', 'Contramestre', 'Capataz', 'Foreman', 'Production Supervisor', 'Team Leader']
        },
        'grupo_4': {
            title: 'Delineante 1ª / Encargado / Técnico Organización',
            responsibilities: 'Delineación técnica, supervisión de secciones, organización de trabajo, control de tiempos, topografía práctica, coordinación de equipos pequeños',
            experience: '3-5 anos',
            equivalentTitles: ['Delineante', 'Encargado/a', 'Técnico/a de Organización', 'Práctico en Topografía', 'Drafter', 'Section Leader']
        },
        'grupo_5A': {
            title: 'Oficial Administración 1ª e 2ª / Viaxante',
            responsibilities: 'Gestión administrativa, contabilidad, facturación, gestión comercial, visitas a clientes, elaboración de presupuestos, atención al cliente',
            experience: '2-4 anos',
            equivalentTitles: ['Oficial Administrativo', 'Administrativo/a', 'Viaxante', 'Comercial', 'Sales Representative', 'Administrative Officer']
        },
        'grupo_5B': {
            title: 'Profesional de Oficio 1ª e 2ª / Chófer',
            responsibilities: 'Trabajos cualificados de soldadura, tornería, fresado, montaje, conducción de vehículos pesados y grúas, mantenimiento especializado',
            experience: '2-4 anos',
            equivalentTitles: ['Soldador/a', 'Torneiro/a', 'Fresador/a', 'Montador/a', 'Chófer', 'Operador/a de Grúa', 'Welder', 'Machine Operator']
        },
        'grupo_6': {
            title: 'Almaceneiro / Aux. Admón / Especialista',
            responsibilities: 'Gestión de almacén, tareas administrativas de apoyo, operaciones especializadas, atención telefónica, control de stock, pesaje',
            experience: '1-2 anos',
            equivalentTitles: ['Almaceneiro/a', 'Auxiliar Administrativo/a', 'Especialista', 'Telefonista', 'Pesador/a', 'Warehouse Clerk', 'Administrative Assistant']
        },
        'grupo_7': {
            title: 'Peón / Ordenanza / Porteiro / Vixilante',
            responsibilities: 'Tareas básicas de producción, carga y descarga, limpieza industrial, conserjería, vigilancia, apoyo general en fábrica',
            experience: '0-1 ano',
            equivalentTitles: ['Peón Industrial', 'Ordenanza', 'Porteiro/a', 'Vixilante', 'Mozo/a de Almacén', 'Production Helper', 'Security Guard']
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
            'grupo_1': { min: 32000, max: 50000, roles: ['Enxeñeiro Industrial', 'Director Técnico', 'Xefe de Proxectos'] },
            'grupo_2': { min: 28000, max: 40000, roles: ['Técnico Superior', 'Perito Industrial', 'Supervisor Técnico'] },
            'grupo_3A': { min: 26000, max: 38000, roles: ['Xefe de Taller', 'Xefe Administrativo', 'Responsable Produción'] },
            'grupo_3B': { min: 25000, max: 35000, roles: ['Delineante Proxectista', 'Xefe Organización'] },
            'grupo_3C': { min: 24000, max: 34000, roles: ['Mestre de Taller', 'Contramestre', 'Capataz'] },
            'grupo_4': { min: 23000, max: 32000, roles: ['Delineante', 'Encargado', 'Técnico Organización'] },
            'grupo_5A': { min: 22000, max: 30000, roles: ['Oficial Administrativo', 'Comercial', 'Viaxante'] },
            'grupo_5B': { min: 21000, max: 32000, roles: ['Soldador', 'Torneiro', 'Fresador', 'Chófer'] },
            'grupo_6': { min: 18000, max: 24000, roles: ['Almaceneiro', 'Auxiliar Administrativo', 'Especialista'] },
            'grupo_7': { min: 17000, max: 22000, roles: ['Peón Industrial', 'Ordenanza', 'Vixilante'] }
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
    window.ConvenioMetalCoruna = ConvenioMetalCoruna;
}
