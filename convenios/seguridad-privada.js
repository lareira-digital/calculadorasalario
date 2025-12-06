/**
 * Convenio Colectivo Estatal de Empresas de Seguridad Privada (2023-2026)
 *
 * Source: BOE-A-2022-21175 (Convenio original)
 *         BOE-A-2024-7784 (Tablas 2024)
 *         BOE-A-2025-5172 (Tablas 2025)
 *
 * Incrementos: +6% (2023), +4% (2024), +3% (2025), +3% (2026)
 * Total acumulado: +16% en 4 años
 *
 * Ámbito: Nacional (todo el territorio español)
 */

const ConvenioSeguridadPrivada = {
    name: 'Seguridad Privada',
    code: 'seguridad-privada',
    edition: 'Convenio 2022',
    year: 2022,
    source: 'BOE-A-2022-21175',
    boeReference: 'Convenio Colectivo Estatal de Empresas de Seguridad 2023-2026',

    /**
     * Professional Groups (Grupos Profesionales)
     */
    groups: {
        'vigilancia': {
            name: 'Personal de Vigilancia',
            description: 'Vigilantes de seguridad, escoltas, vigilantes de explosivos'
        },
        'proteccion': {
            name: 'Personal de Protección',
            description: 'Escoltas privados, protección de personas'
        },
        'mecanica': {
            name: 'Personal de Seguridad Mecánico-Electrónica',
            description: 'Técnicos de sistemas, instaladores'
        },
        'administrativo': {
            name: 'Personal Administrativo',
            description: 'Administrativos, teleoperadores'
        },
        'direccion': {
            name: 'Personal de Dirección/Jefatura',
            description: 'Jefes de seguridad, directores de seguridad'
        },
        'subalterno': {
            name: 'Personal Subalterno',
            description: 'Ordenanzas, almaceneros, limpiadores'
        }
    },

    /**
     * Categories within each group
     */
    categories: {
        // Personal de Vigilancia
        'vs_sin_arma': { group: 'vigilancia', name: 'Vigilante de Seguridad (sin arma)', level: 1 },
        'vs_con_arma': { group: 'vigilancia', name: 'Vigilante de Seguridad (con arma)', level: 2 },
        'vs_explosivos': { group: 'vigilancia', name: 'Vigilante de Explosivos', level: 3 },

        // Personal de Protección
        'escolta': { group: 'proteccion', name: 'Escolta Privado', level: 2 },

        // Personal Mecánico-Electrónico
        'tecnico': { group: 'mecanica', name: 'Técnico / Especialista', level: 2 },
        'jefe_equipo_tec': { group: 'mecanica', name: 'Jefe de Equipo Técnico', level: 3 },

        // Personal Administrativo
        'aux_admin': { group: 'administrativo', name: 'Auxiliar Administrativo', level: 1 },
        'oficial_admin': { group: 'administrativo', name: 'Oficial Administrativo', level: 2 },
        'teleoperador': { group: 'administrativo', name: 'Teleoperador CRA', level: 1 },

        // Personal de Dirección
        'jefe_seguridad': { group: 'direccion', name: 'Jefe de Seguridad', level: 4 },
        'director_seguridad': { group: 'direccion', name: 'Director de Seguridad', level: 5 },

        // Personal Subalterno
        'ordenanza': { group: 'subalterno', name: 'Ordenanza / Conserje', level: 1 },
        'almacenero': { group: 'subalterno', name: 'Almacenero', level: 1 },
        'limpiador': { group: 'subalterno', name: 'Limpiador/a', level: 1 }
    },

    /**
     * Salary tables by year
     * Base salary + complements = total monthly
     *
     * Components:
     * - salarioBase: Base salary
     * - plusPeligrosidad: Hazard pay
     * - plusActividad: Activity bonus
     * - plusTransporte: Transport allowance
     * - plusVestuario: Uniform allowance (where applicable)
     *
     * All amounts in euros, monthly basis, 15 payments (12 + 3 extras)
     */
    salaryTables: {
        2023: {
            'vs_sin_arma':      { base: 1063.36, peligrosidad: 22.05, actividad: 126.22, transporte: 102.81, vestuario: 0, total: 1314.44 },
            'vs_con_arma':      { base: 1063.36, peligrosidad: 164.72, actividad: 126.22, transporte: 102.81, vestuario: 0, total: 1457.11 },
            'vs_explosivos':    { base: 1063.36, peligrosidad: 219.63, actividad: 126.22, transporte: 102.81, vestuario: 0, total: 1512.02 },
            'escolta':          { base: 1063.36, peligrosidad: 162.23, actividad: 126.22, transporte: 105.92, vestuario: 0, total: 1457.73 },
            'tecnico':          { base: 1042.31, peligrosidad: 0, actividad: 0, transporte: 126.22, vestuario: 103.94, total: 1272.47 },
            'jefe_equipo_tec':  { base: 1156.88, peligrosidad: 0, actividad: 0, transporte: 126.22, vestuario: 103.94, total: 1387.04 },
            'aux_admin':        { base: 1017.62, peligrosidad: 0, actividad: 24.58, transporte: 126.22, vestuario: 0, total: 1168.42 },
            'oficial_admin':    { base: 1063.36, peligrosidad: 0, actividad: 24.58, transporte: 126.22, vestuario: 0, total: 1214.16 },
            'teleoperador':     { base: 890.03, peligrosidad: 0, actividad: 152.37, transporte: 126.22, vestuario: 0, total: 1168.62 },
            'jefe_seguridad':   { base: 1378.46, peligrosidad: 164.72, actividad: 126.22, transporte: 102.81, vestuario: 0, total: 1772.21 },
            'director_seguridad': { base: 1838.00, peligrosidad: 0, actividad: 150.00, transporte: 126.22, vestuario: 0, total: 2114.22 },
            'ordenanza':        { base: 1005.85, peligrosidad: 0, actividad: 36.57, transporte: 126.22, vestuario: 0, total: 1168.64 },
            'almacenero':       { base: 1017.62, peligrosidad: 0, actividad: 24.58, transporte: 126.22, vestuario: 0, total: 1168.42 },
            'limpiador':        { base: 1005.85, peligrosidad: 0, actividad: 36.57, transporte: 126.22, vestuario: 0, total: 1168.64 }
        },
        2024: {
            'vs_sin_arma':      { base: 1105.90, peligrosidad: 22.93, actividad: 131.27, transporte: 106.92, vestuario: 0, total: 1367.02 },
            'vs_con_arma':      { base: 1105.90, peligrosidad: 171.31, actividad: 131.27, transporte: 106.92, vestuario: 0, total: 1515.40 },
            'vs_explosivos':    { base: 1105.90, peligrosidad: 228.42, actividad: 131.27, transporte: 106.92, vestuario: 0, total: 1572.51 },
            'escolta':          { base: 1105.90, peligrosidad: 168.72, actividad: 131.27, transporte: 110.16, vestuario: 0, total: 1516.05 },
            'tecnico':          { base: 1084.00, peligrosidad: 0, actividad: 0, transporte: 131.27, vestuario: 108.10, total: 1323.37 },
            'jefe_equipo_tec':  { base: 1203.16, peligrosidad: 0, actividad: 0, transporte: 131.27, vestuario: 108.10, total: 1442.53 },
            'aux_admin':        { base: 1058.32, peligrosidad: 0, actividad: 25.56, transporte: 131.27, vestuario: 0, total: 1215.15 },
            'oficial_admin':    { base: 1105.90, peligrosidad: 0, actividad: 25.56, transporte: 131.27, vestuario: 0, total: 1262.73 },
            'teleoperador':     { base: 925.63, peligrosidad: 0, actividad: 158.46, transporte: 131.27, vestuario: 0, total: 1215.36 },
            'jefe_seguridad':   { base: 1433.60, peligrosidad: 171.31, actividad: 131.27, transporte: 106.92, vestuario: 0, total: 1843.10 },
            'director_seguridad': { base: 1911.52, peligrosidad: 0, actividad: 156.00, transporte: 131.27, vestuario: 0, total: 2198.79 },
            'ordenanza':        { base: 1046.08, peligrosidad: 0, actividad: 38.03, transporte: 131.27, vestuario: 0, total: 1215.38 },
            'almacenero':       { base: 1058.32, peligrosidad: 0, actividad: 25.56, transporte: 131.27, vestuario: 0, total: 1215.15 },
            'limpiador':        { base: 1046.08, peligrosidad: 0, actividad: 38.03, transporte: 131.27, vestuario: 0, total: 1215.38 }
        },
        2025: {
            'vs_sin_arma':      { base: 1139.08, peligrosidad: 23.62, actividad: 135.21, transporte: 110.13, vestuario: 0, total: 1408.04 },
            'vs_con_arma':      { base: 1139.08, peligrosidad: 176.45, actividad: 135.21, transporte: 110.13, vestuario: 0, total: 1560.87 },
            'vs_explosivos':    { base: 1139.08, peligrosidad: 235.27, actividad: 135.21, transporte: 110.13, vestuario: 0, total: 1619.69 },
            'escolta':          { base: 1139.08, peligrosidad: 173.78, actividad: 135.21, transporte: 113.46, vestuario: 0, total: 1561.53 },
            'tecnico':          { base: 1116.52, peligrosidad: 0, actividad: 0, transporte: 135.21, vestuario: 111.34, total: 1363.07 },
            'jefe_equipo_tec':  { base: 1239.25, peligrosidad: 0, actividad: 0, transporte: 135.21, vestuario: 111.34, total: 1485.80 },
            'aux_admin':        { base: 1090.07, peligrosidad: 0, actividad: 26.33, transporte: 135.21, vestuario: 0, total: 1251.61 },
            'oficial_admin':    { base: 1139.08, peligrosidad: 0, actividad: 26.33, transporte: 135.21, vestuario: 0, total: 1300.62 },
            'teleoperador':     { base: 953.40, peligrosidad: 0, actividad: 163.21, transporte: 135.21, vestuario: 0, total: 1251.82 },
            'jefe_seguridad':   { base: 1476.61, peligrosidad: 176.45, actividad: 135.21, transporte: 110.13, vestuario: 0, total: 1898.40 },
            'director_seguridad': { base: 1968.87, peligrosidad: 0, actividad: 160.68, transporte: 135.21, vestuario: 0, total: 2264.76 },
            'ordenanza':        { base: 1077.46, peligrosidad: 0, actividad: 39.17, transporte: 135.21, vestuario: 0, total: 1251.84 },
            'almacenero':       { base: 1090.07, peligrosidad: 0, actividad: 26.33, transporte: 135.21, vestuario: 0, total: 1251.61 },
            'limpiador':        { base: 1077.46, peligrosidad: 0, actividad: 39.17, transporte: 135.21, vestuario: 0, total: 1251.84 }
        },
        2026: {
            'vs_sin_arma':      { base: 1173.25, peligrosidad: 24.33, actividad: 139.27, transporte: 113.43, vestuario: 0, total: 1450.28 },
            'vs_con_arma':      { base: 1173.25, peligrosidad: 181.74, actividad: 139.27, transporte: 113.43, vestuario: 0, total: 1607.69 },
            'vs_explosivos':    { base: 1173.25, peligrosidad: 242.33, actividad: 139.27, transporte: 113.43, vestuario: 0, total: 1668.28 },
            'escolta':          { base: 1173.25, peligrosidad: 178.99, actividad: 139.27, transporte: 116.86, vestuario: 0, total: 1608.37 },
            'tecnico':          { base: 1150.02, peligrosidad: 0, actividad: 0, transporte: 139.27, vestuario: 114.68, total: 1403.97 },
            'jefe_equipo_tec':  { base: 1276.43, peligrosidad: 0, actividad: 0, transporte: 139.27, vestuario: 114.68, total: 1530.38 },
            'aux_admin':        { base: 1122.77, peligrosidad: 0, actividad: 27.12, transporte: 139.27, vestuario: 0, total: 1289.16 },
            'oficial_admin':    { base: 1173.25, peligrosidad: 0, actividad: 27.12, transporte: 139.27, vestuario: 0, total: 1339.64 },
            'teleoperador':     { base: 982.00, peligrosidad: 0, actividad: 168.11, transporte: 139.27, vestuario: 0, total: 1289.38 },
            'jefe_seguridad':   { base: 1520.91, peligrosidad: 181.74, actividad: 139.27, transporte: 113.43, vestuario: 0, total: 1955.35 },
            'director_seguridad': { base: 2027.93, peligrosidad: 0, actividad: 165.50, transporte: 139.27, vestuario: 0, total: 2332.70 },
            'ordenanza':        { base: 1109.78, peligrosidad: 0, actividad: 40.34, transporte: 139.27, vestuario: 0, total: 1289.39 },
            'almacenero':       { base: 1122.77, peligrosidad: 0, actividad: 27.12, transporte: 139.27, vestuario: 0, total: 1289.16 },
            'limpiador':        { base: 1109.78, peligrosidad: 0, actividad: 40.34, transporte: 139.27, vestuario: 0, total: 1289.39 }
        }
    },

    /**
     * Additional complements (monthly)
     */
    complements: {
        2023: {
            nocturnidad: 1.15,      // €/hora (22:00-06:00)
            festividad: 0.93,       // €/hora
            horaExtra: 9.14,        // €/hora
            antiguedadTrienio: 33.41,  // €/mes por trienio
            antiguedadQuinquenio: 55.68, // €/mes por quinquenio
            plusEscolta: 1.72      // €/hora adicional para escolta
        },
        2024: {
            nocturnidad: 1.20,
            festividad: 0.97,
            horaExtra: 9.51,
            antiguedadTrienio: 34.75,
            antiguedadQuinquenio: 57.91,
            plusEscolta: 1.79
        },
        2025: {
            nocturnidad: 1.24,
            festividad: 1.00,
            horaExtra: 9.80,
            antiguedadTrienio: 35.79,
            antiguedadQuinquenio: 59.65,
            plusEscolta: 1.84
        },
        2026: {
            nocturnidad: 1.28,
            festividad: 1.03,
            horaExtra: 10.09,
            antiguedadTrienio: 36.86,
            antiguedadQuinquenio: 61.44,
            plusEscolta: 1.90
        }
    },

    /**
     * Number of payments per year (12 monthly + 3 extras)
     */
    numPayments: 15,

    /**
     * Get salary for specific category and year
     * @param {string} category - Category code
     * @param {number} year - 2023, 2024, 2025, or 2026
     * @returns {Object|null} Salary details or null if not found
     */
    getSalary: function(category, year) {
        const yearTable = this.salaryTables[year];
        if (!yearTable) return null;

        const salaryData = yearTable[category];
        if (!salaryData) return null;

        const categoryInfo = this.categories[category];
        if (!categoryInfo) return null;

        // Annual = monthly total * 15 payments
        const annual = salaryData.total * this.numPayments;

        return {
            monthly: salaryData.total,
            annual: annual,
            total: annual,
            breakdown: {
                base: salaryData.base,
                peligrosidad: salaryData.peligrosidad,
                actividad: salaryData.actividad,
                transporte: salaryData.transporte,
                vestuario: salaryData.vestuario
            },
            category: category,
            categoryName: categoryInfo.name,
            group: categoryInfo.group,
            groupName: this.groups[categoryInfo.group].name,
            year: year
        };
    },

    /**
     * Get all categories for dropdown
     * @returns {Array} Array of category objects grouped
     */
    getCategories: function() {
        const result = [];
        for (const [code, info] of Object.entries(this.categories)) {
            result.push({
                value: code,
                label: info.name,
                group: info.group,
                groupName: this.groups[info.group].name
            });
        }
        return result;
    },

    /**
     * Get categories grouped by professional group
     * @returns {Object} Categories organized by group
     */
    getCategoriesByGroup: function() {
        const grouped = {};
        for (const [code, info] of Object.entries(this.categories)) {
            if (!grouped[info.group]) {
                grouped[info.group] = {
                    name: this.groups[info.group].name,
                    categories: []
                };
            }
            grouped[info.group].categories.push({
                value: code,
                label: info.name
            });
        }
        return grouped;
    },

    /**
     * Market rates for security roles (orientative)
     */
    marketRates: {
        roles: {
            'vigilante_basico': { min: 16000, max: 20000, roles: ['Vigilante de Seguridad', 'Controlador de Accesos'] },
            'vigilante_armado': { min: 18000, max: 24000, roles: ['Vigilante Armado', 'Vigilante de Explosivos'] },
            'escolta': { min: 20000, max: 28000, roles: ['Escolta Privado', 'Protección de Personas'] },
            'tecnico_sistemas': { min: 20000, max: 30000, roles: ['Técnico de Sistemas', 'Instalador Alarmas'] },
            'jefe_seguridad': { min: 28000, max: 38000, roles: ['Jefe de Seguridad', 'Responsable de Seguridad'] },
            'director_seguridad': { min: 40000, max: 70000, roles: ['Director de Seguridad', 'CISO', 'CSO'] },
            'teleoperador': { min: 15000, max: 19000, roles: ['Teleoperador CRA', 'Operador de Alarmas'] },
            'administrativo': { min: 16000, max: 22000, roles: ['Administrativo', 'Oficial Administrativo'] }
        },

        /**
         * Get market rate for a category
         */
        getMarketRateForCategory: function(category) {
            const categoryMap = {
                'vs_sin_arma': 'vigilante_basico',
                'vs_con_arma': 'vigilante_armado',
                'vs_explosivos': 'vigilante_armado',
                'escolta': 'escolta',
                'tecnico': 'tecnico_sistemas',
                'jefe_equipo_tec': 'tecnico_sistemas',
                'aux_admin': 'administrativo',
                'oficial_admin': 'administrativo',
                'teleoperador': 'teleoperador',
                'jefe_seguridad': 'jefe_seguridad',
                'director_seguridad': 'director_seguridad',
                'ordenanza': 'administrativo',
                'almacenero': 'administrativo',
                'limpiador': 'administrativo'
            };

            const marketKey = categoryMap[category];
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
    window.ConvenioSeguridadPrivada = ConvenioSeguridadPrivada;
}
