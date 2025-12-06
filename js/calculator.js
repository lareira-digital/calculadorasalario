/**
 * Main salary calculator engine
 * Combines Social Security and IRPF calculations
 */

const Calculator = {
    /**
     * Perform full salary calculation
     * @param {Object} params - All input parameters
     * @returns {Object} - Complete calculation results
     */
    calculate(params) {
        const {
            grossAnnual,
            numPayments,
            year,
            contractType,
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

        // Calculate Social Security contributions
        const ssWorker = SocialSecurity.calculateWorkerContributions(
            grossAnnual,
            contractType,
            year
        );

        const ssCompany = SocialSecurity.calculateCompanyContributions(
            grossAnnual,
            contractType,
            year
        );

        // Calculate IRPF
        const irpf = IRPF.calculate({
            grossAnnual,
            ssWorkerContribution: ssWorker.total,
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
        });

        // Calculate net salary
        const netAnnual = grossAnnual - ssWorker.total - irpf.withholdingAmount;
        const netMonthly = netAnnual / numPayments;
        const grossMonthly = grossAnnual / numPayments;

        // Calculate total company cost
        const totalCompanyCost = grossAnnual + ssCompany.total;

        return {
            // Input summary
            input: {
                grossAnnual,
                grossMonthly,
                numPayments,
                year,
                contractType
            },

            // Social Security - Worker
            ssWorker: {
                base: ssWorker.base,
                monthlyBase: ssWorker.monthlyBase,
                commonContingencies: ssWorker.commonContingencies,
                commonContingenciesRate: ssWorker.commonContingenciesRate,
                unemployment: ssWorker.unemployment,
                unemploymentRate: ssWorker.unemploymentRate,
                training: ssWorker.training,
                trainingRate: ssWorker.trainingRate,
                mei: ssWorker.mei,
                meiRate: ssWorker.meiRate,
                total: ssWorker.total,
                totalRate: ssWorker.totalRate
            },

            // Social Security - Company
            ssCompany: {
                base: ssCompany.base,
                commonContingencies: ssCompany.commonContingencies,
                commonContingenciesRate: ssCompany.commonContingenciesRate,
                unemployment: ssCompany.unemployment,
                unemploymentRate: ssCompany.unemploymentRate,
                fogasa: ssCompany.fogasa,
                fogasaRate: ssCompany.fogasaRate,
                training: ssCompany.training,
                trainingRate: ssCompany.trainingRate,
                accidents: ssCompany.accidents,
                accidentsRate: ssCompany.accidentsRate,
                mei: ssCompany.mei,
                meiRate: ssCompany.meiRate,
                total: ssCompany.total,
                totalRate: ssCompany.totalRate
            },

            // IRPF
            irpf: {
                taxableBase: irpf.taxableBase,
                minimums: irpf.minimums,
                effectiveBase: irpf.effectiveBase,
                stateTax: irpf.stateTax,
                regionalTax: irpf.regionalTax,
                totalTax: irpf.totalTax,
                withholdingRate: irpf.withholdingRate,
                withholdingAmount: irpf.withholdingAmount
            },

            // Net salary
            net: {
                annual: netAnnual,
                monthly: netMonthly
            },

            // Company costs
            company: {
                grossSalary: grossAnnual,
                ssContributions: ssCompany.total,
                total: totalCompanyCost
            }
        };
    },

    /**
     * Format currency for display
     * @param {number} amount - Amount to format
     * @returns {string} - Formatted string
     */
    formatCurrency(amount) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    },

    /**
     * Format percentage for display
     * @param {number} rate - Rate to format
     * @returns {string} - Formatted string
     */
    formatPercentage(rate) {
        return rate.toFixed(2) + '%';
    }
};
