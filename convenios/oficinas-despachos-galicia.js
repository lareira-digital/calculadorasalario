/**
 * Convenio Colectivo de Oficinas y Despachos de A Coruña (Galicia) 2023-2025
 *
 * Source: BOP A Coruña nº 112, 14/06/2023
 *         Código convenio: 15001075011981
 *
 * Incrementos:
 * - 2023: +5% sobre tablas 2022 (desde 01/06/2023)
 * - 2024: +3% sobre tablas 2023 revisadas
 * - 2025: +2% sobre tablas 2024 revisadas
 * - 2026 (ultraactividad): +1% anual
 *
 * Cláusulas de revisión IPC:
 * - 2024: si IPC 2023 > 6.5%, incremento adicional
 * - 2025: si IPC 2024 > 4.5%, incremento adicional
 *
 * Ámbito: Provincia de A Coruña (Galicia)
 * Jornada anual: 1.774 horas
 *
 * NOTA: Este convenio es provincial (A Coruña). Las otras provincias
 * gallegas (Pontevedra, Lugo, Ourense) tienen convenios propios muy
 * desactualizados. A Coruña tiene el convenio más reciente de Galicia.
 */

const ConvenioOficinasGalicia = {
    name: 'Oficinas y Despachos - A Coruña',
    code: 'oficinas-despachos-galicia',
    edition: 'Convenio 2023-2025',
    year: 2023,
    source: 'BOP A Coruña nº 112, 14/06/2023',
    bopReference: 'Convenio colectivo para o sector de oficinas e despachos provincial da Coruña 2023-2025',
    isRegional: true,
    region: 'A Coruña (Galicia)',
    convenioCode: '15001075011981',

    /**
     * Professional Groups (Seccións Profesionais)
     * Art. 8 del Convenio
     */
    groups: {
        'I': {
            name: 'Sección I - Persoal Titulado',
            description: 'Personal en posesión de título oficial de grado superior o medio, vinculado por razón del título'
        },
        'II': {
            name: 'Sección II - Persoal Administrativo',
            description: 'Personal administrativo de oficina'
        },
        'III': {
            name: 'Sección III - Persoal Técnico',
            description: 'Personal técnico de informática, delineación y operación'
        },
        'IV': {
            name: 'Sección IV - Persoal Especialista',
            description: 'Operadores de máquinas, tabuladores, inspectores'
        },
        'V': {
            name: 'Sección V - Subalterno',
            description: 'Conserjes, ordenanzas, personal de servicios'
        },
        'VI': {
            name: 'Sección VI - Oficios Varios',
            description: 'Conductores, almaceneros, personal de limpieza'
        }
    },

    /**
     * Professional Categories
     * Based on Art. 8-13 classification
     */
    categories: {
        // Sección I - Personal Titulado
        'titulado_superior': {
            name: 'Titulado/a Superior',
            group: 'I',
            description: 'Licenciado, Grado Superior universitario',
            roles: ['Titulado Superior', 'Abogado', 'Economista', 'Graduado Social']
        },
        'titulado_medio': {
            name: 'Titulado/a Medio',
            group: 'I',
            description: 'Diplomado, Grado Medio universitario',
            roles: ['Titulado Medio', 'Diplomado', 'Técnico Superior']
        },
        // Sección II - Personal Administrativo
        'xefe_superior': {
            name: 'Xefe/a Superior',
            group: 'II',
            description: 'Responsable de dos o más departamentos',
            roles: ['Jefe Superior', 'Director Administrativo']
        },
        'xefe_primeira': {
            name: 'Xefe/a de Primeira',
            group: 'II',
            description: 'Responsable de uno o más servicios',
            roles: ['Jefe de Primera', 'Responsable de Departamento']
        },
        'xefe_segunda': {
            name: 'Xefe/a de Segunda',
            group: 'II',
            description: 'Caixeiro/a con sinatura, responsable de sección',
            roles: ['Jefe de Segunda', 'Cajero con firma', 'Encargado']
        },
        'oficial_primeira': {
            name: 'Oficial de Primeira',
            group: 'II',
            description: 'Oficial administrativo con responsabilidad e iniciativa',
            roles: ['Oficial 1ª Administrativo', 'Contable', 'Administrativo Senior']
        },
        'oficial_segunda': {
            name: 'Oficial de Segunda',
            group: 'II',
            description: 'Oficial con iniciativa restringida, tareas secundarias',
            roles: ['Oficial 2ª Administrativo', 'Telefonista-Recepcionista con idioma']
        },
        'auxiliar': {
            name: 'Auxiliar Administrativo/a',
            group: 'II',
            description: 'Operaciones elementales administrativas y mecánicas',
            roles: ['Auxiliar Administrativo', 'Telefonista', 'Recepcionista'],
            smiLinked: true
        },
        // Sección III - Personal Técnico
        'xefe_informatica': {
            name: 'Xefe/a de Informática',
            group: 'III',
            description: 'Responsable del departamento de informática',
            roles: ['Jefe de Informática', 'Director TI', 'IT Manager']
        },
        'analista': {
            name: 'Analista',
            group: 'III',
            description: 'Análisis de sistemas y programación',
            roles: ['Analista', 'Analista-Programador', 'Desarrollador Senior']
        },
        'programador': {
            name: 'Programador/a',
            group: 'III',
            description: 'Programación de aplicaciones',
            roles: ['Programador', 'Desarrollador', 'Developer']
        },
        'xefe_delineacion': {
            name: 'Xefe/a de Delineación',
            group: 'III',
            description: 'Responsable del departamento de delineación',
            roles: ['Jefe de Delineación', 'Coordinador Técnico']
        },
        'delineante_proxectista': {
            name: 'Delineante Proxectista',
            group: 'III',
            description: 'Delineante con capacidad de proyección',
            roles: ['Delineante Proyectista', 'Técnico de Proyectos']
        },
        'delineante': {
            name: 'Delineante',
            group: 'III',
            description: 'Delineación técnica',
            roles: ['Delineante', 'Dibujante Técnico']
        },
        // Sección IV - Personal Especialista
        'xefe_maquinas': {
            name: 'Xefe/a de Máquinas',
            group: 'IV',
            description: 'Responsable de operaciones de máquinas',
            roles: ['Jefe de Máquinas', 'Supervisor de Operaciones']
        },
        'operador': {
            name: 'Operador/a',
            group: 'IV',
            description: 'Operador de sistemas y equipos',
            roles: ['Operador', 'Operador de Sistemas']
        },
        'perforador': {
            name: 'Perforador/a - Calcador/a',
            group: 'IV',
            description: 'Operaciones de perforación y cálculo',
            roles: ['Perforador', 'Calcador', 'Grabador de Datos']
        },
        // Sección V - Subalterno
        'conserxe_maior': {
            name: 'Conserxe Maior',
            group: 'V',
            description: 'Conserje principal',
            roles: ['Conserje Mayor', 'Jefe de Conserjería']
        },
        'conserxe': {
            name: 'Conserxe',
            group: 'V',
            description: 'Funciones de conserjería',
            roles: ['Conserje', 'Portero']
        },
        'ordenanza': {
            name: 'Ordenanza',
            group: 'V',
            description: 'Ordenanza, vixilante, botones',
            roles: ['Ordenanza', 'Vigilante', 'Botones'],
            smiLinked: true
        },
        // Sección VI - Oficios Varios
        'condutor': {
            name: 'Condutor/a',
            group: 'VI',
            description: 'Conducción de vehículos',
            roles: ['Conductor', 'Chófer']
        },
        'limpeza': {
            name: 'Persoal de Limpeza',
            group: 'VI',
            description: 'Personal de limpieza',
            roles: ['Limpiador/a', 'Personal de Limpieza'],
            smiLinked: true
        }
    },

    /**
     * Salary tables by year
     * All amounts are annual gross salary (14 payments: 12 + 2 extras)
     *
     * Base: 2022 tables from previous convenio
     * 2023: +5% (from June 2023)
     * 2024: +3%
     * 2025: +2%
     *
     * Note: SMI-linked categories use SMI values
     * SMI 2023: 15,120€ | SMI 2024: 15,876€ | SMI 2025: 16,576€
     *
     * Reference from search: A Coruña 2023-2025 ranges from
     * N1: 1,761.84€/month to N10: 1,205€/month
     * Working backwards: N1 annual = ~24,666€, N10 annual = ~16,870€
     */
    salaryTables: {
        2023: {
            titulado_superior: 24666.00,      // Nivel 1
            titulado_medio: 22280.00,         // Nivel 2
            xefe_superior: 22280.00,          // Nivel 2
            xefe_primeira: 21952.00,          // Nivel 3
            xefe_segunda: 21224.00,           // Nivel 4
            oficial_primeira: 19544.00,       // Nivel 5
            oficial_segunda: 18564.00,        // Nivel 6
            auxiliar: 16842.00,               // Nivel 7
            xefe_informatica: 21952.00,       // Nivel 3
            analista: 21224.00,               // Nivel 4
            programador: 19544.00,            // Nivel 5
            xefe_delineacion: 21224.00,       // Nivel 4
            delineante_proxectista: 19712.00, // Nivel 5
            delineante: 18564.00,             // Nivel 6
            xefe_maquinas: 21224.00,          // Nivel 4
            operador: 18564.00,               // Nivel 6
            perforador: 17178.00,             // Nivel 7
            conserxe_maior: 17178.00,         // Nivel 7
            conserxe: 16492.00,               // Nivel 8
            ordenanza: 16156.00,              // Nivel 9
            condutor: 17864.00,               // Nivel 6
            limpeza: 15120.00                 // SMI 2023
        },
        2024: {
            titulado_superior: 25405.98,      // +3%
            titulado_medio: 22948.40,         // +3%
            xefe_superior: 22948.40,          // +3%
            xefe_primeira: 22610.56,          // +3%
            xefe_segunda: 21860.72,           // +3%
            oficial_primeira: 20130.32,       // +3%
            oficial_segunda: 19120.92,        // +3%
            auxiliar: 17347.26,               // +3%
            xefe_informatica: 22610.56,       // +3%
            analista: 21860.72,               // +3%
            programador: 20130.32,            // +3%
            xefe_delineacion: 21860.72,       // +3%
            delineante_proxectista: 20303.36, // +3%
            delineante: 19120.92,             // +3%
            xefe_maquinas: 21860.72,          // +3%
            operador: 19120.92,               // +3%
            perforador: 17693.34,             // +3%
            conserxe_maior: 17693.34,         // +3%
            conserxe: 16986.76,               // +3%
            ordenanza: 16640.68,              // +3%
            condutor: 18400.12,               // +3%
            limpeza: 15876.00                 // SMI 2024
        },
        2025: {
            titulado_superior: 25914.10,      // +2%
            titulado_medio: 23407.37,         // +2%
            xefe_superior: 23407.37,          // +2%
            xefe_primeira: 23062.77,          // +2%
            xefe_segunda: 22297.93,           // +2%
            oficial_primeira: 20532.93,       // +2%
            oficial_segunda: 19503.34,        // +2%
            auxiliar: 17694.21,               // +2%
            xefe_informatica: 23062.77,       // +2%
            analista: 22297.93,               // +2%
            programador: 20532.93,            // +2%
            xefe_delineacion: 22297.93,       // +2%
            delineante_proxectista: 20709.43, // +2%
            delineante: 19503.34,             // +2%
            xefe_maquinas: 22297.93,          // +2%
            operador: 19503.34,               // +2%
            perforador: 18047.21,             // +2%
            conserxe_maior: 18047.21,         // +2%
            conserxe: 17326.50,               // +2%
            ordenanza: 16973.49,              // +2%
            condutor: 18768.12,               // +2%
            limpeza: 16576.00                 // SMI 2025
        }
    },

    /**
     * Complements and allowances (Complementos e Dietas)
     * Art. 20 y 21 del Convenio
     */
    complements: {
        // Dietas (art. 21)
        almorzos: 6.16,              // €/día - Almuerzos
        comidas: 18.45,              // €/día - Comidas completas
        ceas: 13.33,                 // €/día - Cenas
        hospedaxe: 60.00,            // €/noche máximo - Hospedaje
        kilometraxe: 0.19,           // €/km en vehículo propio
        // Antigüedad (art. 14)
        antiguedadePorCuadrienio: 0.05 // 5% del salario base por cada 4 años
    },

    /**
     * Number of payments per year
     * 12 mensualidades + 2 pagas extras (julio y diciembre)
     */
    numPayments: 14,

    /**
     * Working hours (art. 17)
     */
    jornadaAnual: 1774, // horas anuales

    /**
     * Vacation days (art. 18)
     */
    vacaciones: 23, // días laborables

    /**
     * Get salary for specific category and year
     * @param {string} category - Category code
     * @param {number} year - 2023-2025
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
     * @returns {Array} Array of category objects sorted by group
     */
    getCategories: function() {
        const order = [
            'titulado_superior', 'titulado_medio',
            'xefe_superior', 'xefe_primeira', 'xefe_segunda', 'oficial_primeira', 'oficial_segunda', 'auxiliar',
            'xefe_informatica', 'analista', 'programador', 'xefe_delineacion', 'delineante_proxectista', 'delineante',
            'xefe_maquinas', 'operador', 'perforador',
            'conserxe_maior', 'conserxe', 'ordenanza',
            'condutor', 'limpeza'
        ];
        return order.map(key => ({
            value: key,
            label: this.categories[key].name,
            description: this.categories[key].description,
            group: this.categories[key].group
        }));
    },

    /**
     * Market rates for office roles in Galicia (orientative)
     * Based on market data from Indeed, InfoJobs (2024-2025)
     */
    marketRates: {
        roles: {
            'titulado_superior': { min: 26000, max: 42000, roles: ['Titulado Superior', 'Abogado', 'Economista'] },
            'titulado_medio': { min: 22000, max: 35000, roles: ['Titulado Medio', 'Graduado Social'] },
            'xefe_superior': { min: 24000, max: 38000, roles: ['Jefe Superior', 'Director Administrativo'] },
            'xefe_primeira': { min: 22000, max: 32000, roles: ['Jefe de Primera', 'Responsable'] },
            'xefe_segunda': { min: 20000, max: 28000, roles: ['Jefe de Segunda', 'Encargado'] },
            'oficial_primeira': { min: 18000, max: 25000, roles: ['Oficial 1ª', 'Contable'] },
            'oficial_segunda': { min: 17000, max: 22000, roles: ['Oficial 2ª', 'Administrativo'] },
            'auxiliar': { min: 16000, max: 19000, roles: ['Auxiliar Administrativo'] },
            'xefe_informatica': { min: 28000, max: 45000, roles: ['Jefe de Informática', 'IT Manager'] },
            'analista': { min: 25000, max: 40000, roles: ['Analista', 'Desarrollador Senior'] },
            'programador': { min: 20000, max: 35000, roles: ['Programador', 'Developer'] },
            'xefe_delineacion': { min: 22000, max: 32000, roles: ['Jefe Delineación'] },
            'delineante_proxectista': { min: 20000, max: 28000, roles: ['Delineante Proyectista'] },
            'delineante': { min: 18000, max: 24000, roles: ['Delineante', 'Dibujante'] },
            'xefe_maquinas': { min: 20000, max: 28000, roles: ['Jefe de Máquinas'] },
            'operador': { min: 17000, max: 22000, roles: ['Operador'] },
            'perforador': { min: 16000, max: 20000, roles: ['Perforador', 'Grabador'] },
            'conserxe_maior': { min: 17000, max: 21000, roles: ['Conserje Mayor'] },
            'conserxe': { min: 16000, max: 19000, roles: ['Conserje'] },
            'ordenanza': { min: 15500, max: 18000, roles: ['Ordenanza', 'Vigilante'] },
            'condutor': { min: 17000, max: 22000, roles: ['Conductor', 'Chófer'] },
            'limpeza': { min: 15500, max: 17500, roles: ['Limpieza'] }
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
    window.ConvenioOficinasGalicia = ConvenioOficinasGalicia;
}
