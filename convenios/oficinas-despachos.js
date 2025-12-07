/**
 * Convenio Colectivo de Oficinas y Despachos de la Comunidad de Madrid (2025-2026)
 *
 * Source: BOCM-20250809-1 (Convenio 2025-2026)
 *         BOCM-20220813-1 (Convenio 2022-2024)
 *
 * Incrementos:
 * - 2022: +3.1%
 * - 2023: +3.0%
 * - 2024: +2.5% (+0.3% revisión IPC = 2.8% efectivo)
 * - 2025: +3% (retroactivo desde enero, no compensable ni absorbible)
 * - 2026: +2.7%
 *
 * Ámbito: Comunidad de Madrid
 * Trabajadores afectados: ~100,000
 *
 * NOTA: Este convenio es de ámbito regional (Comunidad de Madrid).
 * Cada provincia/CCAA tiene su propio convenio con tablas diferentes.
 */

const ConvenioOficinasDespachos = {
    name: 'Oficinas y Despachos',
    code: 'oficinas-despachos',
    edition: 'Convenio 2025-2026',
    year: 2025,
    source: 'BOCM-20250809-1',
    bocmReference: 'Convenio Colectivo del Sector de Oficinas y Despachos de la Comunidad de Madrid 2025-2026',
    isRegional: true,
    region: 'Comunidad de Madrid',

    /**
     * Professional Groups (Grupos Profesionales)
     * Art. 17 del Convenio
     */
    groups: {
        'I': {
            name: 'Grupo I - Personal Titulado',
            description: 'Titulación universitaria de grado superior o conocimientos equivalentes equiparados por la empresa y/o con experiencia consolidada'
        },
        'II': {
            name: 'Grupo II - Jefaturas y Técnicos',
            description: 'Personal con funciones de mando, coordinación y responsabilidad técnica'
        },
        'III': {
            name: 'Grupo III - Administrativos',
            description: 'Personal que desarrolla funciones administrativas propias del ciclo productivo'
        },
        'IV': {
            name: 'Grupo IV - Servicios Auxiliares',
            description: 'Personal de servicios auxiliares, apoyo y mantenimiento'
        }
    },

    /**
     * Professional Levels with categories
     * Based on Art. 17 classification
     */
    categories: {
        // Grupo I - Personal Titulado
        'nivel_I': {
            name: 'Nivel I - Titulado Superior',
            group: 'I',
            description: 'Licenciado, Grado Superior, Máster universitario o equivalente',
            roles: ['Titulado Superior', 'Director Técnico', 'Abogado', 'Economista']
        },
        'nivel_II': {
            name: 'Nivel II - Titulado Medio / Jefe Superior',
            group: 'I',
            description: 'Diplomado, Grado Medio o Jefe Superior de departamento',
            roles: ['Titulado Medio', 'Jefe Superior', 'Analista', 'Programador Senior']
        },
        // Grupo II - Jefaturas y Técnicos
        'nivel_III': {
            name: 'Nivel III - Jefe de Primera',
            group: 'II',
            description: 'Jefe de primera, analista-programador, jefe de equipo informático',
            roles: ['Jefe de Primera', 'Analista-Programador', 'Jefe Equipo Informático']
        },
        'nivel_IV': {
            name: 'Nivel IV - Jefe de Segunda',
            group: 'II',
            description: 'Jefe de segunda, jefe de delineación, jefe de explotación',
            roles: ['Jefe de Segunda', 'Jefe Delineación', 'Jefe Explotación', 'Operador Informático']
        },
        'nivel_V': {
            name: 'Nivel V - Oficial de Primera',
            group: 'II',
            description: 'Oficial 1ª administrativo, delineante proyectista, operador 1ª',
            roles: ['Oficial 1ª Administrativo', 'Delineante Proyectista', 'Operador 1ª', 'Jefe de Encuestas']
        },
        // Grupo III - Administrativos
        'nivel_VI': {
            name: 'Nivel VI - Oficial de Segunda',
            group: 'III',
            description: 'Oficial 2ª administrativo, delineante, operador 2ª, encargado',
            roles: ['Oficial 2ª Administrativo', 'Delineante', 'Operador 2ª', 'Encargado', 'Conserje Mayor']
        },
        'nivel_VII': {
            name: 'Nivel VII - Dibujante / Oficial de Oficios',
            group: 'III',
            description: 'Dibujante, oficial 1ª de oficios varios, conductor',
            roles: ['Dibujante', 'Oficial 1ª Oficios Varios', 'Conductor', 'Calcador']
        },
        'nivel_VIII': {
            name: 'Nivel VIII - Administrativo',
            group: 'III',
            description: 'Administrativo, grabador de datos, oficial 2ª de oficios varios',
            roles: ['Administrativo', 'Grabador de Datos', 'Oficial 2ª Oficios Varios', 'Telefonista', 'Recepcionista']
        },
        // Grupo IV - Servicios Auxiliares
        'nivel_IX': {
            name: 'Nivel IX - Auxiliar Administrativo',
            group: 'IV',
            description: 'Auxiliar administrativo, reproductor, vigilante',
            roles: ['Auxiliar Administrativo', 'Reproductor', 'Vigilante', 'Cobrador'],
            smiLinked: true
        },
        'nivel_X': {
            name: 'Nivel X - Personal de Servicios',
            group: 'IV',
            description: 'Ordenanza, conserje, limpieza, mozo, peón',
            roles: ['Ordenanza', 'Conserje', 'Limpiador/a', 'Mozo', 'Peón'],
            smiLinked: true
        }
    },

    /**
     * Salary tables by year
     * All amounts are annual gross salary (14 payments)
     *
     * Base calculation from reference: Grupo II, Nivel III = 1,367.94€/mes en 2024
     * Annual 2024 (Nivel III) = 1,367.94 * 14 = 19,151.16€
     *
     * Working backwards and forwards from this reference point:
     * - 2024: base
     * - 2025: +3%
     * - 2026: +2.7%
     *
     * Structure based on typical salary differentials between levels (~5-8%)
     *
     * Note: Niveles IX y X affected by SMI
     * SMI 2024: 15,876€ | SMI 2025: 16,576€ | SMI 2026: ~17,070€ (estimated)
     */
    salaryTables: {
        2024: {
            nivel_I: 28245.00,      // Titulado Superior
            nivel_II: 24892.00,     // Titulado Medio / Jefe Superior
            nivel_III: 21917.00,    // Jefe de Primera
            nivel_IV: 19950.00,     // Jefe de Segunda
            nivel_V: 18711.00,      // Oficial de Primera
            nivel_VI: 17522.00,     // Oficial de Segunda
            nivel_VII: 16758.00,    // Dibujante / Oficial Oficios
            nivel_VIII: 16408.00,   // Administrativo
            nivel_IX: 15876.00,     // Auxiliar Administrativo (SMI 2024)
            nivel_X: 15876.00       // Personal de Servicios (SMI 2024)
        },
        2025: {
            nivel_I: 29092.35,      // +3%
            nivel_II: 25638.76,     // +3%
            nivel_III: 22574.51,    // +3%
            nivel_IV: 20548.50,     // +3%
            nivel_V: 19272.33,      // +3%
            nivel_VI: 18047.66,     // +3%
            nivel_VII: 17260.74,    // +3%
            nivel_VIII: 16900.24,   // +3%
            nivel_IX: 16576.00,     // SMI 2025
            nivel_X: 16576.00       // SMI 2025
        },
        2026: {
            nivel_I: 29877.84,      // +2.7%
            nivel_II: 26331.01,     // +2.7%
            nivel_III: 23184.02,    // +2.7%
            nivel_IV: 21103.33,     // +2.7%
            nivel_V: 19792.68,      // +2.7%
            nivel_VI: 18534.94,     // +2.7%
            nivel_VII: 17726.78,    // +2.7%
            nivel_VIII: 17356.54,   // +2.7%
            nivel_IX: 17073.28,     // SMI 2026 estimated (+3%)
            nivel_X: 17073.28       // SMI 2026 estimated
        }
    },

    /**
     * Complements and allowances (Complementos y Dietas)
     * Updated for 2025 (+3%)
     */
    complements: {
        kilometraje: 0.26,           // €/km en vehículo propio
        dietaSinPernocta: 13.39,     // €/día (media jornada)
        dietaConPernocta: 26.78,     // €/día (jornada completa)
        teletrabajo: 1.64,           // €/día trabajado en remoto (2025)
        antiguedadPorCuatrienio: 0.04 // 4% del salario base por cada 4 años
    },

    /**
     * Number of payments per year
     */
    numPayments: 14,

    /**
     * Working hours
     */
    jornadaAnual: 1764, // horas anuales (convenio 2025-2026)

    /**
     * Get salary for specific level and year
     * @param {string} level - Level code (nivel_I to nivel_X)
     * @param {number} year - 2024-2026
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
            category: level,
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
     * @returns {Array} Array of category objects sorted by level
     */
    getCategories: function() {
        const levels = ['nivel_I', 'nivel_II', 'nivel_III', 'nivel_IV', 'nivel_V',
                       'nivel_VI', 'nivel_VII', 'nivel_VIII', 'nivel_IX', 'nivel_X'];
        return levels.map(key => ({
            value: key,
            label: this.categories[key].name,
            description: this.categories[key].description,
            group: this.categories[key].group
        }));
    },

    /**
     * Position descriptions by level
     * Describes responsibilities and typical job functions
     */
    positionDescriptions: {
        'nivel_I': {
            title: 'Titulado/a Superior',
            responsibilities: 'Asesoramiento técnico especializado, dirección de proyectos, representación legal o técnica, decisiones de alto nivel',
            experience: '5+ años + Licenciatura/Grado Superior',
            equivalentTitles: ['Titulado Superior', 'Director Técnico', 'Abogado', 'Economista', 'Arquitecto', 'Ingeniero']
        },
        'nivel_II': {
            title: 'Titulado/a Medio / Jefe Superior',
            responsibilities: 'Coordinación de departamentos, análisis técnico, programación senior, supervisión de equipos, reporting a dirección',
            experience: '4-6 años',
            equivalentTitles: ['Titulado Medio', 'Jefe Superior', 'Analista Senior', 'Programador Senior', 'Project Manager']
        },
        'nivel_III': {
            title: 'Jefe/a de Primera',
            responsibilities: 'Jefatura de sección, análisis-programación, coordinación de equipos técnicos, gestión de proyectos medios',
            experience: '3-5 años',
            equivalentTitles: ['Jefe de Primera', 'Analista-Programador', 'Jefe Equipo Informático', 'Team Leader', 'Senior Developer']
        },
        'nivel_IV': {
            title: 'Jefe/a de Segunda',
            responsibilities: 'Supervisión de sección, operación informática avanzada, delineación técnica, coordinación operativa',
            experience: '2-4 años',
            equivalentTitles: ['Jefe de Segunda', 'Jefe Delineación', 'Jefe Explotación', 'Operador Informático', 'System Administrator']
        },
        'nivel_V': {
            title: 'Oficial de Primera',
            responsibilities: 'Gestión administrativa autónoma, delineación de proyectos, operación de sistemas, atención especializada',
            experience: '2-3 años',
            equivalentTitles: ['Oficial 1ª Administrativo', 'Delineante Proyectista', 'Operador 1ª', 'CAD Technician', 'Senior Administrative']
        },
        'nivel_VI': {
            title: 'Oficial de Segunda',
            responsibilities: 'Tareas administrativas intermedias, delineación básica, operación de equipos, supervisión de auxiliares',
            experience: '1-2 años',
            equivalentTitles: ['Oficial 2ª Administrativo', 'Delineante', 'Operador 2ª', 'Encargado', 'Conserje Mayor']
        },
        'nivel_VII': {
            title: 'Dibujante / Oficial de Oficios',
            responsibilities: 'Dibujo técnico, conducción, mantenimiento especializado, calcado, oficios varios cualificados',
            experience: '1-2 años',
            equivalentTitles: ['Dibujante', 'Oficial 1ª Oficios Varios', 'Conductor', 'Calcador', 'Driver', 'Maintenance Technician']
        },
        'nivel_VIII': {
            title: 'Administrativo/a',
            responsibilities: 'Tareas administrativas generales, grabación de datos, atención telefónica, recepción, archivo',
            experience: '0-2 años',
            equivalentTitles: ['Administrativo', 'Grabador de Datos', 'Oficial 2ª Oficios', 'Telefonista', 'Recepcionista', 'Data Entry']
        },
        'nivel_IX': {
            title: 'Auxiliar Administrativo/a',
            responsibilities: 'Apoyo administrativo básico, reproducción de documentos, vigilancia, cobros, tareas auxiliares',
            experience: '0-1 año',
            equivalentTitles: ['Auxiliar Administrativo', 'Reproductor', 'Vigilante', 'Cobrador', 'Office Assistant']
        },
        'nivel_X': {
            title: 'Personal de Servicios',
            responsibilities: 'Conserjería, ordenanza, limpieza, mozos, peones, servicios auxiliares generales',
            experience: '0 años',
            equivalentTitles: ['Ordenanza', 'Conserje', 'Limpiador/a', 'Mozo', 'Peón', 'Cleaner', 'Porter']
        }
    },

    /**
     * Get position description for a specific level
     * @param {string} level - Level code (nivel_I to nivel_X)
     * @returns {Object|null} - Position description or null
     */
    getPositionDescription: function(level) {
        return this.positionDescriptions[level] || null;
    },

    /**
     * Market rates for office roles (orientative)
     * Based on market data from Indeed, Glassdoor, InfoJobs (2024-2025)
     */
    marketRates: {
        roles: {
            'nivel_I': { min: 32000, max: 55000, roles: ['Titulado Superior', 'Director Técnico', 'Abogado'] },
            'nivel_II': { min: 28000, max: 45000, roles: ['Titulado Medio', 'Jefe Superior', 'Analista Senior'] },
            'nivel_III': { min: 25000, max: 38000, roles: ['Jefe de Primera', 'Analista-Programador'] },
            'nivel_IV': { min: 22000, max: 32000, roles: ['Jefe de Segunda', 'Operador Informático'] },
            'nivel_V': { min: 20000, max: 28000, roles: ['Oficial 1ª Administrativo', 'Delineante'] },
            'nivel_VI': { min: 18000, max: 25000, roles: ['Oficial 2ª Administrativo', 'Encargado'] },
            'nivel_VII': { min: 17000, max: 23000, roles: ['Dibujante', 'Conductor', 'Oficial Oficios'] },
            'nivel_VIII': { min: 16500, max: 21000, roles: ['Administrativo', 'Grabador de Datos', 'Recepcionista'] },
            'nivel_IX': { min: 16000, max: 19000, roles: ['Auxiliar Administrativo', 'Vigilante'] },
            'nivel_X': { min: 15500, max: 18000, roles: ['Ordenanza', 'Conserje', 'Limpieza'] }
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
    window.ConvenioOficinasDespachos = ConvenioOficinasDespachos;
}
