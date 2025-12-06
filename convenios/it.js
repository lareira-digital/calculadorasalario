/**
 * XIX Convenio Colectivo Estatal de Empresas de Consultoría,
 * Tecnologías de la Información y Estudios de Mercado y de la Opinión Pública
 *
 * BOE-A-2025-7766 - Published 16/04/2025
 * Vigencia: 01/01/2025 - 31/12/2027
 *
 * Source: https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-7766
 */

const ConvenioIT = {
    name: 'Consultoría, Tecnologías de la Información y Estudios de Mercado',
    code: 'TIC',
    boeReference: 'BOE-A-2025-7766',
    vigencia: {
        desde: '2025-01-01',
        hasta: '2027-12-31'
    },

    // Areas defined in the XIX Convenio
    areas: {
        1: { name: 'BPO y Administración Interna', code: 'A1' },
        2: { name: 'CAU', code: 'A2' },
        3: { name: 'Programación', code: 'A3' },
        4: { name: 'Consultoría de Negocio y Tecnológica', code: 'A4' },
        5: { name: 'Ciberseguridad', code: 'A5' },
        6: { name: 'Estudios de Mercado', code: 'A6' }
    },

    // Professional groups
    groups: {
        'A': { name: 'Grupo A', levels: [1] },
        'B': { name: 'Grupo B', levels: [1, 2] },
        'C': { name: 'Grupo C', levels: [1, 2, 3] },
        'D': { name: 'Grupo D', levels: [1, 2, 3] },
        'E': { name: 'Grupo E', levels: [1, 2] }
    },

    // Salary tables by year, area, group and level
    // All amounts are annual (14 pagas)
    salaryTables: {
        2025: {
            // Área 1 - BPO y Administración Interna
            'A1-A1': { salarioBase: 19414.89, plusConvenio: 2485.37, total: 21900.26 },
            'A1-B1': { salarioBase: 18015.39, plusConvenio: 2018.91, total: 20034.30 },
            'A1-B2': { salarioBase: 16165.29, plusConvenio: 1950.17, total: 18115.46 },
            'A1-C1': { salarioBase: 14887.76, plusConvenio: 2248.24, total: 17136.00 },
            'A1-C2': { salarioBase: 14582.88, plusConvenio: 2473.12, total: 17056.00 },
            'A1-C3': { salarioBase: 14376.97, plusConvenio: 2599.03, total: 16976.00 },
            'A1-D1': { salarioBase: 14408.91, plusConvenio: 2487.09, total: 16896.00 },
            'A1-D2': { salarioBase: 14339.00, plusConvenio: 2477.00, total: 16816.00 },
            'A1-D3': { salarioBase: 14160.33, plusConvenio: 2575.67, total: 16736.00 },
            'A1-E1': { salarioBase: 13649.59, plusConvenio: 3006.41, total: 16656.00 },
            'A1-E2': { salarioBase: 13557.51, plusConvenio: 3018.49, total: 16576.00 },

            // Área 2 - CAU
            'A2-A1': { salarioBase: 19587.84, plusConvenio: 2658.32, total: 22246.16 },
            'A2-B1': { salarioBase: 18187.10, plusConvenio: 2190.62, total: 20377.72 },
            'A2-B2': { salarioBase: 16350.52, plusConvenio: 2135.39, total: 18485.91 },
            'A2-C1': { salarioBase: 14890.95, plusConvenio: 2455.92, total: 17346.87 },
            'A2-C2': { salarioBase: 14429.24, plusConvenio: 2626.76, total: 17056.00 },
            'A2-C3': { salarioBase: 14242.86, plusConvenio: 2733.14, total: 16976.00 },
            'A2-D1': { salarioBase: 14290.64, plusConvenio: 2605.36, total: 16896.00 },
            'A2-D2': { salarioBase: 14238.11, plusConvenio: 2577.89, total: 16816.00 },
            'A2-D3': { salarioBase: 14080.00, plusConvenio: 2656.00, total: 16736.00 },
            'A2-E1': { salarioBase: 13604.62, plusConvenio: 3051.38, total: 16656.00 },
            'A2-E2': { salarioBase: 13545.91, plusConvenio: 3030.09, total: 16576.00 },

            // Área 3 - Programación
            'A3-A1': { salarioBase: 27602.20, plusConvenio: 2402.04, total: 30004.24 },
            'A3-B1': { salarioBase: 26776.65, plusConvenio: 2328.41, total: 29105.06 },
            'A3-B2': { salarioBase: 25974.36, plusConvenio: 2258.64, total: 28233.00 },
            'A3-C1': { salarioBase: 25398.71, plusConvenio: 2196.77, total: 27595.48 },
            'A3-C2': { salarioBase: 23748.95, plusConvenio: 2053.59, total: 25802.54 },
            'A3-C3': { salarioBase: 21492.13, plusConvenio: 1911.15, total: 23403.28 },
            'A3-D1': { salarioBase: 18212.55, plusConvenio: 1628.23, total: 19840.78 },
            'A3-D2': { salarioBase: 16896.93, plusConvenio: 1469.29, total: 18366.22 },
            'A3-D3': { salarioBase: 16568.01, plusConvenio: 1434.26, total: 18002.27 },
            'A3-E1': { salarioBase: 16316.21, plusConvenio: 1446.59, total: 17762.80 },
            'A3-E2': { salarioBase: 15935.03, plusConvenio: 1364.97, total: 17300.00 },

            // Área 4 - Consultoría de Negocio y Tecnológica
            'A4-A1': { salarioBase: 27656.57, plusConvenio: 2461.14, total: 30117.71 },
            'A4-B1': { salarioBase: 26958.95, plusConvenio: 2995.44, total: 29954.39 },
            'A4-B2': { salarioBase: 26169.75, plusConvenio: 2907.76, total: 29077.51 },
            'A4-C1': { salarioBase: 25314.45, plusConvenio: 2812.71, total: 28127.16 },
            'A4-C2': { salarioBase: 23659.47, plusConvenio: 2628.82, total: 26288.29 },
            'A4-C3': { salarioBase: 21328.53, plusConvenio: 2369.84, total: 23698.37 },
            'A4-D1': { salarioBase: 18075.68, plusConvenio: 2008.42, total: 20084.10 },
            'A4-D2': { salarioBase: 17020.87, plusConvenio: 1891.21, total: 18912.08 },
            'A4-D3': { salarioBase: 16541.00, plusConvenio: 1837.89, total: 18378.89 },
            'A4-E1': { salarioBase: 16111.79, plusConvenio: 1759.46, total: 17871.25 },
            'A4-E2': { salarioBase: 15912.00, plusConvenio: 1768.00, total: 17680.00 },

            // Área 5 - Ciberseguridad (NEW in XIX Convenio)
            'A5-A1': { salarioBase: 31171.83, plusConvenio: 3463.54, total: 34635.37 },
            'A5-B1': { salarioBase: 31002.80, plusConvenio: 3444.76, total: 34447.56 },
            'A5-B2': { salarioBase: 30095.23, plusConvenio: 3343.91, total: 33439.14 },
            'A5-C1': { salarioBase: 29111.61, plusConvenio: 3234.62, total: 32346.23 },
            'A5-C2': { salarioBase: 27208.38, plusConvenio: 3023.15, total: 30231.53 },
            'A5-C3': { salarioBase: 24527.82, plusConvenio: 2725.31, total: 27253.13 },
            'A5-D1': { salarioBase: 20425.53, plusConvenio: 2269.50, total: 22695.03 },
            'A5-D2': { salarioBase: 19233.59, plusConvenio: 2137.07, total: 21370.66 },
            'A5-D3': { salarioBase: 18691.34, plusConvenio: 2076.82, total: 20768.16 },
            'A5-E1': { salarioBase: 17692.54, plusConvenio: 1965.84, total: 19658.38 },
            'A5-E2': { salarioBase: 17503.20, plusConvenio: 1944.80, total: 19448.00 },

            // Área 6 - Estudios de Mercado
            'A6-A1': { salarioBase: 19414.89, plusConvenio: 2485.37, total: 21900.26 },
            'A6-B1': { salarioBase: 18015.39, plusConvenio: 2018.91, total: 20034.30 },
            'A6-B2': { salarioBase: 16165.29, plusConvenio: 1950.17, total: 18115.46 },
            'A6-C1': { salarioBase: 14887.76, plusConvenio: 2248.24, total: 17136.00 },
            'A6-C2': { salarioBase: 14582.88, plusConvenio: 2473.12, total: 17056.00 },
            'A6-C3': { salarioBase: 14376.97, plusConvenio: 2599.03, total: 16976.00 },
            'A6-D1': { salarioBase: 14408.91, plusConvenio: 2487.09, total: 16896.00 },
            'A6-D2': { salarioBase: 14339.00, plusConvenio: 2477.00, total: 16816.00 },
            'A6-D3': { salarioBase: 14160.33, plusConvenio: 2575.67, total: 16736.00 },
            'A6-E1': { salarioBase: 13649.59, plusConvenio: 3006.41, total: 16656.00 },
            'A6-E2': { salarioBase: 13555.85, plusConvenio: 3020.15, total: 16576.00 },

            // Ad personam categories
            'TGS': { salarioBase: 26169.75, plusConvenio: 2907.76, total: 29077.51, name: 'Titulado Grado Superior' },
            'TGM': { salarioBase: 18660.06, plusConvenio: 2073.33, total: 20733.39, name: 'Titulado Grado Medio' },
            'DEL': { salarioBase: 14918.40, plusConvenio: 1657.60, total: 16576.00, name: 'Delineante' }
        },

        2026: {
            // Área 1 - BPO y Administración Interna
            'A1-A1': { salarioBase: 19997.34, plusConvenio: 2559.93, total: 22557.27 },
            'A1-B1': { salarioBase: 18555.85, plusConvenio: 2079.48, total: 20635.33 },
            'A1-B2': { salarioBase: 16650.25, plusConvenio: 2008.68, total: 18658.93 },
            'A1-C1': { salarioBase: 15334.39, plusConvenio: 2315.69, total: 17650.08 },
            'A1-C2': { salarioBase: 15020.37, plusConvenio: 2547.31, total: 17567.68 },
            'A1-C3': { salarioBase: 14808.28, plusConvenio: 2677.00, total: 17485.28 },
            'A1-D1': { salarioBase: 14841.18, plusConvenio: 2561.70, total: 17402.88 },
            'A1-D2': { salarioBase: 14769.17, plusConvenio: 2551.31, total: 17320.48 },
            'A1-D3': { salarioBase: 14585.14, plusConvenio: 2652.94, total: 17238.08 },
            'A1-E1': { salarioBase: 14059.08, plusConvenio: 3096.60, total: 17155.68 },
            'A1-E2': { salarioBase: 13964.24, plusConvenio: 3109.04, total: 17073.28 },

            // Área 2 - CAU
            'A2-A1': { salarioBase: 20175.48, plusConvenio: 2738.07, total: 22913.55 },
            'A2-B1': { salarioBase: 18732.71, plusConvenio: 2256.34, total: 20989.05 },
            'A2-B2': { salarioBase: 16841.04, plusConvenio: 2199.45, total: 19040.49 },
            'A2-C1': { salarioBase: 15337.68, plusConvenio: 2529.60, total: 17867.28 },
            'A2-C2': { salarioBase: 14862.12, plusConvenio: 2705.56, total: 17567.68 },
            'A2-C3': { salarioBase: 14670.15, plusConvenio: 2815.13, total: 17485.28 },
            'A2-D1': { salarioBase: 14719.36, plusConvenio: 2683.52, total: 17402.88 },
            'A2-D2': { salarioBase: 14665.25, plusConvenio: 2655.23, total: 17320.48 },
            'A2-D3': { salarioBase: 14502.40, plusConvenio: 2735.68, total: 17238.08 },
            'A2-E1': { salarioBase: 14012.76, plusConvenio: 3142.92, total: 17155.68 },
            'A2-E2': { salarioBase: 13952.29, plusConvenio: 3120.99, total: 17073.28 },

            // Área 3 - Programación
            'A3-A1': { salarioBase: 28430.27, plusConvenio: 2474.10, total: 30904.37 },
            'A3-B1': { salarioBase: 27579.95, plusConvenio: 2398.26, total: 29978.21 },
            'A3-B2': { salarioBase: 26753.59, plusConvenio: 2326.40, total: 29079.99 },
            'A3-C1': { salarioBase: 26160.67, plusConvenio: 2262.67, total: 28423.34 },
            'A3-C2': { salarioBase: 24461.42, plusConvenio: 2115.20, total: 26576.62 },
            'A3-C3': { salarioBase: 22136.89, plusConvenio: 1968.48, total: 24105.37 },
            'A3-D1': { salarioBase: 18758.93, plusConvenio: 1677.08, total: 20436.01 },
            'A3-D2': { salarioBase: 17403.84, plusConvenio: 1513.37, total: 18917.21 },
            'A3-D3': { salarioBase: 17065.05, plusConvenio: 1477.29, total: 18542.34 },
            'A3-E1': { salarioBase: 16805.70, plusConvenio: 1489.99, total: 18295.69 },
            'A3-E2': { salarioBase: 16413.08, plusConvenio: 1405.92, total: 17819.00 },

            // Área 4 - Consultoría de Negocio y Tecnológica
            'A4-A1': { salarioBase: 28486.27, plusConvenio: 2534.97, total: 31021.24 },
            'A4-B1': { salarioBase: 27767.72, plusConvenio: 3085.30, total: 30853.02 },
            'A4-B2': { salarioBase: 26954.84, plusConvenio: 2994.99, total: 29949.83 },
            'A4-C1': { salarioBase: 26073.88, plusConvenio: 2897.09, total: 28970.97 },
            'A4-C2': { salarioBase: 24369.25, plusConvenio: 2707.68, total: 27076.93 },
            'A4-C3': { salarioBase: 21968.39, plusConvenio: 2440.94, total: 24409.33 },
            'A4-D1': { salarioBase: 18617.95, plusConvenio: 2068.67, total: 20686.62 },
            'A4-D2': { salarioBase: 17531.50, plusConvenio: 1947.95, total: 19479.45 },
            'A4-D3': { salarioBase: 17037.23, plusConvenio: 1893.03, total: 18930.26 },
            'A4-E1': { salarioBase: 16595.14, plusConvenio: 1812.24, total: 18407.38 },
            'A4-E2': { salarioBase: 16389.36, plusConvenio: 1821.04, total: 18210.40 },

            // Área 5 - Ciberseguridad
            'A5-A1': { salarioBase: 32106.98, plusConvenio: 3567.45, total: 35674.43 },
            'A5-B1': { salarioBase: 31932.88, plusConvenio: 3548.10, total: 35480.98 },
            'A5-B2': { salarioBase: 30998.09, plusConvenio: 3444.23, total: 34442.32 },
            'A5-C1': { salarioBase: 29984.96, plusConvenio: 3331.66, total: 33316.62 },
            'A5-C2': { salarioBase: 28024.63, plusConvenio: 3113.84, total: 31138.47 },
            'A5-C3': { salarioBase: 25263.65, plusConvenio: 2807.07, total: 28070.72 },
            'A5-D1': { salarioBase: 21038.30, plusConvenio: 2337.59, total: 23375.89 },
            'A5-D2': { salarioBase: 19810.60, plusConvenio: 2201.18, total: 22011.78 },
            'A5-D3': { salarioBase: 19252.08, plusConvenio: 2139.12, total: 21391.20 },
            'A5-E1': { salarioBase: 18223.32, plusConvenio: 2024.82, total: 20248.14 },
            'A5-E2': { salarioBase: 18028.30, plusConvenio: 2003.14, total: 20031.44 },

            // Área 6 - Estudios de Mercado
            'A6-A1': { salarioBase: 19997.34, plusConvenio: 2559.93, total: 22557.27 },
            'A6-B1': { salarioBase: 18555.85, plusConvenio: 2079.48, total: 20635.33 },
            'A6-B2': { salarioBase: 16650.25, plusConvenio: 2008.68, total: 18658.93 },
            'A6-C1': { salarioBase: 15334.39, plusConvenio: 2315.69, total: 17650.08 },
            'A6-C2': { salarioBase: 15020.37, plusConvenio: 2547.31, total: 17567.68 },
            'A6-C3': { salarioBase: 14808.28, plusConvenio: 2677.00, total: 17485.28 },
            'A6-D1': { salarioBase: 14841.18, plusConvenio: 2561.70, total: 17402.88 },
            'A6-D2': { salarioBase: 14769.17, plusConvenio: 2551.31, total: 17320.48 },
            'A6-D3': { salarioBase: 14585.14, plusConvenio: 2652.94, total: 17238.08 },
            'A6-E1': { salarioBase: 14059.08, plusConvenio: 3096.60, total: 17155.68 },
            'A6-E2': { salarioBase: 13962.53, plusConvenio: 3110.75, total: 17073.28 },

            // Ad personam categories
            'TGS': { salarioBase: 26954.84, plusConvenio: 2994.99, total: 29949.83, name: 'Titulado Grado Superior' },
            'TGM': { salarioBase: 19219.86, plusConvenio: 2135.53, total: 21355.39, name: 'Titulado Grado Medio' },
            'DEL': { salarioBase: 15365.95, plusConvenio: 1707.33, total: 17073.28, name: 'Delineante' }
        },

        2027: {
            // Área 1 - BPO y Administración Interna
            'A1-A1': { salarioBase: 20597.26, plusConvenio: 2636.73, total: 23233.99 },
            'A1-B1': { salarioBase: 19112.53, plusConvenio: 2141.86, total: 21254.39 },
            'A1-B2': { salarioBase: 17149.76, plusConvenio: 2068.94, total: 19218.70 },
            'A1-C1': { salarioBase: 15794.42, plusConvenio: 2385.16, total: 18179.58 },
            'A1-C2': { salarioBase: 15470.98, plusConvenio: 2623.73, total: 18094.71 },
            'A1-C3': { salarioBase: 15252.53, plusConvenio: 2757.31, total: 18009.84 },
            'A1-D1': { salarioBase: 15286.42, plusConvenio: 2638.55, total: 17924.97 },
            'A1-D2': { salarioBase: 15212.25, plusConvenio: 2627.85, total: 17840.10 },
            'A1-D3': { salarioBase: 15022.69, plusConvenio: 2732.53, total: 17755.22 },
            'A1-E1': { salarioBase: 14480.85, plusConvenio: 3189.50, total: 17670.35 },
            'A1-E2': { salarioBase: 14383.17, plusConvenio: 3202.31, total: 17585.48 },

            // Área 2 - CAU
            'A2-A1': { salarioBase: 20780.74, plusConvenio: 2820.21, total: 23600.95 },
            'A2-B1': { salarioBase: 19294.69, plusConvenio: 2324.03, total: 21618.72 },
            'A2-B2': { salarioBase: 17346.27, plusConvenio: 2265.43, total: 19611.70 },
            'A2-C1': { salarioBase: 15797.81, plusConvenio: 2605.49, total: 18403.30 },
            'A2-C2': { salarioBase: 15307.98, plusConvenio: 2786.73, total: 18094.71 },
            'A2-C3': { salarioBase: 15110.25, plusConvenio: 2899.58, total: 18009.83 },
            'A2-D1': { salarioBase: 15160.94, plusConvenio: 2764.03, total: 17924.97 },
            'A2-D2': { salarioBase: 15105.21, plusConvenio: 2734.89, total: 17840.10 },
            'A2-D3': { salarioBase: 14937.47, plusConvenio: 2817.75, total: 17755.22 },
            'A2-E1': { salarioBase: 14433.14, plusConvenio: 3237.21, total: 17670.35 },
            'A2-E2': { salarioBase: 14370.86, plusConvenio: 3214.62, total: 17585.48 },

            // Área 3 - Programación
            'A3-A1': { salarioBase: 29283.18, plusConvenio: 2548.32, total: 31831.50 },
            'A3-B1': { salarioBase: 28407.35, plusConvenio: 2470.21, total: 30877.56 },
            'A3-B2': { salarioBase: 27556.20, plusConvenio: 2396.19, total: 29952.39 },
            'A3-C1': { salarioBase: 26945.49, plusConvenio: 2330.55, total: 29276.04 },
            'A3-C2': { salarioBase: 25195.26, plusConvenio: 2178.66, total: 27373.92 },
            'A3-C3': { salarioBase: 22801.00, plusConvenio: 2027.53, total: 24828.53 },
            'A3-D1': { salarioBase: 19321.70, plusConvenio: 1727.39, total: 21049.09 },
            'A3-D2': { salarioBase: 17925.96, plusConvenio: 1558.77, total: 19484.73 },
            'A3-D3': { salarioBase: 17577.00, plusConvenio: 1521.61, total: 19098.61 },
            'A3-E1': { salarioBase: 17309.87, plusConvenio: 1534.69, total: 18844.56 },
            'A3-E2': { salarioBase: 16905.47, plusConvenio: 1448.10, total: 18353.57 },

            // Área 4 - Consultoría de Negocio y Tecnológica
            'A4-A1': { salarioBase: 29340.86, plusConvenio: 2611.02, total: 31951.88 },
            'A4-B1': { salarioBase: 28600.75, plusConvenio: 3177.86, total: 31778.61 },
            'A4-B2': { salarioBase: 27763.49, plusConvenio: 3084.84, total: 30848.33 },
            'A4-C1': { salarioBase: 26856.10, plusConvenio: 2984.00, total: 29840.10 },
            'A4-C2': { salarioBase: 25100.33, plusConvenio: 2788.91, total: 27889.24 },
            'A4-C3': { salarioBase: 22627.44, plusConvenio: 2514.17, total: 25141.61 },
            'A4-D1': { salarioBase: 19176.49, plusConvenio: 2130.73, total: 21307.22 },
            'A4-D2': { salarioBase: 18057.45, plusConvenio: 2006.39, total: 20063.84 },
            'A4-D3': { salarioBase: 17548.35, plusConvenio: 1949.82, total: 19498.17 },
            'A4-E1': { salarioBase: 17092.99, plusConvenio: 1866.61, total: 18959.60 },
            'A4-E2': { salarioBase: 16881.04, plusConvenio: 1875.67, total: 18756.71 },

            // Área 5 - Ciberseguridad
            'A5-A1': { salarioBase: 33070.19, plusConvenio: 3674.47, total: 36744.66 },
            'A5-B1': { salarioBase: 32890.87, plusConvenio: 3654.54, total: 36545.41 },
            'A5-B2': { salarioBase: 31928.03, plusConvenio: 3547.56, total: 35475.59 },
            'A5-C1': { salarioBase: 30884.51, plusConvenio: 3431.61, total: 34316.12 },
            'A5-C2': { salarioBase: 28865.37, plusConvenio: 3207.26, total: 32072.63 },
            'A5-C3': { salarioBase: 26021.56, plusConvenio: 2891.28, total: 28912.84 },
            'A5-D1': { salarioBase: 21669.45, plusConvenio: 2407.72, total: 24077.17 },
            'A5-D2': { salarioBase: 20404.92, plusConvenio: 2267.22, total: 22672.14 },
            'A5-D3': { salarioBase: 19829.64, plusConvenio: 2203.29, total: 22032.93 },
            'A5-E1': { salarioBase: 18770.02, plusConvenio: 2085.56, total: 20855.58 },
            'A5-E2': { salarioBase: 18569.15, plusConvenio: 2063.23, total: 20632.38 },

            // Área 6 - Estudios de Mercado
            'A6-A1': { salarioBase: 20597.26, plusConvenio: 2636.73, total: 23233.99 },
            'A6-B1': { salarioBase: 19112.53, plusConvenio: 2141.86, total: 21254.39 },
            'A6-B2': { salarioBase: 17149.76, plusConvenio: 2068.94, total: 19218.70 },
            'A6-C1': { salarioBase: 15794.42, plusConvenio: 2385.16, total: 18179.58 },
            'A6-C2': { salarioBase: 15470.98, plusConvenio: 2623.73, total: 18094.71 },
            'A6-C3': { salarioBase: 15252.53, plusConvenio: 2757.31, total: 18009.84 },
            'A6-D1': { salarioBase: 15286.42, plusConvenio: 2638.55, total: 17924.97 },
            'A6-D2': { salarioBase: 15212.25, plusConvenio: 2627.85, total: 17840.10 },
            'A6-D3': { salarioBase: 15022.69, plusConvenio: 2732.53, total: 17755.22 },
            'A6-E1': { salarioBase: 14480.85, plusConvenio: 3189.50, total: 17670.35 },
            'A6-E2': { salarioBase: 14381.41, plusConvenio: 3204.07, total: 17585.48 },

            // Ad personam categories
            'TGS': { salarioBase: 27763.49, plusConvenio: 3084.84, total: 30848.33, name: 'Titulado Grado Superior' },
            'TGM': { salarioBase: 19796.46, plusConvenio: 2199.60, total: 21996.06, name: 'Titulado Grado Medio' },
            'DEL': { salarioBase: 15826.93, plusConvenio: 1758.55, total: 17585.48, name: 'Delineante' }
        }
    },

    // Additional convenio parameters
    parameters: {
        numPayments: 14,
        workingHoursPerYear: 1800,
        vacationDays: 22,
        // Salary increases by year
        increases: {
            2025: 4.0,  // 4%
            2026: 3.0,  // 3%
            2027: 3.0   // 3%
        },
        // Other compensations
        kilometraje: {
            2025: 0.26,
            2026: 0.27,
            2027: 0.28
        },
        dietaCompleta: {
            2025: 57.20,
            2026: 58.92,
            2027: 60.69
        },
        teletrabajo: {
            2025: 17.68,
            2026: 18.21,
            2027: 18.76
        }
    },

    /**
     * Get salary for a specific area, group, level and year
     * @param {number} area - Area number (1-6)
     * @param {string} group - Group letter (A-E)
     * @param {number} level - Level number
     * @param {number} year - Year (2025-2027)
     * @returns {Object|null} - Salary data or null if not found
     */
    getSalary(area, group, level, year) {
        const key = `A${area}-${group}${level}`;
        const yearTable = this.salaryTables[year];
        if (!yearTable) return null;
        return yearTable[key] || null;
    },

    /**
     * Get all categories for a specific area and year
     * @param {number} area - Area number (1-6)
     * @param {number} year - Year (2025-2027)
     * @returns {Array} - Array of salary entries for that area
     */
    getAreaSalaries(area, year) {
        const yearTable = this.salaryTables[year];
        if (!yearTable) return [];

        const prefix = `A${area}-`;
        return Object.entries(yearTable)
            .filter(([key]) => key.startsWith(prefix))
            .map(([key, data]) => ({
                code: key,
                group: key.split('-')[1][0],
                level: parseInt(key.split('-')[1].slice(1)),
                ...data
            }));
    },

    /**
     * Get nomenclature code for a position
     * @param {number} area - Area number (1-6)
     * @param {string} group - Group letter (A-E)
     * @param {number} level - Level number
     * @returns {string} - Nomenclature code (e.g., 'A3GCN2')
     */
    getNomenclature(area, group, level) {
        return `A${area}G${group}N${level}`;
    },

    /**
     * Market rates reference data (2025)
     * Sources: Glassdoor, Indeed, Talent.com, KeepCoding, InfoJobs
     * IMPORTANT: These are orientative ranges, actual salaries vary by company, location, and experience
     */
    marketRates: {
        // Job title mappings to convenio categories with market salary ranges
        // Format: { title, convenioMapping (suggested), marketRange: { min, max }, description }
        roles: [
            // Entry level
            {
                title: 'Junior Developer / Programador Junior',
                convenioMapping: { areas: [3], group: 'E', level: 2 },
                marketRange: { min: 22000, max: 30000 },
                description: '0-2 años de experiencia'
            },
            {
                title: 'Junior Full Stack Developer',
                convenioMapping: { areas: [3], group: 'E', level: 1 },
                marketRange: { min: 24000, max: 32000 },
                description: '0-2 años de experiencia'
            },
            // Mid level
            {
                title: 'Mid-Level Developer / Programador',
                convenioMapping: { areas: [3], group: 'D', level: 1 },
                marketRange: { min: 30000, max: 42000 },
                description: '2-4 años de experiencia'
            },
            {
                title: 'Full Stack Developer (Mid)',
                convenioMapping: { areas: [3], group: 'C', level: 3 },
                marketRange: { min: 35000, max: 45000 },
                description: '3-5 años de experiencia'
            },
            // Senior level
            {
                title: 'Senior Developer / Programador Senior',
                convenioMapping: { areas: [3], group: 'C', level: 1 },
                marketRange: { min: 45000, max: 60000 },
                description: '5+ años de experiencia'
            },
            {
                title: 'Senior Full Stack Developer',
                convenioMapping: { areas: [3], group: 'B', level: 2 },
                marketRange: { min: 48000, max: 65000 },
                description: '5+ años de experiencia'
            },
            // Specialized roles
            {
                title: 'DevOps Engineer',
                convenioMapping: { areas: [3, 4], group: 'C', level: 1 },
                marketRange: { min: 40000, max: 60000 },
                description: '3-5 años de experiencia'
            },
            {
                title: 'Senior DevOps Engineer',
                convenioMapping: { areas: [3, 4], group: 'B', level: 1 },
                marketRange: { min: 55000, max: 90000 },
                description: '5+ años de experiencia'
            },
            {
                title: 'Data Analyst',
                convenioMapping: { areas: [4], group: 'C', level: 2 },
                marketRange: { min: 30000, max: 45000 },
                description: '2-4 años de experiencia'
            },
            {
                title: 'Data Scientist / Data Engineer',
                convenioMapping: { areas: [4], group: 'B', level: 2 },
                marketRange: { min: 45000, max: 80000 },
                description: '3+ años de experiencia'
            },
            // Cybersecurity
            {
                title: 'Cybersecurity Analyst',
                convenioMapping: { areas: [5], group: 'C', level: 1 },
                marketRange: { min: 40000, max: 55000 },
                description: '2-4 años de experiencia'
            },
            {
                title: 'Senior Security Engineer',
                convenioMapping: { areas: [5], group: 'B', level: 1 },
                marketRange: { min: 55000, max: 90000 },
                description: '5+ años de experiencia'
            },
            {
                title: 'CISO / Security Director',
                convenioMapping: { areas: [5], group: 'A', level: 1 },
                marketRange: { min: 80000, max: 150000 },
                description: '10+ años de experiencia'
            },
            // Architecture & Leadership
            {
                title: 'Software Architect',
                convenioMapping: { areas: [3, 4], group: 'A', level: 1 },
                marketRange: { min: 55000, max: 85000 },
                description: '7+ años de experiencia'
            },
            {
                title: 'Tech Lead',
                convenioMapping: { areas: [3, 4], group: 'A', level: 1 },
                marketRange: { min: 50000, max: 90000 },
                description: '5+ años de experiencia'
            },
            {
                title: 'Engineering Manager',
                convenioMapping: { areas: [4], group: 'A', level: 1 },
                marketRange: { min: 60000, max: 100000 },
                description: '8+ años de experiencia'
            },
            {
                title: 'CTO / Director de Tecnología',
                convenioMapping: { areas: [4], group: 'A', level: 1 },
                marketRange: { min: 76000, max: 170000 },
                description: '10+ años de experiencia'
            },
            // Support & Administration
            {
                title: 'IT Support / Helpdesk',
                convenioMapping: { areas: [2], group: 'E', level: 2 },
                marketRange: { min: 18000, max: 26000 },
                description: '0-2 años de experiencia'
            },
            {
                title: 'System Administrator',
                convenioMapping: { areas: [2], group: 'C', level: 2 },
                marketRange: { min: 28000, max: 42000 },
                description: '2-5 años de experiencia'
            },
            {
                title: 'Senior SysAdmin / IT Manager',
                convenioMapping: { areas: [2], group: 'B', level: 1 },
                marketRange: { min: 40000, max: 60000 },
                description: '5+ años de experiencia'
            }
        ],

        /**
         * Get market rate info for a specific convenio category
         * @param {number} area - Area number
         * @param {string} group - Group letter
         * @param {number} level - Level number
         * @returns {Object|null} - Market rate info or null
         */
        getMarketRateForCategory(area, group, level) {
            const matchingRoles = this.roles.filter(role => {
                const mapping = role.convenioMapping;
                return mapping.areas.includes(area) &&
                       mapping.group === group &&
                       mapping.level === level;
            });

            if (matchingRoles.length === 0) return null;

            // Return aggregated range if multiple roles match
            const minSalary = Math.min(...matchingRoles.map(r => r.marketRange.min));
            const maxSalary = Math.max(...matchingRoles.map(r => r.marketRange.max));

            return {
                roles: matchingRoles.map(r => r.title),
                marketRange: { min: minSalary, max: maxSalary },
                descriptions: matchingRoles.map(r => r.description)
            };
        }
    }
};
