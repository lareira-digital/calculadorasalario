/**
 * Convenio Colectivo General de Ámbito Estatal para el Sector de
 * Entidades de Seguros, Reaseguros y Mutuas Colaboradoras con la Seguridad Social
 * (2020-2024)
 *
 * Source: BOE-A-2021-21486 (Convenio base)
 *         BOE-A-2025-11414 (Tablas salariales definitivas 2024)
 *         BOE-A-2024-8953 (Tablas salariales 2023 e iniciales 2024)
 *
 * Incrementos:
 * - 2022: +1.5% inicial, revisión según IPC
 * - 2023: +1.5% inicial, revisión según IPC (definitivo: 3.5%)
 * - 2024: +0.8% inicial, revisión según IPC (definitivo: 2.4%)
 *
 * Ámbito: Todo el territorio nacional (España)
 * Vigencia: 1 enero 2020 - 31 diciembre 2024
 * Partes: UNESPA, AMAT, CEM, ASECORE + CCOO-Servicios, UGT
 */

const ConvenioSeguros = {
    name: 'Seguros, Reaseguros y Mutuas',
    code: 'seguros',
    edition: 'Convenio 2020-2024',
    year: 2020,
    source: 'BOE-A-2021-21486, BOE-A-2025-11414',
    boeReference: 'Convenio Colectivo General de Ámbito Estatal para el Sector de Entidades de Seguros',

    /**
     * Professional Groups (Grupos Profesionales)
     * Art. 17 del Convenio
     */
    groups: {
        '0': {
            name: 'Grupo 0 - Dirección',
            description: 'Puestos que dependen de la dirección de la empresa y participan en la elaboración de políticas'
        },
        'I': {
            name: 'Grupo I - Técnicos Superiores',
            description: 'Puestos que requieren autonomía y responsabilidad. Investigación, estudio, análisis, asesoramiento, planificación, evaluación. Titulación universitaria.'
        },
        'II': {
            name: 'Grupo II - Técnicos/Administrativos',
            description: 'Puestos con autonomía para ejecutar tareas y resolver problemas técnicos. Tramitación de siniestros, suscripción de pólizas, programación informática.'
        },
        'III': {
            name: 'Grupo III - Operativos/Soporte',
            description: 'Puestos que realizan tareas instrumentales según instrucciones establecidas. Conducción, operación de máquinas, recepción, grabación de datos.'
        },
        'IV': {
            name: 'Grupo IV - Entrada',
            description: 'Puestos de entrada para trabajadores sin experiencia específica. Duración máxima 2 años con formación obligatoria.'
        }
    },

    /**
     * Categories/Levels within each group
     * Niveles retributivos según Art. 18 del Convenio
     */
    categories: {
        'nivel_1': { group: 'I', name: 'Nivel 1 - Director/Responsable de Área', level: 1 },
        'nivel_2': { group: 'I', name: 'Nivel 2 - Técnico Superior/Jefe de Equipo', level: 2 },
        'nivel_3': { group: 'I', name: 'Nivel 3 - Técnico Especialista', level: 3 },
        'nivel_4': { group: 'II', name: 'Nivel 4 - Técnico/Gestor Senior', level: 4 },
        'nivel_5': { group: 'II', name: 'Nivel 5 - Técnico/Gestor', level: 5 },
        'nivel_6': { group: 'II', name: 'Nivel 6 - Administrativo/Tramitador', level: 6 },
        'nivel_7': { group: 'III', name: 'Nivel 7 - Auxiliar Especializado', level: 7 },
        'nivel_8': { group: 'III', name: 'Nivel 8 - Auxiliar/Operario', level: 8 },
        'nivel_9': { group: 'IV', name: 'Nivel 9 - Personal en formación', level: 9 }
    },

    /**
     * Salary tables by year
     * Salario Base Anual (cómputo de 15 pagas: 12 mensualidades + 3 pagas extras)
     *
     * 2023: Tablas definitivas según BOE-A-2024-8953
     * 2024: Tablas definitivas según BOE-A-2025-11414
     */
    salaryTables: {
        2023: {
            // Tablas definitivas 2023 (antes de incremento 2024)
            nivel_1: 38131.95,
            nivel_2: 32252.40,
            nivel_3: 27497.55,
            nivel_4: 23524.80,
            nivel_5: 20504.55,
            nivel_6: 17813.25,
            nivel_7: 15587.55,
            nivel_8: 13678.80,
            nivel_9: 13072.35
        },
        2024: {
            // Tablas definitivas 2024 según BOE-A-2025-11414
            // Incremento del 2.4% sobre 2023 (coeficiente corrector 120% sobre 2% base por IPC 2.8%)
            nivel_1: 39090.60,
            nivel_2: 33063.75,
            nivel_3: 28177.20,
            nivel_4: 24106.05,
            nivel_5: 21010.50,
            nivel_6: 18241.80,
            nivel_7: 15962.40,
            nivel_8: 14007.90,
            nivel_9: 13390.95
        }
    },

    /**
     * Monthly base salary (for reference)
     * Salario Base Mensual = Anual / 15
     */
    monthlySalaryBase: {
        2024: {
            nivel_1: 2606.04,
            nivel_2: 2204.25,
            nivel_3: 1878.48,
            nivel_4: 1607.07,
            nivel_5: 1400.70,
            nivel_6: 1216.12,
            nivel_7: 1064.16,
            nivel_8: 933.86,
            nivel_9: 892.73
        }
    },

    /**
     * Experience supplement (Complemento por experiencia)
     * Annual amount (15 installments)
     * Solo aplica a Grupos II y III
     */
    experienceSupplement: {
        2024: {
            nivel_4: 407.21,
            nivel_5: 309.47,
            nivel_6: 276.90,
            nivel_7: 228.07,
            nivel_8: 195.47
        }
    },

    /**
     * Number of payments per year (12 + 3 extras)
     */
    numPayments: 15,

    /**
     * Get salary for specific level and year
     * @param {string} level - Level code (nivel_1, nivel_2, etc.)
     * @param {number} year - 2023 or 2024
     * @returns {Object|null} Salary details or null if not found
     */
    getSalary: function(level, year) {
        const yearTable = this.salaryTables[year];
        if (!yearTable) return null;

        const annualSalary = yearTable[level];
        if (!annualSalary) return null;

        const categoryInfo = this.categories[level];
        if (!categoryInfo) return null;

        return {
            monthly: annualSalary / this.numPayments,
            annual: annualSalary,
            total: annualSalary,
            level: level,
            levelName: categoryInfo.name,
            group: categoryInfo.group,
            groupName: this.groups[categoryInfo.group].name,
            year: year
        };
    },

    /**
     * Get all levels for dropdown
     * @returns {Array} Array of level objects
     */
    getLevels: function() {
        return Object.keys(this.categories).map(key => ({
            value: key,
            label: this.categories[key].name,
            group: this.categories[key].group,
            groupName: this.groups[this.categories[key].group].name
        }));
    },

    /**
     * Position descriptions by level
     * Describes responsibilities and typical job functions in the insurance sector
     */
    positionDescriptions: {
        'nivel_1': {
            title: 'Director/Responsable de Área',
            responsibilities: 'Dirección y coordinación de áreas funcionales o de negocio complejas, elaboración de políticas empresariales, toma de decisiones estratégicas, supervisión de equipos multidisciplinares, representación institucional',
            experience: '10+ años + Titulación universitaria superior',
            equivalentTitles: ['Director/a de Área', 'Director/a Técnico', 'Responsable de Departamento', 'Director/a de Siniestros', 'Director/a Comercial', 'Area Manager', 'Department Head']
        },
        'nivel_2': {
            title: 'Técnico Superior/Jefe de Equipo',
            responsibilities: 'Supervisión de equipos técnicos, elaboración de informes especializados, asesoramiento técnico avanzado, gestión de proyectos, coordinación interdepartamental, auditoría técnica',
            experience: '5-10 años + Titulación universitaria',
            equivalentTitles: ['Jefe/a de Equipo', 'Técnico/a Superior', 'Actuario/a', 'Responsable de Suscripción', 'Team Leader', 'Senior Specialist']
        },
        'nivel_3': {
            title: 'Técnico Especialista',
            responsibilities: 'Análisis técnico especializado, elaboración de estudios actuariales, asesoramiento jurídico, gestión de carteras, tarificación de riesgos complejos, desarrollo de productos',
            experience: '3-5 años + Titulación universitaria',
            equivalentTitles: ['Técnico/a de Suscripción', 'Analista de Riesgos', 'Asesor/a Jurídico', 'Técnico/a Actuarial', 'Underwriter', 'Risk Analyst']
        },
        'nivel_4': {
            title: 'Técnico/Gestor Senior',
            responsibilities: 'Gestión avanzada de siniestros, tramitación de pólizas complejas, atención a clientes VIP, formación de personal junior, inspección comercial, peritación',
            experience: '3-5 años + FP Superior/Bachillerato',
            equivalentTitles: ['Gestor/a Senior de Siniestros', 'Tramitador/a Senior', 'Inspector/a Comercial', 'Perito/a', 'Senior Claims Handler']
        },
        'nivel_5': {
            title: 'Técnico/Gestor',
            responsibilities: 'Gestión de siniestros, tramitación de pólizas, atención al cliente, valoración de daños, emisión de documentación, seguimiento de expedientes',
            experience: '1-3 años + FP Superior/Bachillerato',
            equivalentTitles: ['Gestor/a de Siniestros', 'Tramitador/a de Pólizas', 'Técnico/a Comercial', 'Claims Handler', 'Policy Administrator']
        },
        'nivel_6': {
            title: 'Administrativo/Tramitador',
            responsibilities: 'Tareas administrativas, grabación de datos, emisión de recibos, archivo y documentación, atención telefónica, gestión de cobros y pagos',
            experience: '0-2 años + FP Medio/ESO',
            equivalentTitles: ['Administrativo/a', 'Tramitador/a', 'Auxiliar de Siniestros', 'Grabador/a de Datos', 'Administrative Assistant']
        },
        'nivel_7': {
            title: 'Auxiliar Especializado',
            responsibilities: 'Tareas de apoyo especializado, conducción de vehículos, mantenimiento de instalaciones, gestión de correspondencia, recepción y centralita',
            experience: '1-2 años',
            equivalentTitles: ['Auxiliar Administrativo/a', 'Recepcionista', 'Telefonista', 'Conductor/a', 'Office Assistant']
        },
        'nivel_8': {
            title: 'Auxiliar/Operario',
            responsibilities: 'Tareas auxiliares básicas, reparto de correspondencia, ordenanza, limpieza, vigilancia, mantenimiento básico',
            experience: '0-1 año',
            equivalentTitles: ['Ordenanza', 'Auxiliar', 'Personal de Limpieza', 'Vigilante', 'Conserje', 'Office Support']
        },
        'nivel_9': {
            title: 'Personal en Formación',
            responsibilities: 'Aprendizaje de funciones básicas del sector, apoyo en tareas administrativas, formación obligatoria mínima de 30 horas anuales',
            experience: 'Sin experiencia previa (máx. 2 años en este nivel)',
            equivalentTitles: ['Becario/a', 'Personal en Prácticas', 'Trainee', 'Junior', 'Apprentice']
        }
    },

    /**
     * Get position description for a specific level
     * @param {string} level - Level code
     * @returns {Object|null} - Position description or null
     */
    getPositionDescription: function(level) {
        return this.positionDescriptions[level] || null;
    },

    /**
     * Market rates for insurance sector roles in Spain (orientative)
     * Based on market data from Indeed, InfoJobs, Glassdoor (2024-2025)
     */
    marketRates: {
        roles: {
            'nivel_1': { min: 50000, max: 80000, roles: ['Director de Área', 'Director Técnico', 'Responsable de Departamento'] },
            'nivel_2': { min: 38000, max: 55000, roles: ['Jefe de Equipo', 'Actuario', 'Responsable de Suscripción'] },
            'nivel_3': { min: 30000, max: 42000, roles: ['Técnico de Suscripción', 'Analista de Riesgos', 'Underwriter'] },
            'nivel_4': { min: 26000, max: 35000, roles: ['Gestor Senior de Siniestros', 'Inspector Comercial', 'Perito'] },
            'nivel_5': { min: 22000, max: 30000, roles: ['Gestor de Siniestros', 'Tramitador de Pólizas', 'Claims Handler'] },
            'nivel_6': { min: 18000, max: 24000, roles: ['Administrativo', 'Tramitador', 'Grabador de Datos'] },
            'nivel_7': { min: 16000, max: 20000, roles: ['Auxiliar Administrativo', 'Recepcionista', 'Telefonista'] },
            'nivel_8': { min: 15000, max: 18000, roles: ['Ordenanza', 'Auxiliar', 'Conserje'] },
            'nivel_9': { min: 14000, max: 16000, roles: ['Becario', 'Trainee', 'Personal en Prácticas'] }
        },

        /**
         * Get market rate for a level
         */
        getMarketRateForCategory: function(level) {
            const rate = this.roles[level];
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
    window.ConvenioSeguros = ConvenioSeguros;
}
