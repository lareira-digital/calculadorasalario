/**
 * Convenio Colectivo de Hostelería - Comunidad de Madrid (2023-2025)
 * Based on the Madrid Hospitality Agreement which follows ALEH framework
 *
 * IMPORTANT: This uses Madrid regional data as reference. Other regions may have
 * different salary tables. Users should check their regional official bulletin.
 *
 * Source: BOCM (Boletín Oficial de la Comunidad de Madrid) 2024
 * Published: 6 April 2024
 */

const ConvenioHosteleria = {
    name: 'Hostelería (Comunidad de Madrid)',
    code: 'hosteleria-madrid',
    source: 'BOCM 6 abril 2024',
    boeReference: 'Convenio Colectivo de Hostelería y Actividades Turísticas de la Comunidad de Madrid 2023-2025',

    // Regional notice - displayed to user
    regionalNotice: 'Este convenio usa las tablas de la Comunidad de Madrid como referencia. ' +
        'Cada Comunidad Autónoma tiene su propio convenio provincial/autonómico con tablas salariales diferentes. ' +
        'Consulta el Boletín Oficial de tu provincia o comunidad para datos exactos.',

    /**
     * Establishment Groups (Grupos de Establecimiento)
     * Determines salary based on establishment category
     */
    establishmentGroups: {
        'A': 'Hoteles 5*, restaurantes de alta cocina, clubs exclusivos',
        'B': 'Hoteles boutique, restaurantes de autor, bares premium',
        'C': 'Hoteles 3-4*, bistrós, cadenas de cafeterías',
        'D': 'Bares de barrio, comedores, hostales, restauración colectiva'
    },

    /**
     * Professional Levels (Niveles Profesionales)
     * Maps to ALEH professional groups
     */
    levels: {
        '1A': {
            name: 'Nivel 1A - Alta Dirección',
            description: 'Directores generales, gerentes, responsables de operaciones',
            alehGroup: 1
        },
        '1B': {
            name: 'Nivel 1B - Dirección Media',
            description: 'Jefes de cocina, jefes de sala, subdirectores de hotel',
            alehGroup: 1
        },
        '2': {
            name: 'Nivel 2 - Supervisión Técnica',
            description: 'Jefes de turno, coordinadores de cocina/servicio',
            alehGroup: 2
        },
        '3': {
            name: 'Nivel 3 - Personal Cualificado',
            description: 'Cocineros, camareros senior, sommelier, barman',
            alehGroup: 2
        },
        '4': {
            name: 'Nivel 4 - Personal Operativo',
            description: 'Camareros, ayudantes de cocina, baristas',
            alehGroup: 3
        },
        '5': {
            name: 'Nivel 5 - Personal de Apoyo',
            description: 'Aprendices, personal de limpieza, auxiliares',
            alehGroup: 3
        }
    },

    /**
     * Salary tables by year
     * Amounts are monthly base salary (14 pagas)
     * Increases: 2023 +6%, 2024 +5%, 2025 +4%
     */
    salaryTables: {
        2023: {
            'A': { '1A': 2087.00, '1B': 1908.08, '2': 1788.87, '3': 1609.93, '4': 1490.68, '5': 1431.02 },
            'B': { '1A': 1848.46, '1B': 1788.87, '2': 1729.21, '3': 1586.08, '4': 1371.42, '5': 1335.70 },
            'C': { '1A': 1788.87, '1B': 1729.21, '2': 1645.73, '3': 1466.81, '4': 1347.60, '5': 1287.99 },
            'D': { '1A': 1764.93, '1B': 1705.34, '2': 1621.86, '3': 1442.96, '4': 1323.75, '5': 1264.13 }
        },
        2024: {
            'A': { '1A': 2149.61, '1B': 1965.33, '2': 1842.53, '3': 1658.23, '4': 1535.40, '5': 1473.96 },
            'B': { '1A': 1903.92, '1B': 1842.53, '2': 1781.09, '3': 1633.67, '4': 1412.56, '5': 1375.78 },
            'C': { '1A': 1842.53, '1B': 1781.09, '2': 1695.10, '3': 1510.81, '4': 1388.03, '5': 1326.63 },
            'D': { '1A': 1817.88, '1B': 1756.50, '2': 1670.52, '3': 1486.24, '4': 1363.46, '5': 1302.05 }
        },
        2025: {
            'A': { '1A': 2235.59, '1B': 2043.94, '2': 1916.23, '3': 1724.56, '4': 1596.82, '5': 1533.92 },
            'B': { '1A': 1980.08, '1B': 1916.23, '2': 1852.33, '3': 1699.02, '4': 1469.06, '5': 1430.81 },
            'C': { '1A': 1916.23, '1B': 1852.33, '2': 1762.90, '3': 1571.24, '4': 1443.55, '5': 1380.70 },
            'D': { '1A': 1890.60, '1B': 1826.76, '2': 1737.34, '3': 1545.69, '4': 1418.00, '5': 1354.13 }
        }
    },

    /**
     * Complements and bonuses
     */
    complements: {
        2023: {
            transportAllowance: 182.27,  // Plus transporte (11 meses)
            mealsAllowance: 53.46,       // Plus manutención mensual
            nightBonus: 0.25,            // 25% over base for night work (00:00-08:00)
            nightBonusLate: 0.01,        // 1% for late evening (22:00-00:00)
            overtimeMultiplier: 2.0      // 100% over base = 2x
        },
        2024: {
            transportAllowance: 187.74,
            mealsAllowance: 55.60,
            nightBonus: 0.25,
            nightBonusLate: 0.01,
            overtimeMultiplier: 2.0
        },
        2025: {
            transportAllowance: 195.25,
            mealsAllowance: 57.82,
            nightBonus: 0.25,
            nightBonusLate: 0.01,
            overtimeMultiplier: 2.0
        }
    },

    /**
     * Get salary for specific combination
     * @param {string} establishmentGroup - 'A', 'B', 'C', or 'D'
     * @param {string} level - '1A', '1B', '2', '3', '4', or '5'
     * @param {number} year - 2023, 2024, or 2025
     * @returns {Object|null} Salary details or null if not found
     */
    getSalary: function(establishmentGroup, level, year) {
        const yearTable = this.salaryTables[year];
        if (!yearTable) return null;

        const groupTable = yearTable[establishmentGroup];
        if (!groupTable) return null;

        const monthlySalary = groupTable[level];
        if (!monthlySalary) return null;

        const complements = this.complements[year] || this.complements[2025];

        return {
            monthly: monthlySalary,
            annual: monthlySalary * 14,  // 14 pagas
            total: monthlySalary * 14,
            transportAnnual: complements.transportAllowance * 11,
            mealsAnnual: complements.mealsAllowance * 12,
            establishmentGroup: establishmentGroup,
            level: level,
            levelInfo: this.levels[level],
            year: year
        };
    },

    /**
     * Get all levels for dropdown
     * @returns {Array} Array of level objects
     */
    getLevels: function() {
        return Object.keys(this.levels).map(key => ({
            value: key,
            label: this.levels[key].name,
            description: this.levels[key].description
        }));
    },

    /**
     * Get all establishment groups for dropdown
     * @returns {Array} Array of group objects
     */
    getEstablishmentGroups: function() {
        return Object.keys(this.establishmentGroups).map(key => ({
            value: key,
            label: `Grupo ${key}`,
            description: this.establishmentGroups[key]
        }));
    },

    /**
     * Position descriptions by establishment group and level
     * Describes responsibilities and typical job functions for each category
     */
    positionDescriptions: {
        '1A': {
            title: 'Director/a General / Gerente',
            responsibilities: 'Dirección general del establecimiento, gestión de P&L, estrategia comercial, relación con proveedores y clientes VIP, supervisión de todos los departamentos',
            experience: '8+ años',
            equivalentTitles: ['Director de Hotel', 'Director de Restaurante', 'General Manager', 'Gerente', 'Director de Operaciones']
        },
        '1B': {
            title: 'Jefe/a de Cocina / Jefe/a de Sala',
            responsibilities: 'Dirección de departamento (cocina o sala), diseño de carta/menús, gestión de equipo, control de costes, formación del personal',
            experience: '5-8 años',
            equivalentTitles: ['Executive Chef', 'Head Chef', 'Jefe de Cocina', 'Maître', 'Jefe de Sala', 'F&B Manager']
        },
        '2': {
            title: 'Jefe/a de Turno / Segundo/a de Cocina',
            responsibilities: 'Supervisión de turno, coordinación de equipo durante el servicio, control de calidad, resolución de incidencias, apoyo a jefatura',
            experience: '3-5 años',
            equivalentTitles: ['Sous Chef', 'Segundo de Cocina', 'Jefe de Partida', 'Supervisor de Sala', 'Sommelier', 'Head Bartender']
        },
        '3': {
            title: 'Cocinero/a / Camarero/a Senior',
            responsibilities: 'Elaboración de platos o servicio de sala con autonomía, atención especializada al cliente, conocimiento profundo del producto',
            experience: '2-4 años',
            equivalentTitles: ['Cocinero', 'Chef de Partida', 'Camarero Senior', 'Barman', 'Bartender', 'Recepcionista de Hotel', 'Sumiller']
        },
        '4': {
            title: 'Ayudante de Cocina / Camarero/a',
            responsibilities: 'Apoyo en cocina o servicio de sala, preparación básica de alimentos, atención directa al cliente, montaje y desmontaje',
            experience: '0-2 años',
            equivalentTitles: ['Ayudante de Cocina', 'Commis', 'Camarero', 'Waiter', 'Waitress', 'Barista', 'Camarera de Pisos', 'Room Attendant']
        },
        '5': {
            title: 'Personal de Apoyo / Auxiliar',
            responsibilities: 'Tareas auxiliares de limpieza, transporte de materiales, apoyo general, tareas básicas sin cualificación específica',
            experience: '0 años',
            equivalentTitles: ['Pinche', 'Kitchen Porter', 'Friegaplatos', 'Runner', 'Ayudante de Camarero', 'Limpiador/a', 'Office']
        }
    },

    /**
     * Get position description for a specific level
     * @param {string} establishmentGroup - 'A', 'B', 'C', or 'D'
     * @param {string} level - '1A', '1B', '2', '3', '4', or '5'
     * @returns {Object|null} - Position description or null
     */
    getPositionDescription: function(establishmentGroup, level) {
        const position = this.positionDescriptions[level];
        if (!position) return null;

        // Adjust title based on establishment group
        const groupContext = {
            'A': ' (Hotel 5* / Alta Cocina)',
            'B': ' (Hotel Boutique / Restaurante de Autor)',
            'C': ' (Hotel 3-4* / Cadena)',
            'D': ' (Bar / Hostal / Colectividades)'
        };

        return {
            title: position.title + (groupContext[establishmentGroup] || ''),
            responsibilities: position.responsibilities,
            experience: position.experience,
            equivalentTitles: position.equivalentTitles
        };
    },

    /**
     * Market rates for hostelería roles in Spain (2024-2025)
     * These are indicative ranges from job market data
     */
    marketRates: {
        roles: {
            // Management
            'director_hotel': { min: 45000, max: 80000, roles: ['Director de Hotel', 'Director General'] },
            'director_restaurante': { min: 35000, max: 55000, roles: ['Director de Restaurante'] },
            'jefe_cocina': { min: 30000, max: 50000, roles: ['Jefe de Cocina', 'Executive Chef'] },
            'jefe_sala': { min: 25000, max: 40000, roles: ['Jefe de Sala', 'Maître'] },

            // Kitchen
            'segundo_cocina': { min: 24000, max: 35000, roles: ['Segundo de Cocina', 'Sous Chef'] },
            'cocinero': { min: 18000, max: 28000, roles: ['Cocinero', 'Cocinero de Partida'] },
            'ayudante_cocina': { min: 16000, max: 22000, roles: ['Ayudante de Cocina', 'Commis'] },
            'pinche': { min: 15000, max: 18000, roles: ['Pinche', 'Kitchen Porter'] },

            // Service
            'sommelier': { min: 24000, max: 38000, roles: ['Sommelier', 'Sumiller'] },
            'barman': { min: 20000, max: 30000, roles: ['Barman', 'Bartender', 'Coctelero'] },
            'camarero': { min: 17000, max: 24000, roles: ['Camarero', 'Waiter/Waitress'] },
            'ayudante_camarero': { min: 15000, max: 19000, roles: ['Ayudante de Camarero', 'Runner'] },

            // Reception/Front of House
            'recepcionista_hotel': { min: 18000, max: 26000, roles: ['Recepcionista de Hotel'] },
            'conserje': { min: 17000, max: 24000, roles: ['Conserje', 'Portero'] },

            // Other
            'gobernanta': { min: 22000, max: 32000, roles: ['Gobernanta', 'Housekeeper Manager'] },
            'camarera_pisos': { min: 15000, max: 20000, roles: ['Camarera de Pisos', 'Room Attendant'] }
        },

        /**
         * Get market rate for a level/group combination
         * Maps convenio categories to market roles
         */
        getMarketRateForCategory: function(establishmentGroup, level) {
            // Map level to typical roles
            const levelRoleMap = {
                '1A': ['director_hotel', 'director_restaurante'],
                '1B': ['jefe_cocina', 'jefe_sala'],
                '2': ['segundo_cocina', 'sommelier'],
                '3': ['cocinero', 'barman', 'recepcionista_hotel'],
                '4': ['camarero', 'ayudante_cocina', 'camarera_pisos'],
                '5': ['ayudante_camarero', 'pinche']
            };

            const roleKeys = levelRoleMap[level];
            if (!roleKeys) return null;

            // Collect all matching roles
            const allRoles = [];
            let minSalary = Infinity;
            let maxSalary = 0;

            roleKeys.forEach(key => {
                const rate = this.roles[key];
                if (rate) {
                    allRoles.push(...rate.roles);
                    minSalary = Math.min(minSalary, rate.min);
                    maxSalary = Math.max(maxSalary, rate.max);
                }
            });

            // Adjust based on establishment group
            const groupMultiplier = { 'A': 1.15, 'B': 1.05, 'C': 1.0, 'D': 0.95 };
            const multiplier = groupMultiplier[establishmentGroup] || 1.0;

            return {
                roles: allRoles,
                marketRange: {
                    min: Math.round(minSalary * multiplier),
                    max: Math.round(maxSalary * multiplier)
                }
            };
        }
    }
};

// Export for use in browser
if (typeof window !== 'undefined') {
    window.ConvenioHosteleria = ConvenioHosteleria;
}
