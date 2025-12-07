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
     * Position descriptions by area, group and level
     * Describes responsibilities and typical job functions for each category
     */
    positionDescriptions: {
        // Área 1 - BPO y Administración Interna
        'A1': {
            name: 'BPO y Administración Interna',
            description: 'Gestión de procesos de negocio externalizados, administración interna, contabilidad, RRHH, facturación y back-office',
            positions: {
                'A1': {
                    title: 'Director/a de Operaciones BPO',
                    responsibilities: 'Dirección estratégica de operaciones BPO, gestión de grandes cuentas, definición de KPIs, responsabilidad P&L',
                    experience: '10+ años',
                    equivalentTitles: ['Director de Operaciones', 'Head of BPO', 'Operations Director', 'Director de Back Office']
                },
                'B1': {
                    title: 'Responsable de Área / Team Leader Senior',
                    responsibilities: 'Gestión de equipos grandes (+15 personas), coordinación con cliente, reporting ejecutivo, mejora de procesos',
                    experience: '6-10 años',
                    equivalentTitles: ['Team Leader Senior', 'Responsable de Operaciones', 'Service Delivery Manager', 'Account Manager']
                },
                'B2': {
                    title: 'Team Leader / Coordinador/a',
                    responsibilities: 'Supervisión de equipos (5-15 personas), control de calidad, formación, gestión de incidencias escaladas',
                    experience: '4-6 años',
                    equivalentTitles: ['Team Leader', 'Coordinator', 'Supervisor', 'Jefe de Equipo']
                },
                'C1': {
                    title: 'Especialista Senior BPO',
                    responsibilities: 'Gestión de procesos complejos, resolución de incidencias nivel 2, mentoring de juniors, documentación de procesos',
                    experience: '3-5 años',
                    equivalentTitles: ['Senior Back Office Specialist', 'Process Specialist', 'Senior Administrator']
                },
                'C2': {
                    title: 'Especialista BPO',
                    responsibilities: 'Ejecución de procesos administrativos, gestión documental, atención a proveedores/clientes internos',
                    experience: '2-3 años',
                    equivalentTitles: ['Back Office Specialist', 'Administrative Specialist', 'Process Analyst']
                },
                'C3': {
                    title: 'Técnico/a BPO',
                    responsibilities: 'Procesamiento de transacciones, introducción de datos, verificación documental, tareas rutinarias',
                    experience: '1-2 años',
                    equivalentTitles: ['Back Office Technician', 'Data Entry Specialist', 'Administrative Assistant']
                },
                'D1': {
                    title: 'Administrativo/a Senior',
                    responsibilities: 'Tareas administrativas con cierta autonomía, gestión de archivo, correspondencia, soporte a equipos',
                    experience: '1-2 años',
                    equivalentTitles: ['Senior Administrative', 'Office Administrator', 'Administrative Support']
                },
                'D2': {
                    title: 'Administrativo/a',
                    responsibilities: 'Tareas administrativas básicas, archivo, gestión de llamadas, soporte general',
                    experience: '0-1 año',
                    equivalentTitles: ['Administrative', 'Office Assistant', 'Clerk']
                },
                'D3': {
                    title: 'Auxiliar Administrativo/a',
                    responsibilities: 'Apoyo administrativo, tareas de archivo, fotocopias, gestión básica de documentos',
                    experience: '0 años',
                    equivalentTitles: ['Administrative Assistant', 'Junior Administrative', 'Office Junior']
                },
                'E1': {
                    title: 'Becario/a Senior',
                    responsibilities: 'Prácticas con tareas asignadas, aprendizaje de procesos, apoyo al equipo',
                    experience: 'Prácticas',
                    equivalentTitles: ['Senior Intern', 'Trainee']
                },
                'E2': {
                    title: 'Becario/a',
                    responsibilities: 'Prácticas formativas, observación y aprendizaje, tareas básicas de apoyo',
                    experience: 'Prácticas',
                    equivalentTitles: ['Intern', 'Trainee', 'Becario']
                }
            }
        },

        // Área 2 - CAU (Centro de Atención al Usuario)
        'A2': {
            name: 'CAU - Centro de Atención al Usuario',
            description: 'Soporte técnico a usuarios, helpdesk, service desk, gestión de incidencias y peticiones IT',
            positions: {
                'A1': {
                    title: 'Director/a de Service Desk',
                    responsibilities: 'Dirección del servicio de soporte, definición de SLAs, gestión de contratos, estrategia ITSM',
                    experience: '10+ años',
                    equivalentTitles: ['Service Desk Director', 'Head of IT Support', 'IT Service Manager Director']
                },
                'B1': {
                    title: 'Service Desk Manager',
                    responsibilities: 'Gestión del equipo de soporte, cumplimiento de SLAs, reporting, mejora continua ITIL',
                    experience: '6-10 años',
                    equivalentTitles: ['Service Desk Manager', 'IT Support Manager', 'Helpdesk Manager']
                },
                'B2': {
                    title: 'Team Leader CAU',
                    responsibilities: 'Supervisión de técnicos, gestión de turnos, escalado de incidencias, formación',
                    experience: '4-6 años',
                    equivalentTitles: ['CAU Team Leader', 'Support Team Lead', 'Helpdesk Supervisor']
                },
                'C1': {
                    title: 'Técnico/a Soporte N2 Senior',
                    responsibilities: 'Resolución de incidencias complejas, soporte especializado, documentación técnica, mentoring',
                    experience: '3-5 años',
                    equivalentTitles: ['Senior Support Engineer', 'L2 Support Specialist', 'Technical Support Senior']
                },
                'C2': {
                    title: 'Técnico/a Soporte N2',
                    responsibilities: 'Soporte nivel 2, diagnóstico avanzado, escalado a N3, gestión de problemas',
                    experience: '2-3 años',
                    equivalentTitles: ['L2 Support Technician', 'Technical Support Analyst', 'IT Support Specialist']
                },
                'C3': {
                    title: 'Técnico/a Soporte N1 Senior',
                    responsibilities: 'Soporte nivel 1 avanzado, resolución en primer contacto, formación de nuevos técnicos',
                    experience: '1-2 años',
                    equivalentTitles: ['Senior Helpdesk Technician', 'L1 Support Senior', 'IT Support Technician']
                },
                'D1': {
                    title: 'Técnico/a Soporte N1',
                    responsibilities: 'Atención telefónica/remota, registro de incidencias, resolución básica, escalado',
                    experience: '1-2 años',
                    equivalentTitles: ['Helpdesk Technician', 'L1 Support', 'IT Helpdesk', 'Service Desk Analyst']
                },
                'D2': {
                    title: 'Técnico/a CAU Junior',
                    responsibilities: 'Atención básica a usuarios, registro de tickets, tareas guiadas',
                    experience: '0-1 año',
                    equivalentTitles: ['Junior Helpdesk', 'IT Support Junior', 'Service Desk Agent']
                },
                'D3': {
                    title: 'Operador/a CAU',
                    responsibilities: 'Recepción de llamadas, registro inicial, derivación de incidencias',
                    experience: '0 años',
                    equivalentTitles: ['Helpdesk Operator', 'Call Center IT', 'Support Agent']
                },
                'E1': {
                    title: 'Becario/a CAU Senior',
                    responsibilities: 'Prácticas en soporte técnico con supervisión, resolución de casos simples',
                    experience: 'Prácticas',
                    equivalentTitles: ['IT Support Intern Senior', 'Helpdesk Trainee']
                },
                'E2': {
                    title: 'Becario/a CAU',
                    responsibilities: 'Prácticas formativas en helpdesk, observación y aprendizaje',
                    experience: 'Prácticas',
                    equivalentTitles: ['IT Support Intern', 'Helpdesk Intern']
                }
            }
        },

        // Área 3 - Programación
        'A3': {
            name: 'Programación',
            description: 'Desarrollo de software, programación, ingeniería de software, DevOps, QA y testing',
            positions: {
                'A1': {
                    title: 'Director/a de Tecnología / CTO',
                    responsibilities: 'Estrategia tecnológica, arquitectura empresarial, gestión de equipos de desarrollo, decisiones técnicas de alto nivel',
                    experience: '10+ años',
                    equivalentTitles: ['CTO', 'VP Engineering', 'Director de Desarrollo', 'Head of Engineering', 'Technical Director']
                },
                'B1': {
                    title: 'Arquitecto/a de Software / Tech Lead Senior',
                    responsibilities: 'Diseño de arquitectura, decisiones técnicas, liderazgo técnico de múltiples equipos, code reviews',
                    experience: '7-10 años',
                    equivalentTitles: ['Software Architect', 'Principal Engineer', 'Staff Engineer', 'Technical Lead Senior']
                },
                'B2': {
                    title: 'Tech Lead / Lead Developer',
                    responsibilities: 'Liderazgo técnico de equipo, diseño de soluciones, mentoría, desarrollo de componentes críticos',
                    experience: '5-7 años',
                    equivalentTitles: ['Tech Lead', 'Lead Developer', 'Engineering Lead', 'Development Lead']
                },
                'C1': {
                    title: 'Senior Developer / Ingeniero/a Software Senior',
                    responsibilities: 'Desarrollo de funcionalidades complejas, code reviews, diseño técnico, mentoría de juniors',
                    experience: '4-6 años',
                    equivalentTitles: ['Senior Developer', 'Senior Software Engineer', 'Senior Programmer', 'Senior Full Stack Developer']
                },
                'C2': {
                    title: 'Developer / Ingeniero/a Software',
                    responsibilities: 'Desarrollo de funcionalidades, testing, debugging, documentación técnica',
                    experience: '2-4 años',
                    equivalentTitles: ['Software Developer', 'Software Engineer', 'Programmer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer']
                },
                'C3': {
                    title: 'Developer Junior Avanzado',
                    responsibilities: 'Desarrollo con supervisión reducida, tareas de complejidad media, testing',
                    experience: '1-2 años',
                    equivalentTitles: ['Junior Developer (Advanced)', 'Software Developer Junior', 'Associate Developer']
                },
                'D1': {
                    title: 'Junior Developer',
                    responsibilities: 'Desarrollo de tareas asignadas, corrección de bugs, testing básico, aprendizaje continuo',
                    experience: '1-2 años',
                    equivalentTitles: ['Junior Developer', 'Junior Programmer', 'Junior Software Engineer', 'Graduate Developer']
                },
                'D2': {
                    title: 'Junior Developer Entry',
                    responsibilities: 'Tareas de desarrollo simples, bugs menores, documentación, aprendizaje del codebase',
                    experience: '0-1 año',
                    equivalentTitles: ['Entry Level Developer', 'Trainee Developer', 'Associate Programmer']
                },
                'D3': {
                    title: 'Programador/a en Formación',
                    responsibilities: 'Formación en desarrollo, tareas muy básicas supervisadas, pair programming',
                    experience: '0 años',
                    equivalentTitles: ['Trainee Programmer', 'Development Trainee', 'Graduate Trainee']
                },
                'E1': {
                    title: 'Becario/a Desarrollo Senior',
                    responsibilities: 'Prácticas con desarrollo real supervisado, pequeñas funcionalidades',
                    experience: 'Prácticas',
                    equivalentTitles: ['Software Development Intern Senior', 'Programming Intern']
                },
                'E2': {
                    title: 'Becario/a Desarrollo',
                    responsibilities: 'Prácticas formativas, observación, tareas muy básicas',
                    experience: 'Prácticas',
                    equivalentTitles: ['Software Development Intern', 'IT Intern', 'Tech Intern']
                }
            }
        },

        // Área 4 - Consultoría de Negocio y Tecnológica
        'A4': {
            name: 'Consultoría de Negocio y Tecnológica',
            description: 'Consultoría IT, consultoría de negocio, implantación de ERPs, transformación digital, análisis funcional',
            positions: {
                'A1': {
                    title: 'Director/a de Consultoría / Partner',
                    responsibilities: 'Dirección de práctica de consultoría, desarrollo de negocio, gestión de grandes cuentas, estrategia',
                    experience: '12+ años',
                    equivalentTitles: ['Consulting Director', 'Partner', 'Managing Director', 'Practice Lead', 'Head of Consulting']
                },
                'B1': {
                    title: 'Principal Consultant / Manager',
                    responsibilities: 'Gestión de proyectos complejos, liderazgo de equipos de consultores, relación con cliente C-level',
                    experience: '8-12 años',
                    equivalentTitles: ['Principal Consultant', 'Consulting Manager', 'Senior Manager', 'Project Director']
                },
                'B2': {
                    title: 'Senior Consultant / Consultor/a Senior',
                    responsibilities: 'Liderazgo de workstreams, diseño de soluciones, presentaciones a cliente, mentoring',
                    experience: '5-8 años',
                    equivalentTitles: ['Senior Consultant', 'Senior Business Analyst', 'Senior SAP Consultant', 'Lead Functional Analyst']
                },
                'C1': {
                    title: 'Consultant / Consultor/a',
                    responsibilities: 'Análisis funcional, diseño de procesos, documentación, configuración de sistemas',
                    experience: '3-5 años',
                    equivalentTitles: ['Consultant', 'Business Analyst', 'Functional Consultant', 'SAP Consultant', 'ERP Consultant']
                },
                'C2': {
                    title: 'Consultor/a Junior Avanzado',
                    responsibilities: 'Análisis con supervisión, documentación de requisitos, testing funcional, soporte a consultores senior',
                    experience: '2-3 años',
                    equivalentTitles: ['Junior Consultant (Advanced)', 'Associate Consultant', 'Business Analyst Junior']
                },
                'C3': {
                    title: 'Consultor/a Junior',
                    responsibilities: 'Toma de requisitos básica, documentación, testing, soporte en implantaciones',
                    experience: '1-2 años',
                    equivalentTitles: ['Junior Consultant', 'Analyst', 'Junior Business Analyst']
                },
                'D1': {
                    title: 'Analista Junior',
                    responsibilities: 'Apoyo en análisis, documentación de procesos, preparación de materiales, testing',
                    experience: '1-2 años',
                    equivalentTitles: ['Junior Analyst', 'Associate Analyst', 'Graduate Consultant']
                },
                'D2': {
                    title: 'Analista Entry Level',
                    responsibilities: 'Tareas de apoyo, documentación básica, preparación de datos, aprendizaje',
                    experience: '0-1 año',
                    equivalentTitles: ['Entry Level Analyst', 'Trainee Consultant', 'Graduate Analyst']
                },
                'D3': {
                    title: 'Analista en Formación',
                    responsibilities: 'Formación en consultoría, observación de proyectos, tareas administrativas de proyecto',
                    experience: '0 años',
                    equivalentTitles: ['Trainee Analyst', 'Consulting Trainee']
                },
                'E1': {
                    title: 'Becario/a Consultoría Senior',
                    responsibilities: 'Prácticas con participación en proyectos reales, documentación',
                    experience: 'Prácticas',
                    equivalentTitles: ['Consulting Intern Senior', 'Business Analyst Intern']
                },
                'E2': {
                    title: 'Becario/a Consultoría',
                    responsibilities: 'Prácticas formativas, observación, apoyo administrativo',
                    experience: 'Prácticas',
                    equivalentTitles: ['Consulting Intern', 'Graduate Intern']
                }
            }
        },

        // Área 5 - Ciberseguridad
        'A5': {
            name: 'Ciberseguridad',
            description: 'Seguridad informática, análisis de vulnerabilidades, pentesting, SOC, respuesta a incidentes, GRC',
            positions: {
                'A1': {
                    title: 'CISO / Director/a de Seguridad',
                    responsibilities: 'Estrategia de ciberseguridad, gobierno de seguridad, gestión de riesgos, compliance, reporting a dirección',
                    experience: '12+ años',
                    equivalentTitles: ['CISO', 'Chief Information Security Officer', 'Security Director', 'Head of Cybersecurity']
                },
                'B1': {
                    title: 'Security Manager / Responsable de Seguridad',
                    responsibilities: 'Gestión del equipo de seguridad, definición de políticas, gestión de proyectos de seguridad, auditorías',
                    experience: '8-12 años',
                    equivalentTitles: ['Security Manager', 'Cybersecurity Manager', 'Information Security Manager', 'SOC Manager']
                },
                'B2': {
                    title: 'Senior Security Engineer / Arquitecto/a Seguridad',
                    responsibilities: 'Diseño de arquitectura de seguridad, evaluación de soluciones, liderazgo técnico, respuesta a incidentes graves',
                    experience: '5-8 años',
                    equivalentTitles: ['Senior Security Engineer', 'Security Architect', 'Principal Security Consultant', 'Lead Pentester']
                },
                'C1': {
                    title: 'Security Engineer / Consultor/a Ciberseguridad',
                    responsibilities: 'Implementación de controles, análisis de vulnerabilidades, pentesting, hardening, SIEM',
                    experience: '3-5 años',
                    equivalentTitles: ['Security Engineer', 'Cybersecurity Consultant', 'Pentester', 'Security Analyst Senior', 'SOC Analyst Senior']
                },
                'C2': {
                    title: 'Security Analyst / Analista de Seguridad',
                    responsibilities: 'Monitorización de seguridad, análisis de alertas, respuesta a incidentes nivel 2, reporting',
                    experience: '2-3 años',
                    equivalentTitles: ['Security Analyst', 'SOC Analyst', 'Cybersecurity Analyst', 'Threat Analyst']
                },
                'C3': {
                    title: 'Junior Security Analyst',
                    responsibilities: 'Monitorización básica, triaje de alertas, documentación de incidentes, soporte a analistas senior',
                    experience: '1-2 años',
                    equivalentTitles: ['Junior Security Analyst', 'SOC Analyst Junior', 'Security Operations Analyst']
                },
                'D1': {
                    title: 'Security Operations Junior',
                    responsibilities: 'Operaciones de seguridad básicas, monitorización, escalado de incidencias, tareas rutinarias',
                    experience: '1-2 años',
                    equivalentTitles: ['Junior SOC Analyst', 'Security Operations Junior', 'Cybersecurity Junior']
                },
                'D2': {
                    title: 'Security Operations Entry',
                    responsibilities: 'Tareas operativas básicas, aprendizaje de herramientas, monitorización supervisada',
                    experience: '0-1 año',
                    equivalentTitles: ['Entry Level Security Analyst', 'SOC Operator', 'Security Trainee']
                },
                'D3': {
                    title: 'Operador/a SOC en Formación',
                    responsibilities: 'Formación en seguridad, observación de operaciones, tareas muy básicas',
                    experience: '0 años',
                    equivalentTitles: ['SOC Trainee', 'Security Operations Trainee']
                },
                'E1': {
                    title: 'Becario/a Ciberseguridad Senior',
                    responsibilities: 'Prácticas con participación en operaciones de seguridad, análisis básico',
                    experience: 'Prácticas',
                    equivalentTitles: ['Cybersecurity Intern Senior', 'Security Intern']
                },
                'E2': {
                    title: 'Becario/a Ciberseguridad',
                    responsibilities: 'Prácticas formativas en seguridad, observación, aprendizaje',
                    experience: 'Prácticas',
                    equivalentTitles: ['Cybersecurity Intern', 'Security Trainee Intern']
                }
            }
        },

        // Área 6 - Estudios de Mercado
        'A6': {
            name: 'Estudios de Mercado y Opinión Pública',
            description: 'Investigación de mercados, análisis de datos, encuestas, focus groups, estudios cualitativos y cuantitativos',
            positions: {
                'A1': {
                    title: 'Director/a de Investigación',
                    responsibilities: 'Dirección de estudios complejos, gestión de clientes estratégicos, metodología, desarrollo de negocio',
                    experience: '10+ años',
                    equivalentTitles: ['Research Director', 'Director de Estudios', 'Head of Research', 'Managing Director Research']
                },
                'B1': {
                    title: 'Research Manager / Director/a de Proyectos',
                    responsibilities: 'Gestión de proyectos de investigación, relación con cliente, supervisión de equipos, control de calidad',
                    experience: '6-10 años',
                    equivalentTitles: ['Research Manager', 'Project Director', 'Senior Research Manager', 'Account Director']
                },
                'B2': {
                    title: 'Senior Research Executive',
                    responsibilities: 'Diseño de estudios, análisis avanzado, presentación de resultados, coordinación de campo',
                    experience: '4-6 años',
                    equivalentTitles: ['Senior Research Executive', 'Senior Market Research Analyst', 'Research Lead']
                },
                'C1': {
                    title: 'Research Executive / Analista Senior',
                    responsibilities: 'Diseño de cuestionarios, análisis de datos, elaboración de informes, contacto con cliente',
                    experience: '3-5 años',
                    equivalentTitles: ['Research Executive', 'Market Research Analyst', 'Research Analyst', 'Data Analyst Research']
                },
                'C2': {
                    title: 'Research Analyst / Analista',
                    responsibilities: 'Análisis de datos, tabulación, gráficos, soporte en diseño de estudios',
                    experience: '2-3 años',
                    equivalentTitles: ['Research Analyst', 'Market Analyst', 'Data Analyst', 'Quantitative Analyst']
                },
                'C3': {
                    title: 'Junior Research Analyst',
                    responsibilities: 'Apoyo en análisis, procesamiento de datos, revisión de cuestionarios, trabajo de campo',
                    experience: '1-2 años',
                    equivalentTitles: ['Junior Research Analyst', 'Junior Market Research Analyst', 'Research Assistant']
                },
                'D1': {
                    title: 'Técnico/a de Estudios',
                    responsibilities: 'Procesamiento de datos, codificación, tabulación básica, control de campo',
                    experience: '1-2 años',
                    equivalentTitles: ['Research Technician', 'Data Processing Technician', 'Field Coordinator']
                },
                'D2': {
                    title: 'Técnico/a de Campo',
                    responsibilities: 'Supervisión de encuestadores, control de calidad de campo, logística de estudios',
                    experience: '0-1 año',
                    equivalentTitles: ['Field Technician', 'Field Supervisor', 'Survey Coordinator']
                },
                'D3': {
                    title: 'Auxiliar de Estudios',
                    responsibilities: 'Apoyo administrativo, introducción de datos, tareas básicas de campo',
                    experience: '0 años',
                    equivalentTitles: ['Research Assistant', 'Data Entry', 'Field Assistant']
                },
                'E1': {
                    title: 'Becario/a Investigación Senior',
                    responsibilities: 'Prácticas con participación en proyectos de investigación, análisis básico',
                    experience: 'Prácticas',
                    equivalentTitles: ['Research Intern Senior', 'Market Research Intern']
                },
                'E2': {
                    title: 'Becario/a Investigación',
                    responsibilities: 'Prácticas formativas, observación, apoyo básico',
                    experience: 'Prácticas',
                    equivalentTitles: ['Research Intern', 'Market Research Trainee']
                }
            }
        }
    },

    /**
     * Get position description for a specific area, group and level
     * @param {number} area - Area number (1-6)
     * @param {string} group - Group letter (A-E)
     * @param {number} level - Level number
     * @returns {Object|null} - Position description or null
     */
    getPositionDescription(area, group, level) {
        const areaKey = `A${area}`;
        const positionKey = `${group}${level}`;
        const areaData = this.positionDescriptions[areaKey];
        if (!areaData) return null;
        return areaData.positions[positionKey] || null;
    },

    /**
     * Market rates reference data (2025)
     * Sources: Glassdoor, Indeed, Talent.com, InfoJobs, Michael Page, Randstad
     * IMPORTANT: These are orientative ranges, actual salaries vary by company, location, and experience
     * Data updated: December 2025
     */
    marketRates: {
        // Job title mappings to convenio categories with market salary ranges
        // Comprehensive coverage for all areas, groups and levels

        // ==========================================
        // ÁREA 1 - BPO Y ADMINISTRACIÓN INTERNA
        // ==========================================
        'A1-A1': { min: 45000, max: 70000, roles: ['Director de Operaciones BPO', 'Head of Back Office', 'Operations Director'] },
        'A1-B1': { min: 35000, max: 50000, roles: ['Team Leader Senior', 'Service Delivery Manager', 'Responsable de Operaciones'] },
        'A1-B2': { min: 28000, max: 40000, roles: ['Team Leader', 'Coordinator', 'Supervisor BPO'] },
        'A1-C1': { min: 25000, max: 35000, roles: ['Senior Back Office Specialist', 'Process Specialist'] },
        'A1-C2': { min: 22000, max: 30000, roles: ['Back Office Specialist', 'Administrativo Back Office'] },
        'A1-C3': { min: 20000, max: 26000, roles: ['Back Office Technician', 'Data Entry Specialist'] },
        'A1-D1': { min: 18000, max: 24000, roles: ['Administrativo Senior', 'Office Administrator'] },
        'A1-D2': { min: 17000, max: 22000, roles: ['Administrativo', 'Office Assistant'] },
        'A1-D3': { min: 16000, max: 20000, roles: ['Auxiliar Administrativo', 'Junior Administrative'] },
        'A1-E1': { min: 12000, max: 16000, roles: ['Becario Senior', 'Senior Intern'] },
        'A1-E2': { min: 8000, max: 14000, roles: ['Becario', 'Intern', 'Trainee'] },

        // ==========================================
        // ÁREA 2 - CAU (CENTRO ATENCIÓN USUARIO)
        // ==========================================
        'A2-A1': { min: 50000, max: 75000, roles: ['Service Desk Director', 'Head of IT Support', 'IT Service Director'] },
        'A2-B1': { min: 40000, max: 60000, roles: ['Service Desk Manager', 'IT Support Manager', 'Helpdesk Manager'] },
        'A2-B2': { min: 30000, max: 42000, roles: ['CAU Team Leader', 'Support Team Lead', 'Helpdesk Supervisor'] },
        'A2-C1': { min: 26000, max: 38000, roles: ['Senior Support Engineer', 'L2 Support Specialist', 'Technical Support Senior'] },
        'A2-C2': { min: 22000, max: 32000, roles: ['L2 Support Technician', 'IT Support Specialist', 'System Administrator'] },
        'A2-C3': { min: 20000, max: 28000, roles: ['Senior Helpdesk Technician', 'L1 Support Senior'] },
        'A2-D1': { min: 18000, max: 25000, roles: ['Helpdesk Technician', 'Técnico CAU', 'Service Desk Analyst'] },
        'A2-D2': { min: 17000, max: 22000, roles: ['Junior Helpdesk', 'IT Support Junior', 'Técnico Soporte N1'] },
        'A2-D3': { min: 16000, max: 20000, roles: ['Helpdesk Operator', 'Operador CAU', 'Support Agent'] },
        'A2-E1': { min: 12000, max: 16000, roles: ['IT Support Intern Senior', 'Helpdesk Trainee'] },
        'A2-E2': { min: 8000, max: 14000, roles: ['IT Support Intern', 'Helpdesk Intern'] },

        // ==========================================
        // ÁREA 3 - PROGRAMACIÓN
        // ==========================================
        'A3-A1': { min: 65000, max: 120000, roles: ['CTO', 'VP Engineering', 'Director de Tecnología', 'Head of Engineering'] },
        'A3-B1': { min: 55000, max: 85000, roles: ['Software Architect', 'Principal Engineer', 'Staff Engineer', 'Tech Lead Senior'] },
        'A3-B2': { min: 48000, max: 70000, roles: ['Tech Lead', 'Lead Developer', 'Engineering Lead', 'Development Manager'] },
        'A3-C1': { min: 40000, max: 58000, roles: ['Senior Developer', 'Senior Software Engineer', 'Senior Full Stack Developer', 'DevOps Engineer Senior'] },
        'A3-C2': { min: 32000, max: 48000, roles: ['Software Developer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'DevOps Engineer'] },
        'A3-C3': { min: 28000, max: 40000, roles: ['Developer', 'Programmer', 'Software Engineer', 'Junior Developer Avanzado'] },
        'A3-D1': { min: 24000, max: 34000, roles: ['Junior Developer', 'Junior Programmer', 'Graduate Developer'] },
        'A3-D2': { min: 20000, max: 28000, roles: ['Entry Level Developer', 'Trainee Developer', 'Junior Software Engineer'] },
        'A3-D3': { min: 18000, max: 24000, roles: ['Trainee Programmer', 'Development Trainee', 'Graduate Trainee'] },
        'A3-E1': { min: 14000, max: 20000, roles: ['Software Development Intern Senior', 'Programming Intern'] },
        'A3-E2': { min: 8000, max: 16000, roles: ['Software Development Intern', 'Tech Intern', 'IT Intern'] },

        // ==========================================
        // ÁREA 4 - CONSULTORÍA NEGOCIO Y TECNOLÓGICA
        // ==========================================
        'A4-A1': { min: 70000, max: 130000, roles: ['Consulting Director', 'Partner', 'Managing Director', 'Head of Consulting'] },
        'A4-B1': { min: 55000, max: 90000, roles: ['Principal Consultant', 'Consulting Manager', 'Senior Manager', 'SAP Manager'] },
        'A4-B2': { min: 45000, max: 70000, roles: ['Senior Consultant', 'Senior SAP Consultant', 'Senior Business Analyst', 'Lead Functional Analyst'] },
        'A4-C1': { min: 38000, max: 55000, roles: ['Consultant', 'SAP Consultant', 'Business Analyst', 'Functional Consultant', 'ERP Consultant'] },
        'A4-C2': { min: 30000, max: 45000, roles: ['Associate Consultant', 'Junior Consultant Avanzado', 'Business Analyst', 'Data Analyst'] },
        'A4-C3': { min: 26000, max: 38000, roles: ['Junior Consultant', 'Junior SAP Consultant', 'Analyst'] },
        'A4-D1': { min: 22000, max: 32000, roles: ['Junior Analyst', 'Associate Analyst', 'Graduate Consultant'] },
        'A4-D2': { min: 20000, max: 28000, roles: ['Entry Level Analyst', 'Trainee Consultant', 'Graduate Analyst'] },
        'A4-D3': { min: 18000, max: 24000, roles: ['Trainee Analyst', 'Consulting Trainee'] },
        'A4-E1': { min: 14000, max: 20000, roles: ['Consulting Intern Senior', 'Business Analyst Intern'] },
        'A4-E2': { min: 8000, max: 16000, roles: ['Consulting Intern', 'Graduate Intern'] },

        // ==========================================
        // ÁREA 5 - CIBERSEGURIDAD
        // ==========================================
        'A5-A1': { min: 80000, max: 150000, roles: ['CISO', 'Chief Information Security Officer', 'Security Director', 'Head of Cybersecurity'] },
        'A5-B1': { min: 60000, max: 95000, roles: ['Security Manager', 'Cybersecurity Manager', 'SOC Manager', 'Information Security Manager'] },
        'A5-B2': { min: 50000, max: 80000, roles: ['Senior Security Engineer', 'Security Architect', 'Lead Pentester', 'Principal Security Consultant'] },
        'A5-C1': { min: 40000, max: 60000, roles: ['Security Engineer', 'Cybersecurity Consultant', 'Pentester', 'Senior SOC Analyst'] },
        'A5-C2': { min: 32000, max: 50000, roles: ['Security Analyst', 'SOC Analyst', 'Cybersecurity Analyst', 'Threat Analyst'] },
        'A5-C3': { min: 28000, max: 42000, roles: ['Junior Security Analyst', 'SOC Analyst Junior', 'Security Operations Analyst'] },
        'A5-D1': { min: 24000, max: 35000, roles: ['Junior SOC Analyst', 'Security Operations Junior', 'Cybersecurity Junior'] },
        'A5-D2': { min: 22000, max: 30000, roles: ['Entry Level Security Analyst', 'SOC Operator', 'Security Trainee'] },
        'A5-D3': { min: 20000, max: 26000, roles: ['SOC Trainee', 'Security Operations Trainee'] },
        'A5-E1': { min: 16000, max: 22000, roles: ['Cybersecurity Intern Senior', 'Security Intern'] },
        'A5-E2': { min: 10000, max: 18000, roles: ['Cybersecurity Intern', 'Security Trainee Intern'] },

        // ==========================================
        // ÁREA 6 - ESTUDIOS DE MERCADO
        // ==========================================
        'A6-A1': { min: 50000, max: 80000, roles: ['Research Director', 'Director de Estudios', 'Head of Research'] },
        'A6-B1': { min: 38000, max: 55000, roles: ['Research Manager', 'Project Director', 'Senior Research Manager'] },
        'A6-B2': { min: 30000, max: 45000, roles: ['Senior Research Executive', 'Senior Market Research Analyst', 'Research Lead'] },
        'A6-C1': { min: 26000, max: 38000, roles: ['Research Executive', 'Market Research Analyst', 'Research Analyst'] },
        'A6-C2': { min: 22000, max: 32000, roles: ['Research Analyst', 'Market Analyst', 'Data Analyst', 'Quantitative Analyst'] },
        'A6-C3': { min: 20000, max: 28000, roles: ['Junior Research Analyst', 'Junior Market Research Analyst', 'Research Assistant'] },
        'A6-D1': { min: 18000, max: 25000, roles: ['Research Technician', 'Data Processing Technician', 'Field Coordinator'] },
        'A6-D2': { min: 17000, max: 22000, roles: ['Field Technician', 'Survey Coordinator', 'Técnico de Campo'] },
        'A6-D3': { min: 16000, max: 20000, roles: ['Research Assistant', 'Data Entry', 'Field Assistant'] },
        'A6-E1': { min: 12000, max: 16000, roles: ['Research Intern Senior', 'Market Research Intern'] },
        'A6-E2': { min: 8000, max: 14000, roles: ['Research Intern', 'Market Research Trainee'] },

        /**
         * Get market rate info for a specific convenio category
         * @param {number} area - Area number
         * @param {string} group - Group letter
         * @param {number} level - Level number
         * @returns {Object|null} - Market rate info or null
         */
        getMarketRateForCategory(area, group, level) {
            const key = `A${area}-${group}${level}`;
            const data = this[key];

            if (!data) return null;

            return {
                roles: data.roles,
                marketRange: { min: data.min, max: data.max }
            };
        }
    }
};
