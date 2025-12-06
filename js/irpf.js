/**
 * IRPF (Personal Income Tax) calculations for Spain
 * Based on 2024 official rates from Agencia Tributaria
 */

const IRPF = {
    // State IRPF brackets (same for all Spain except Navarra and País Vasco)
    // These are the general state brackets (50% of total)
    stateBrackets: {
        2024: [
            { from: 0, to: 12450, rate: 9.50 },
            { from: 12450, to: 20200, rate: 12.00 },
            { from: 20200, to: 35200, rate: 15.00 },
            { from: 35200, to: 60000, rate: 18.50 },
            { from: 60000, to: 300000, rate: 22.50 },
            { from: 300000, to: Infinity, rate: 24.50 }
        ],
        2025: [
            { from: 0, to: 12450, rate: 9.50 },
            { from: 12450, to: 20200, rate: 12.00 },
            { from: 20200, to: 35200, rate: 15.00 },
            { from: 35200, to: 60000, rate: 18.50 },
            { from: 60000, to: 300000, rate: 22.50 },
            { from: 300000, to: Infinity, rate: 24.50 }
        ],
        2026: [
            { from: 0, to: 12450, rate: 9.50 },
            { from: 12450, to: 20200, rate: 12.00 },
            { from: 20200, to: 35200, rate: 15.00 },
            { from: 35200, to: 60000, rate: 18.50 },
            { from: 60000, to: 300000, rate: 22.50 },
            { from: 300000, to: Infinity, rate: 24.50 }
        ]
    },

    // Regional brackets 2024 (50% of total) - varies by autonomous community
    regionalBrackets: {
        2024: {
            // Madrid - lower regional rates
            'madrid': [
                { from: 0, to: 12450, rate: 8.50 },
                { from: 12450, to: 17707.20, rate: 10.70 },
                { from: 17707.20, to: 33007.20, rate: 12.80 },
                { from: 33007.20, to: 53407.20, rate: 17.40 },
                { from: 53407.20, to: Infinity, rate: 20.50 }
            ],
            // Cataluña - higher rates
            'cataluna': [
                { from: 0, to: 12450, rate: 10.50 },
                { from: 12450, to: 17707.20, rate: 12.00 },
                { from: 17707.20, to: 33007.20, rate: 14.00 },
                { from: 33007.20, to: 53407.20, rate: 18.50 },
                { from: 53407.20, to: 90000, rate: 21.50 },
                { from: 90000, to: 120000, rate: 23.50 },
                { from: 120000, to: 175000, rate: 24.50 },
                { from: 175000, to: Infinity, rate: 25.50 }
            ],
            // Andalucía
            'andalucia': [
                { from: 0, to: 12450, rate: 9.50 },
                { from: 12450, to: 20200, rate: 12.00 },
                { from: 20200, to: 35200, rate: 15.00 },
                { from: 35200, to: 60000, rate: 18.50 },
                { from: 60000, to: 120000, rate: 22.50 },
                { from: 120000, to: Infinity, rate: 24.50 }
            ],
            // Default - use state rates (for communities without specific data)
            'default': [
                { from: 0, to: 12450, rate: 9.50 },
                { from: 12450, to: 20200, rate: 12.00 },
                { from: 20200, to: 35200, rate: 15.00 },
                { from: 35200, to: 60000, rate: 18.50 },
                { from: 60000, to: 300000, rate: 22.50 },
                { from: 300000, to: Infinity, rate: 24.50 }
            ]
        },
        2025: {
            'madrid': [
                { from: 0, to: 12450, rate: 8.50 },
                { from: 12450, to: 17707.20, rate: 10.70 },
                { from: 17707.20, to: 33007.20, rate: 12.80 },
                { from: 33007.20, to: 53407.20, rate: 17.40 },
                { from: 53407.20, to: Infinity, rate: 20.50 }
            ],
            'cataluna': [
                { from: 0, to: 12450, rate: 10.50 },
                { from: 12450, to: 17707.20, rate: 12.00 },
                { from: 17707.20, to: 33007.20, rate: 14.00 },
                { from: 33007.20, to: 53407.20, rate: 18.50 },
                { from: 53407.20, to: 90000, rate: 21.50 },
                { from: 90000, to: 120000, rate: 23.50 },
                { from: 120000, to: 175000, rate: 24.50 },
                { from: 175000, to: Infinity, rate: 25.50 }
            ],
            'andalucia': [
                { from: 0, to: 12450, rate: 9.50 },
                { from: 12450, to: 20200, rate: 12.00 },
                { from: 20200, to: 35200, rate: 15.00 },
                { from: 35200, to: 60000, rate: 18.50 },
                { from: 60000, to: 120000, rate: 22.50 },
                { from: 120000, to: Infinity, rate: 24.50 }
            ],
            'default': [
                { from: 0, to: 12450, rate: 9.50 },
                { from: 12450, to: 20200, rate: 12.00 },
                { from: 20200, to: 35200, rate: 15.00 },
                { from: 35200, to: 60000, rate: 18.50 },
                { from: 60000, to: 300000, rate: 22.50 },
                { from: 300000, to: Infinity, rate: 24.50 }
            ]
        },
        2026: {
            'madrid': [
                { from: 0, to: 12450, rate: 8.50 },
                { from: 12450, to: 17707.20, rate: 10.70 },
                { from: 17707.20, to: 33007.20, rate: 12.80 },
                { from: 33007.20, to: 53407.20, rate: 17.40 },
                { from: 53407.20, to: Infinity, rate: 20.50 }
            ],
            'cataluna': [
                { from: 0, to: 12450, rate: 10.50 },
                { from: 12450, to: 17707.20, rate: 12.00 },
                { from: 17707.20, to: 33007.20, rate: 14.00 },
                { from: 33007.20, to: 53407.20, rate: 18.50 },
                { from: 53407.20, to: 90000, rate: 21.50 },
                { from: 90000, to: 120000, rate: 23.50 },
                { from: 120000, to: 175000, rate: 24.50 },
                { from: 175000, to: Infinity, rate: 25.50 }
            ],
            'andalucia': [
                { from: 0, to: 12450, rate: 9.50 },
                { from: 12450, to: 20200, rate: 12.00 },
                { from: 20200, to: 35200, rate: 15.00 },
                { from: 35200, to: 60000, rate: 18.50 },
                { from: 60000, to: 120000, rate: 22.50 },
                { from: 120000, to: Infinity, rate: 24.50 }
            ],
            'default': [
                { from: 0, to: 12450, rate: 9.50 },
                { from: 12450, to: 20200, rate: 12.00 },
                { from: 20200, to: 35200, rate: 15.00 },
                { from: 35200, to: 60000, rate: 18.50 },
                { from: 60000, to: 300000, rate: 22.50 },
                { from: 300000, to: Infinity, rate: 24.50 }
            ]
        }
    },

    // Personal and family minimum amounts (reduce taxable base)
    minimums: {
        2024: {
            // Personal minimum based on age
            personal: {
                general: 5550,
                age65to75: 6700,   // +1150 for 65+
                age75plus: 8100    // +2550 for 75+
            },
            // Descendants (children)
            descendants: {
                first: 2400,
                second: 2700,
                third: 4000,
                fourthAndMore: 4500,
                under3Bonus: 2800  // Additional for children under 3
            },
            // Ascendants (parents, grandparents)
            ascendants: {
                over65: 1150,
                over75: 2550       // Additional to over65
            },
            // Disability deductions
            disability: {
                '33-65': 3000,
                '33-65-mobility': 3000 + 3000,  // With reduced mobility assistance
                '65+': 12000
            }
        }
    },

    // Withholding minimums (below this, no IRPF is withheld)
    withholdingMinimums: {
        2024: {
            // Based on family situation and number of children
            // Format: { children: { situation: amount } }
            single: {
                0: 15876,
                1: 17894,
                2: 18989
            },
            married: {
                0: 15000,  // If spouse earns less than 1500€/year
                1: 16500,
                2: 17700
            }
        }
    },

    /**
     * Calculate personal and family minimums
     * @param {Object} params - Personal situation parameters
     * @returns {number} - Total minimum amount
     */
    calculateMinimums(params) {
        const mins = this.minimums[params.year] || this.minimums[2024];
        let total = 0;

        // Personal minimum based on age
        if (params.age >= 75) {
            total += mins.personal.age75plus;
        } else if (params.age >= 65) {
            total += mins.personal.age65to75;
        } else {
            total += mins.personal.general;
        }

        // Descendants
        const totalChildren = (params.childrenUnder3 || 0) + (params.children3to25 || 0);
        for (let i = 0; i < totalChildren; i++) {
            if (i === 0) total += mins.descendants.first;
            else if (i === 1) total += mins.descendants.second;
            else if (i === 2) total += mins.descendants.third;
            else total += mins.descendants.fourthAndMore;
        }

        // Bonus for children under 3
        total += (params.childrenUnder3 || 0) * mins.descendants.under3Bonus;

        // Children with disability
        if (params.childrenDisability) {
            total += params.childrenDisability * mins.disability['33-65'];
        }

        // Ascendants
        const ascendants65 = params.ascendants65to75 || 0;
        const ascendants75 = params.ascendants75plus || 0;

        total += ascendants65 * mins.ascendants.over65;
        total += ascendants75 * (mins.ascendants.over65 + mins.ascendants.over75);

        // Ascendants with disability
        if (params.ascendantsDisability) {
            total += params.ascendantsDisability * mins.disability['33-65'];
        }

        // Worker disability
        if (params.disability && params.disability !== 'none') {
            total += mins.disability[params.disability] || 0;
        }

        // For married filing jointly or single parent, the minimum can be applied twice in some cases
        // Simplified: we just return the calculated total
        return total;
    },

    /**
     * Calculate tax using brackets
     * @param {number} taxableBase - Amount to tax
     * @param {Array} brackets - Tax brackets to apply
     * @returns {number} - Tax amount
     */
    calculateBracketTax(taxableBase, brackets) {
        if (taxableBase <= 0) return 0;

        let tax = 0;
        let remaining = taxableBase;

        for (const bracket of brackets) {
            if (remaining <= 0) break;

            const bracketSize = bracket.to - bracket.from;
            const amountInBracket = Math.min(remaining, bracketSize);

            tax += amountInBracket * (bracket.rate / 100);
            remaining -= amountInBracket;
        }

        return tax;
    },

    /**
     * Calculate IRPF withholding rate and amount
     * @param {Object} params - All calculation parameters
     * @returns {Object} - IRPF calculation results
     */
    calculate(params) {
        const {
            grossAnnual,
            ssWorkerContribution,
            year,
            autonomousCommunity,
            familySituation,
            spouseIncome,
            age,
            childrenUnder3,
            children3to25,
            childrenDisability,
            ascendants65to75,
            ascendants75plus,
            ascendantsDisability,
            disability
        } = params;

        // Calculate taxable base (gross - social security contributions)
        const taxableBase = grossAnnual - ssWorkerContribution;

        // Calculate personal and family minimums
        const minimums = this.calculateMinimums({
            year,
            age,
            childrenUnder3,
            children3to25,
            childrenDisability,
            ascendants65to75,
            ascendants75plus,
            ascendantsDisability,
            disability,
            familySituation
        });

        // Get tax brackets
        const stateBrackets = this.stateBrackets[year] || this.stateBrackets[2024];
        const regionalBrackets = (this.regionalBrackets[year] || this.regionalBrackets[2024])[autonomousCommunity]
            || (this.regionalBrackets[year] || this.regionalBrackets[2024])['default'];

        // Calculate state portion (on base - minimums)
        const effectiveBase = Math.max(0, taxableBase - minimums);
        const stateTax = this.calculateBracketTax(effectiveBase, stateBrackets);

        // Calculate regional portion
        const regionalTax = this.calculateBracketTax(effectiveBase, regionalBrackets);

        // Total tax
        const totalTax = stateTax + regionalTax;

        // Calculate withholding rate
        let withholdingRate = (totalTax / grossAnnual) * 100;

        // Minimum withholding rate is 2% for most contracts
        withholdingRate = Math.max(withholdingRate, 2);

        // Check if below withholding threshold
        const totalChildren = (childrenUnder3 || 0) + (children3to25 || 0);
        const withholdingMins = this.withholdingMinimums[year] || this.withholdingMinimums[2024];

        let threshold = 0;
        if (familySituation === 'married-joint' || (familySituation === 'married-separate' && spouseIncome === 'no')) {
            threshold = withholdingMins.married[Math.min(totalChildren, 2)] || withholdingMins.married[2];
        } else {
            threshold = withholdingMins.single[Math.min(totalChildren, 2)] || withholdingMins.single[2];
        }

        // If below threshold, no withholding
        if (grossAnnual < threshold) {
            withholdingRate = 0;
        }

        // Round to 2 decimals
        withholdingRate = Math.round(withholdingRate * 100) / 100;

        const withholdingAmount = grossAnnual * (withholdingRate / 100);

        return {
            taxableBase,
            minimums,
            effectiveBase,
            stateTax,
            regionalTax,
            totalTax,
            withholdingRate,
            withholdingAmount,
            threshold
        };
    }
};
