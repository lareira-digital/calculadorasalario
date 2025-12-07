/**
 * IX Convenio Colectivo Estatal de Gestorías Administrativas (2024-2026)
 *
 * Source: BOE-A-2024-17575 (IX Convenio, 30/08/2024)
 *         BOE-A-2023-7391 (Tablas salariales 2022)
 *
 * Incrementos:
 * - 2022: +5.7% (IPC)
 * - 2024: +4% sobre 2022
 * - 2025: +3% sobre 2024
 * - 2026: +3% sobre 2025
 * - Cláusula revisión: +1% adicional si IPC > incremento aplicado
 *
 * Ámbito: Nacional (todo el territorio español)
 * Trabajadores afectados: ~50,000
 */

const ConvenioGestorias = {
    name: 'Gestorías Administrativas',
    code: 'gestorias',
    edition: 'IX Convenio',
    year: 2024,
    source: 'BOE-A-2024-17575',
    boeReference: 'IX Convenio colectivo estatal de gestorías administrativas 2024-2026',

    /**
     * Professional Groups (Grupos Profesionales)
     */
    groups: {
        'I': {
            name: 'Grupo I - Personal Titulado',
            description: 'Trabajadores con título académico de grado superior o medio con vinculación laboral por el título que poseen'
        },
        'II': {
            name: 'Grupo II - Administración',
            description: 'Personal que desarrolla tareas de administración propias del ciclo productivo de la empresa'
        },
        'III': {
            name: 'Grupo III - Servicios',
            description: 'Personal de servicios auxiliares y apoyo'
        }
    },

    /**
     * Professional Categories with descriptions
     */
    categories: {
        'titulado_superior': {
            name: 'Titulado/a Superior',
            group: 'I',
            description: 'Licenciado, Grado Superior o Máster universitario',
            roles: ['Abogado', 'Economista', 'Asesor Fiscal Senior', 'Director Técnico']
        },
        'titulado_medio': {
            name: 'Titulado/a Medio',
            group: 'I',
            description: 'Diplomado, Grado Medio o Titular de Primer Ciclo Universitario',
            roles: ['Graduado Social', 'Técnico en Administración', 'Asesor Laboral']
        },
        'coordinador_jefe': {
            name: 'Coordinador/a - Jefe/a Administrativo/a',
            group: 'II',
            description: 'Responsable de coordinación y supervisión administrativa',
            roles: ['Jefe de Administración', 'Coordinador de Oficina', 'Responsable Contable']
        },
        'oficial_primera': {
            name: 'Oficial de Primera',
            group: 'II',
            description: 'Oficial administrativo con experiencia y autonomía',
            roles: ['Oficial Administrativo Senior', 'Técnico Contable', 'Gestor de Nóminas']
        },
        'oficial_segunda': {
            name: 'Oficial de Segunda',
            group: 'II',
            description: 'Oficial administrativo con funciones intermedias',
            roles: ['Oficial Administrativo', 'Auxiliar Contable', 'Administrativo']
        },
        'auxiliar_administrativo': {
            name: 'Auxiliar Administrativo/a',
            group: 'II',
            description: 'Tareas administrativas básicas de apoyo',
            roles: ['Auxiliar Administrativo', 'Recepcionista', 'Archivo'],
            smiLinked: true
        },
        'ordenanza': {
            name: 'Ordenanza',
            group: 'III',
            description: 'Tareas de conserjería y apoyo general',
            roles: ['Ordenanza', 'Conserje', 'Mensajero'],
            smiLinked: true
        },
        'limpieza': {
            name: 'Personal de Limpieza',
            group: 'III',
            description: 'Tareas de limpieza y mantenimiento básico',
            roles: ['Limpiador/a', 'Personal de Limpieza'],
            smiLinked: true
        }
    },

    /**
     * Salary tables by year
     * All amounts are annual gross salary (14 payments)
     *
     * Base: 2022 from BOE-A-2023-7391
     * 2024: +4% sobre 2022 (nuevo convenio)
     * 2025: +3% sobre 2024
     * 2026: +3% sobre 2025
     *
     * Note: SMI-linked categories use SMI values
     * SMI 2024: 15,876€, SMI 2025: 16,576€ (estimated SMI 2026: ~17,070€)
     */
    salaryTables: {
        2024: {
            titulado_superior: 24846.85,      // 23891.20 * 1.04
            titulado_medio: 23423.44,         // 22522.54 * 1.04
            coordinador_jefe: 20457.75,       // 19670.91 * 1.04
            oficial_primera: 18955.19,        // 18226.14 * 1.04
            oficial_segunda: 17320.74,        // 16654.56 * 1.04
            auxiliar_administrativo: 15876.00, // SMI 2024
            ordenanza: 15876.00,              // SMI 2024
            limpieza: 15876.00                // SMI 2024
        },
        2025: {
            titulado_superior: 25592.26,      // 24846.85 * 1.03
            titulado_medio: 24126.14,         // 23423.44 * 1.03
            coordinador_jefe: 21071.48,       // 20457.75 * 1.03
            oficial_primera: 19523.85,        // 18955.19 * 1.03
            oficial_segunda: 17840.36,        // 17320.74 * 1.03
            auxiliar_administrativo: 16576.00, // SMI 2025
            ordenanza: 16576.00,              // SMI 2025
            limpieza: 16576.00                // SMI 2025
        },
        2026: {
            titulado_superior: 26360.03,      // 25592.26 * 1.03
            titulado_medio: 24849.92,         // 24126.14 * 1.03
            coordinador_jefe: 21703.62,       // 21071.48 * 1.03
            oficial_primera: 20109.37,        // 19523.85 * 1.03
            oficial_segunda: 18375.57,        // 17840.36 * 1.03
            auxiliar_administrativo: 17073.28, // SMI 2026 estimated (+3%)
            ordenanza: 17073.28,              // SMI 2026 estimated
            limpieza: 17073.28                // SMI 2026 estimated
        }
    },

    /**
     * Complements and allowances
     */
    complements: {
        kilometraje: 0.26,           // €/km en vehículo propio
        dietaSinPernocta: 15.00,     // €/día
        dietaConPernocta: 28.00,     // €/día
        teletrabajo: 1.00            // €/día trabajado en remoto
    },

    /**
     * Number of payments per year
     */
    numPayments: 14,

    /**
     * Get salary for specific category and year
     * @param {string} category - Category code
     * @param {number} year - 2024-2026
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
            categoryDescription: categoryInfo.description,
            group: categoryInfo.group,
            groupName: this.groups[categoryInfo.group].name,
            roles: categoryInfo.roles,
            smiLinked: categoryInfo.smiLinked || false,
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
            description: this.categories[key].description,
            group: this.categories[key].group
        }));
    },

    /**
     * Position descriptions by category
     * Describes responsibilities and typical job functions
     */
    positionDescriptions: {
        'titulado_superior': {
            title: 'Titulado/a Superior',
            responsibilities: 'Asesoramiento fiscal, contable y jurídico avanzado, gestión de clientes, representación ante organismos, firma de documentos oficiales',
            experience: '5+ años + Licenciatura/Grado',
            equivalentTitles: ['Abogado', 'Economista', 'Asesor Fiscal Senior', 'Director Técnico', 'Tax Advisor', 'Legal Advisor']
        },
        'titulado_medio': {
            title: 'Titulado/a Medio',
            responsibilities: 'Asesoramiento laboral y fiscal, gestión de nóminas complejas, relación con Seguridad Social y Hacienda, formación a clientes',
            experience: '3-5 años + Diplomatura/Grado',
            equivalentTitles: ['Graduado Social', 'Asesor Laboral', 'Técnico Fiscal', 'Payroll Specialist', 'HR Advisor']
        },
        'coordinador_jefe': {
            title: 'Coordinador/a - Jefe/a Administrativo/a',
            responsibilities: 'Coordinación del equipo administrativo, supervisión de procesos, control de calidad, formación de personal, relación con clientes',
            experience: '4-6 años',
            equivalentTitles: ['Jefe de Administración', 'Coordinador de Oficina', 'Responsable Contable', 'Office Manager', 'Team Leader']
        },
        'oficial_primera': {
            title: 'Oficial de Primera',
            responsibilities: 'Gestión contable autónoma, confección de impuestos, nóminas completas, relación directa con clientes, resolución de incidencias',
            experience: '3-4 años',
            equivalentTitles: ['Oficial Administrativo Senior', 'Técnico Contable', 'Gestor de Nóminas', 'Accountant', 'Payroll Manager']
        },
        'oficial_segunda': {
            title: 'Oficial de Segunda',
            responsibilities: 'Contabilidad básica, preparación de impuestos, gestión de nóminas con supervisión, atención telefónica especializada',
            experience: '1-3 años',
            equivalentTitles: ['Oficial Administrativo', 'Auxiliar Contable', 'Administrativo', 'Junior Accountant', 'Administrative']
        },
        'auxiliar_administrativo': {
            title: 'Auxiliar Administrativo/a',
            responsibilities: 'Tareas administrativas básicas, archivo, atención telefónica, gestión de citas, preparación de documentación',
            experience: '0-1 año',
            equivalentTitles: ['Auxiliar Administrativo', 'Recepcionista', 'Administrative Assistant', 'Office Assistant', 'Archivo']
        },
        'ordenanza': {
            title: 'Ordenanza',
            responsibilities: 'Conserjería, gestiones externas, mensajería, reparto de documentación, apoyo general a la oficina',
            experience: '0 años',
            equivalentTitles: ['Ordenanza', 'Conserje', 'Mensajero', 'Recadero', 'Office Boy']
        },
        'limpieza': {
            title: 'Personal de Limpieza',
            responsibilities: 'Limpieza y mantenimiento de las instalaciones de la oficina',
            experience: '0 años',
            equivalentTitles: ['Limpiador/a', 'Personal de Limpieza', 'Cleaner']
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
     * Market rates for gestorías roles (orientative)
     * Based on market data from Indeed, Glassdoor, InfoJobs (2024-2025)
     */
    marketRates: {
        roles: {
            'titulado_superior': { min: 28000, max: 45000, roles: ['Abogado', 'Economista', 'Asesor Fiscal Senior'] },
            'titulado_medio': { min: 24000, max: 35000, roles: ['Graduado Social', 'Asesor Laboral', 'Técnico Fiscal'] },
            'coordinador_jefe': { min: 22000, max: 32000, roles: ['Jefe Administrativo', 'Coordinador', 'Responsable Contable'] },
            'oficial_primera': { min: 20000, max: 28000, roles: ['Oficial Administrativo Senior', 'Técnico Contable'] },
            'oficial_segunda': { min: 18000, max: 24000, roles: ['Oficial Administrativo', 'Administrativo Contable'] },
            'auxiliar_administrativo': { min: 16000, max: 20000, roles: ['Auxiliar Administrativo', 'Recepcionista'] },
            'ordenanza': { min: 15500, max: 18000, roles: ['Ordenanza', 'Conserje', 'Mensajero'] },
            'limpieza': { min: 15500, max: 17500, roles: ['Personal de Limpieza'] }
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
    window.ConvenioGestorias = ConvenioGestorias;
}
