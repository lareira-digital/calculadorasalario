/**
 * Social Security rates and calculations for Spain
 * Data based on 2024 official rates from Seguridad Social
 */

const SocialSecurity = {
    // Contribution bases (monthly)
    bases: {
        2024: {
            min: 1323.00,  // Base mínima de cotización
            max: 4720.50   // Base máxima de cotización
        },
        2025: {
            min: 1381.30,  // Estimated based on SMI increase
            max: 4909.50   // Estimated
        },
        2026: {
            min: 1420.00,  // Estimated
            max: 5050.00   // Estimated
        }
    },

    // Worker contribution rates (%)
    worker: {
        commonContingencies: 4.70,      // Contingencias comunes
        unemployment: {
            indefinido: 1.55,           // Contrato indefinido
            temporal: 1.60              // Contrato temporal
        },
        training: 0.10                  // Formación profesional
    },

    // Company contribution rates (%)
    company: {
        commonContingencies: 23.60,     // Contingencias comunes
        unemployment: {
            indefinido: 5.50,           // Contrato indefinido
            temporal: 6.70              // Contrato temporal (duración determinada TC)
        },
        fogasa: 0.20,                   // Fondo de Garantía Salarial
        training: 0.60,                 // Formación profesional
        accidents: 1.50                 // Accidentes de trabajo y enfermedades profesionales (IT sector average)
    },

    // MEI (Mecanismo de Equidad Intergeneracional) - additional contribution
    mei: {
        2024: {
            worker: 0.12,
            company: 0.58
        },
        2025: {
            worker: 0.13,
            company: 0.62
        },
        2026: {
            worker: 0.15,
            company: 0.65
        }
    },

    /**
     * Calculate monthly contribution base from annual gross salary
     * @param {number} grossAnnual - Annual gross salary
     * @param {number} numPayments - Number of payments (12 or 14)
     * @param {number} year - Year for the calculation
     * @returns {number} - Monthly contribution base (capped)
     */
    calculateContributionBase(grossAnnual, numPayments, year) {
        const bases = this.bases[year] || this.bases[2024];

        // Monthly contribution base = annual salary / 12 (always 12 for SS purposes)
        let monthlyBase = grossAnnual / 12;

        // Apply min and max limits
        if (monthlyBase < bases.min) {
            monthlyBase = bases.min;
        } else if (monthlyBase > bases.max) {
            monthlyBase = bases.max;
        }

        return monthlyBase;
    },

    /**
     * Calculate worker's Social Security contributions
     * @param {number} grossAnnual - Annual gross salary
     * @param {string} contractType - 'indefinido' or 'temporal'
     * @param {number} year - Year for the calculation
     * @returns {Object} - Breakdown of worker contributions
     */
    calculateWorkerContributions(grossAnnual, contractType, year) {
        const monthlyBase = this.calculateContributionBase(grossAnnual, 12, year);
        const annualBase = monthlyBase * 12;
        const mei = this.mei[year] || this.mei[2024];

        const commonContingencies = annualBase * (this.worker.commonContingencies / 100);
        const unemployment = annualBase * (this.worker.unemployment[contractType] / 100);
        const training = annualBase * (this.worker.training / 100);
        const meiContribution = annualBase * (mei.worker / 100);

        const total = commonContingencies + unemployment + training + meiContribution;

        return {
            base: annualBase,
            monthlyBase: monthlyBase,
            commonContingencies: commonContingencies,
            commonContingenciesRate: this.worker.commonContingencies,
            unemployment: unemployment,
            unemploymentRate: this.worker.unemployment[contractType],
            training: training,
            trainingRate: this.worker.training,
            mei: meiContribution,
            meiRate: mei.worker,
            total: total,
            totalRate: this.worker.commonContingencies +
                       this.worker.unemployment[contractType] +
                       this.worker.training +
                       mei.worker
        };
    },

    /**
     * Calculate company's Social Security contributions
     * @param {number} grossAnnual - Annual gross salary
     * @param {string} contractType - 'indefinido' or 'temporal'
     * @param {number} year - Year for the calculation
     * @returns {Object} - Breakdown of company contributions
     */
    calculateCompanyContributions(grossAnnual, contractType, year) {
        const monthlyBase = this.calculateContributionBase(grossAnnual, 12, year);
        const annualBase = monthlyBase * 12;
        const mei = this.mei[year] || this.mei[2024];

        const commonContingencies = annualBase * (this.company.commonContingencies / 100);
        const unemployment = annualBase * (this.company.unemployment[contractType] / 100);
        const fogasa = annualBase * (this.company.fogasa / 100);
        const training = annualBase * (this.company.training / 100);
        const accidents = annualBase * (this.company.accidents / 100);
        const meiContribution = annualBase * (mei.company / 100);

        const total = commonContingencies + unemployment + fogasa + training + accidents + meiContribution;

        return {
            base: annualBase,
            monthlyBase: monthlyBase,
            commonContingencies: commonContingencies,
            commonContingenciesRate: this.company.commonContingencies,
            unemployment: unemployment,
            unemploymentRate: this.company.unemployment[contractType],
            fogasa: fogasa,
            fogasaRate: this.company.fogasa,
            training: training,
            trainingRate: this.company.training,
            accidents: accidents,
            accidentsRate: this.company.accidents,
            mei: meiContribution,
            meiRate: mei.company,
            total: total,
            totalRate: this.company.commonContingencies +
                       this.company.unemployment[contractType] +
                       this.company.fogasa +
                       this.company.training +
                       this.company.accidents +
                       mei.company
        };
    }
};
