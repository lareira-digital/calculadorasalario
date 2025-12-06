/**
 * Main application logic - UI handling and form processing
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize i18n system
    if (typeof I18n !== 'undefined') {
        I18n.init();

        // Set up language selector buttons
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            const lang = btn.getAttribute('data-lang');

            // Mark the currently active language
            if (lang === I18n.currentLang) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                langButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                // Set the language
                I18n.setLanguage(lang);
            });
        });
    }

    const form = document.getElementById('salary-form');
    const resultsSection = document.getElementById('results');

    // Convenio type selector
    const convenioSelect = document.getElementById('convenio');
    const yearSelect = document.getElementById('year');
    const convenioSalaryDisplay = document.getElementById('convenio-salary-display');
    const useConvenioSalaryBtn = document.getElementById('use-convenio-salary');
    const grossSalaryInput = document.getElementById('gross-salary');

    // TIC convenio selectors
    const ticFields = document.getElementById('tic-fields');
    const areaSelect = document.getElementById('area');
    const groupSelect = document.getElementById('group');
    const levelSelect = document.getElementById('level');

    // Hostelería convenio selectors
    const hosteleriaFields = document.getElementById('hosteleria-fields');
    const establishmentGroupSelect = document.getElementById('establishment-group');
    const hosteleriaLevelSelect = document.getElementById('hosteleria-level');

    // Seguridad Privada convenio selectors
    const seguridadFields = document.getElementById('seguridad-fields');
    const seguridadCategorySelect = document.getElementById('seguridad-category');

    // Contact Center convenio selectors
    const contactCenterFields = document.getElementById('contact-center-fields');
    const contactCenterLevelSelect = document.getElementById('contact-center-level');

    // Gestorías Administrativas convenio selectors
    const gestoriasFields = document.getElementById('gestorias-fields');
    const gestoriasCategorySelect = document.getElementById('gestorias-category');

    // Regional notice
    const regionalNotice = document.getElementById('convenio-regional-notice');

    // Modal elements - Convenio missing
    const convenioMissingLink = document.getElementById('convenio-missing-link');
    const convenioMissingModal = document.getElementById('convenio-missing-modal');
    const modalOverlay = convenioMissingModal.querySelector('.modal-overlay');
    const modalCloseBtn = convenioMissingModal.querySelector('.modal-close');
    const modalCloseBtnBottom = convenioMissingModal.querySelector('.btn-modal-close');

    // Modal elements - Spanish text explanation
    const spanishTextHelpBtn = document.getElementById('spanish-text-help');
    const spanishTextModal = document.getElementById('spanish-text-modal');
    const spanishModalOverlay = spanishTextModal.querySelector('.modal-overlay');
    const spanishModalCloseBtn = spanishTextModal.querySelector('.modal-close');
    const spanishModalCloseBtnBottom = spanishTextModal.querySelector('.btn-modal-close');

    // Handle family situation changes to show/hide spouse income field
    const familySituation = document.getElementById('family-situation');
    const spouseIncomeGroup = document.getElementById('spouse-income').closest('.form-group');

    function updateSpouseVisibility() {
        const isMarried = familySituation.value.startsWith('married');
        spouseIncomeGroup.style.display = isMarried ? 'block' : 'none';
    }

    familySituation.addEventListener('change', updateSpouseVisibility);
    updateSpouseVisibility();

    /**
     * Get current convenio type
     */
    function getCurrentConvenio() {
        return convenioSelect.value;
    }

    /**
     * Switch between convenio field sets
     */
    function updateConvenioFields() {
        const convenio = getCurrentConvenio();

        // Hide all convenio-specific fields first
        ticFields.classList.add('hidden');
        hosteleriaFields.classList.add('hidden');
        seguridadFields.classList.add('hidden');
        contactCenterFields.classList.add('hidden');
        gestoriasFields.classList.add('hidden');
        regionalNotice.classList.add('hidden');

        if (convenio === 'tic') {
            ticFields.classList.remove('hidden');
            updateYearOptionsForTIC();
        } else if (convenio === 'hosteleria') {
            hosteleriaFields.classList.remove('hidden');
            regionalNotice.classList.remove('hidden');
            updateYearOptionsForHosteleria();
        } else if (convenio === 'seguridad-privada') {
            seguridadFields.classList.remove('hidden');
            updateYearOptionsForSeguridad();
        } else if (convenio === 'contact-center') {
            contactCenterFields.classList.remove('hidden');
            updateYearOptionsForContactCenter();
        } else if (convenio === 'gestorias') {
            gestoriasFields.classList.remove('hidden');
            updateYearOptionsForGestorias();
        }

        updateConvenioSalaryDisplay();
    }

    /**
     * Update year options for TIC convenio (2025-2027)
     */
    function updateYearOptionsForTIC() {
        const currentYear = parseInt(yearSelect.value);
        yearSelect.innerHTML = `
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
        `;
        // Keep current selection if valid
        if ([2025, 2026, 2027].includes(currentYear)) {
            yearSelect.value = currentYear;
        } else {
            yearSelect.value = '2025';
        }
    }

    /**
     * Update year options for Hostelería convenio (2023-2025)
     */
    function updateYearOptionsForHosteleria() {
        const currentYear = parseInt(yearSelect.value);
        yearSelect.innerHTML = `
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
        `;
        // Keep current selection if valid
        if ([2023, 2024, 2025].includes(currentYear)) {
            yearSelect.value = currentYear;
        } else {
            yearSelect.value = '2025';
        }
    }

    /**
     * Update year options for Seguridad Privada convenio (2023-2026)
     */
    function updateYearOptionsForSeguridad() {
        const currentYear = parseInt(yearSelect.value);
        yearSelect.innerHTML = `
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
        `;
        // Keep current selection if valid
        if ([2023, 2024, 2025, 2026].includes(currentYear)) {
            yearSelect.value = currentYear;
        } else {
            yearSelect.value = '2025';
        }
    }

    /**
     * Update year options for Contact Center convenio (2022-2026)
     */
    function updateYearOptionsForContactCenter() {
        const currentYear = parseInt(yearSelect.value);
        yearSelect.innerHTML = `
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
        `;
        // Keep current selection if valid
        if ([2022, 2023, 2024, 2025, 2026].includes(currentYear)) {
            yearSelect.value = currentYear;
        } else {
            yearSelect.value = '2025';
        }
    }

    /**
     * Update year options for Gestorías Administrativas convenio (2024-2026)
     */
    function updateYearOptionsForGestorias() {
        const currentYear = parseInt(yearSelect.value);
        yearSelect.innerHTML = `
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
        `;
        // Keep current selection if valid
        if ([2024, 2025, 2026].includes(currentYear)) {
            yearSelect.value = currentYear;
        } else {
            yearSelect.value = '2025';
        }
    }

    /**
     * Get available levels for a given group (TIC convenio)
     */
    function getLevelsForGroup(group) {
        const groupLevels = {
            'A': [1],
            'B': [1, 2],
            'C': [1, 2, 3],
            'D': [1, 2, 3],
            'E': [1, 2]
        };
        return groupLevels[group] || [1];
    }

    /**
     * Update level dropdown based on selected group (TIC convenio)
     */
    function updateLevelOptions() {
        const group = groupSelect.value;
        const levels = getLevelsForGroup(group);
        const currentLevel = parseInt(levelSelect.value);

        levelSelect.innerHTML = '';
        levels.forEach(level => {
            const option = document.createElement('option');
            option.value = level;
            option.textContent = `Nivel ${level}`;
            if (level === currentLevel || (levels.length === 1 && level === levels[0])) {
                option.selected = true;
            }
            levelSelect.appendChild(option);
        });

        // If current level is not available, select first available
        if (!levels.includes(currentLevel)) {
            levelSelect.value = levels[0];
        }

        updateConvenioSalaryDisplay();
    }

    /**
     * Get current convenio salary based on selections
     */
    function getConvenioSalary() {
        const convenio = getCurrentConvenio();
        const year = parseInt(yearSelect.value);

        if (convenio === 'tic') {
            const area = parseInt(areaSelect.value);
            const group = groupSelect.value;
            const level = parseInt(levelSelect.value);
            return ConvenioIT.getSalary(area, group, level, year);
        } else if (convenio === 'hosteleria') {
            const establishmentGroup = establishmentGroupSelect.value;
            const level = hosteleriaLevelSelect.value;
            return ConvenioHosteleria.getSalary(establishmentGroup, level, year);
        } else if (convenio === 'seguridad-privada') {
            const category = seguridadCategorySelect.value;
            return ConvenioSeguridadPrivada.getSalary(category, year);
        } else if (convenio === 'contact-center') {
            const level = parseInt(contactCenterLevelSelect.value);
            return ConvenioContactCenter.getSalary(level, year);
        } else if (convenio === 'gestorias') {
            const category = gestoriasCategorySelect.value;
            return ConvenioGestorias.getSalary(category, year);
        }

        return null;
    }

    /**
     * Update the convenio salary display in the form
     */
    function updateConvenioSalaryDisplay() {
        const salary = getConvenioSalary();
        if (salary) {
            convenioSalaryDisplay.textContent = Calculator.formatCurrency(salary.total);
        } else {
            convenioSalaryDisplay.textContent = 'No disponible';
        }

        // Update market rate display
        updateMarketRateDisplay();
    }

    /**
     * Update the market rate display based on current selection
     */
    function updateMarketRateDisplay() {
        const convenio = getCurrentConvenio();
        const marketRateRange = document.getElementById('market-rate-range');
        const marketRateRoles = document.getElementById('market-rate-roles');

        let marketData = null;

        if (convenio === 'tic') {
            const area = parseInt(areaSelect.value);
            const group = groupSelect.value;
            const level = parseInt(levelSelect.value);
            marketData = ConvenioIT.marketRates.getMarketRateForCategory(area, group, level);
        } else if (convenio === 'hosteleria') {
            const establishmentGroup = establishmentGroupSelect.value;
            const level = hosteleriaLevelSelect.value;
            marketData = ConvenioHosteleria.marketRates.getMarketRateForCategory(establishmentGroup, level);
        } else if (convenio === 'seguridad-privada') {
            const category = seguridadCategorySelect.value;
            marketData = ConvenioSeguridadPrivada.marketRates.getMarketRateForCategory(category);
        } else if (convenio === 'contact-center') {
            const level = parseInt(contactCenterLevelSelect.value);
            marketData = ConvenioContactCenter.marketRates.getMarketRateForCategory(level);
        } else if (convenio === 'gestorias') {
            const category = gestoriasCategorySelect.value;
            marketData = ConvenioGestorias.marketRates.getMarketRateForCategory(category);
        }

        if (marketData) {
            // Format the range
            const minFormatted = Calculator.formatCurrency(marketData.marketRange.min);
            const maxFormatted = Calculator.formatCurrency(marketData.marketRange.max);
            marketRateRange.textContent = `${minFormatted} - ${maxFormatted}`;

            // Show matching roles as tags
            marketRateRoles.innerHTML = marketData.roles
                .map(role => `<span class="market-rate-role-tag">${role}</span>`)
                .join('');
        } else {
            marketRateRange.textContent = '-';
            marketRateRoles.innerHTML = '<span class="market-rate-no-data">No hay datos de mercado para esta categoría</span>';
        }
    }

    /**
     * Get convenio params for comparison display
     */
    function getConvenioParams() {
        const convenio = getCurrentConvenio();

        if (convenio === 'tic') {
            return {
                type: 'tic',
                area: parseInt(areaSelect.value),
                group: groupSelect.value,
                level: parseInt(levelSelect.value)
            };
        } else if (convenio === 'hosteleria') {
            return {
                type: 'hosteleria',
                establishmentGroup: establishmentGroupSelect.value,
                level: hosteleriaLevelSelect.value
            };
        } else if (convenio === 'seguridad-privada') {
            return {
                type: 'seguridad-privada',
                category: seguridadCategorySelect.value
            };
        } else if (convenio === 'contact-center') {
            return {
                type: 'contact-center',
                level: parseInt(contactCenterLevelSelect.value)
            };
        } else if (convenio === 'gestorias') {
            return {
                type: 'gestorias',
                category: gestoriasCategorySelect.value
            };
        }

        return null;
    }

    // Event listeners for convenio switching
    convenioSelect.addEventListener('change', updateConvenioFields);

    // Event listeners for year
    yearSelect.addEventListener('change', updateConvenioSalaryDisplay);

    // Event listeners for TIC convenio selectors
    areaSelect.addEventListener('change', updateConvenioSalaryDisplay);
    groupSelect.addEventListener('change', updateLevelOptions);
    levelSelect.addEventListener('change', updateConvenioSalaryDisplay);

    // Event listeners for Hostelería convenio selectors
    establishmentGroupSelect.addEventListener('change', updateConvenioSalaryDisplay);
    hosteleriaLevelSelect.addEventListener('change', updateConvenioSalaryDisplay);

    // Event listeners for Seguridad Privada convenio selectors
    seguridadCategorySelect.addEventListener('change', updateConvenioSalaryDisplay);

    // Event listeners for Contact Center convenio selectors
    contactCenterLevelSelect.addEventListener('change', updateConvenioSalaryDisplay);

    // Event listeners for Gestorías convenio selectors
    gestoriasCategorySelect.addEventListener('change', updateConvenioSalaryDisplay);

    // Modal event listeners - Convenio missing modal
    function openConvenioModal() {
        convenioMissingModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeConvenioModal() {
        convenioMissingModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    convenioMissingLink.addEventListener('click', function(e) {
        e.preventDefault();
        openConvenioModal();
    });

    modalOverlay.addEventListener('click', closeConvenioModal);
    modalCloseBtn.addEventListener('click', closeConvenioModal);
    modalCloseBtnBottom.addEventListener('click', closeConvenioModal);

    // Modal event listeners - Spanish text explanation modal
    function openSpanishModal() {
        spanishTextModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeSpanishModal() {
        spanishTextModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    spanishTextHelpBtn.addEventListener('click', openSpanishModal);
    spanishModalOverlay.addEventListener('click', closeSpanishModal);
    spanishModalCloseBtn.addEventListener('click', closeSpanishModal);
    spanishModalCloseBtnBottom.addEventListener('click', closeSpanishModal);

    // Close modals on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (!convenioMissingModal.classList.contains('hidden')) {
                closeConvenioModal();
            }
            if (!spanishTextModal.classList.contains('hidden')) {
                closeSpanishModal();
            }
        }
    });

    // Button to use convenio salary
    useConvenioSalaryBtn.addEventListener('click', function() {
        const salary = getConvenioSalary();
        if (salary) {
            grossSalaryInput.value = salary.total.toFixed(2);
        }
    });

    // Initialize convenio display
    updateConvenioFields();
    updateLevelOptions();

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Gather all form data
        const params = {
            grossAnnual: parseFloat(document.getElementById('gross-salary').value) || 0,
            numPayments: parseInt(document.getElementById('num-payments').value),
            year: parseInt(document.getElementById('year').value),
            contractType: document.getElementById('contract-type').value,
            autonomousCommunity: document.getElementById('autonomous-community').value,
            familySituation: document.getElementById('family-situation').value,
            spouseIncome: document.getElementById('spouse-income').value,
            age: parseInt(document.getElementById('age').value) || 30,
            childrenUnder3: parseInt(document.getElementById('children-under-3').value) || 0,
            children3to25: parseInt(document.getElementById('children-3-to-25').value) || 0,
            childrenDisability: parseInt(document.getElementById('children-disability').value) || 0,
            ascendants65to75: parseInt(document.getElementById('ascendants-65-75').value) || 0,
            ascendants75plus: parseInt(document.getElementById('ascendants-75+').value) || 0,
            ascendantsDisability: parseInt(document.getElementById('ascendants-disability').value) || 0,
            disability: document.getElementById('disability').value
        };

        // Convenio params for comparison
        const convenioParams = getConvenioParams();

        // Validate gross salary
        if (params.grossAnnual <= 0) {
            alert('Por favor, introduce un salario bruto válido');
            return;
        }

        // Perform calculation
        const result = Calculator.calculate(params);

        // Update results display
        displayResults(result, params.numPayments, params.grossAnnual, convenioParams, params.year);

        // Show results section
        resultsSection.classList.remove('hidden');

        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Print button handler
    const printButton = document.getElementById('print-results');
    printButton.addEventListener('click', function() {
        // Set the print date
        const printDateEl = document.querySelector('.print-date');
        const now = new Date();
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        printDateEl.textContent = now.toLocaleDateString(I18n.currentLang || 'es', dateOptions);

        // Trigger print
        window.print();
    });

    /**
     * Display calculation results in the UI
     * @param {Object} result - Calculation results
     * @param {number} numPayments - Number of payments for display
     * @param {number} grossAnnual - User's gross annual salary
     * @param {Object} convenioParams - Convenio selection parameters
     * @param {number} year - Selected year
     */
    function displayResults(result, numPayments, grossAnnual, convenioParams, year) {
        const fmt = Calculator.formatCurrency;
        const fmtPct = Calculator.formatPercentage;

        // Convenio comparison
        let convenioSalary = null;
        let categoryCode = '';

        if (convenioParams.type === 'tic') {
            convenioSalary = ConvenioIT.getSalary(
                convenioParams.area,
                convenioParams.group,
                convenioParams.level,
                year
            );
            categoryCode = `A${convenioParams.area}-${convenioParams.group}${convenioParams.level}`;
        } else if (convenioParams.type === 'hosteleria') {
            convenioSalary = ConvenioHosteleria.getSalary(
                convenioParams.establishmentGroup,
                convenioParams.level,
                year
            );
            categoryCode = `G${convenioParams.establishmentGroup}-N${convenioParams.level}`;
        } else if (convenioParams.type === 'seguridad-privada') {
            convenioSalary = ConvenioSeguridadPrivada.getSalary(
                convenioParams.category,
                year
            );
            // Use short category name for display
            const catInfo = ConvenioSeguridadPrivada.categories[convenioParams.category];
            categoryCode = catInfo ? catInfo.name.substring(0, 20) + '...' : convenioParams.category;
        } else if (convenioParams.type === 'contact-center') {
            convenioSalary = ConvenioContactCenter.getSalary(
                convenioParams.level,
                year
            );
            // Use level name for display
            const levelInfo = ConvenioContactCenter.levels[convenioParams.level];
            categoryCode = levelInfo ? `Nivel ${convenioParams.level}` : `N${convenioParams.level}`;
        } else if (convenioParams.type === 'gestorias') {
            convenioSalary = ConvenioGestorias.getSalary(
                convenioParams.category,
                year
            );
            // Use short category name for display
            const catInfo = ConvenioGestorias.categories[convenioParams.category];
            categoryCode = catInfo ? catInfo.name.substring(0, 18) : convenioParams.category;
        }

        if (convenioSalary) {
            const difference = grossAnnual - convenioSalary.total;

            document.getElementById('comparison-your-salary').textContent = fmt(grossAnnual);
            document.getElementById('comparison-category').textContent = categoryCode;
            document.getElementById('comparison-convenio-salary').textContent = fmt(convenioSalary.total);

            const diffElement = document.getElementById('comparison-difference');
            diffElement.textContent = (difference >= 0 ? '+' : '') + fmt(difference);
            diffElement.className = 'comparison-value ' +
                (difference > 0 ? 'positive' : difference < 0 ? 'negative' : 'neutral');
        }

        // Gross salary
        document.getElementById('result-gross-annual').textContent = fmt(result.input.grossAnnual);
        document.getElementById('result-gross-monthly').textContent = fmt(result.input.grossMonthly);

        // Social Security - Worker
        document.getElementById('result-ss-common').textContent =
            fmt(result.ssWorker.commonContingencies) + ' (' + fmtPct(result.ssWorker.commonContingenciesRate) + ')';
        document.getElementById('result-ss-unemployment').textContent =
            fmt(result.ssWorker.unemployment) + ' (' + fmtPct(result.ssWorker.unemploymentRate) + ')';
        document.getElementById('result-ss-training').textContent =
            fmt(result.ssWorker.training) + ' (' + fmtPct(result.ssWorker.trainingRate) + ')';
        document.getElementById('result-ss-worker-total').textContent =
            fmt(result.ssWorker.total) + ' (' + fmtPct(result.ssWorker.totalRate) + ')';

        // IRPF
        document.getElementById('result-irpf-base').textContent = fmt(result.irpf.taxableBase);
        document.getElementById('result-irpf-rate').textContent = fmtPct(result.irpf.withholdingRate);
        document.getElementById('result-irpf-total').textContent = fmt(result.irpf.withholdingAmount);

        // Net salary
        document.getElementById('result-net-annual').textContent = fmt(result.net.annual);
        document.getElementById('result-net-monthly').textContent = fmt(result.net.monthly);
        document.getElementById('result-num-payments').textContent = numPayments;

        // Company costs
        document.getElementById('result-company-ss-common').textContent =
            fmt(result.ssCompany.commonContingencies) + ' (' + fmtPct(result.ssCompany.commonContingenciesRate) + ')';
        document.getElementById('result-company-ss-unemployment').textContent =
            fmt(result.ssCompany.unemployment) + ' (' + fmtPct(result.ssCompany.unemploymentRate) + ')';
        document.getElementById('result-company-fogasa').textContent =
            fmt(result.ssCompany.fogasa) + ' (' + fmtPct(result.ssCompany.fogasaRate) + ')';
        document.getElementById('result-company-training').textContent =
            fmt(result.ssCompany.training) + ' (' + fmtPct(result.ssCompany.trainingRate) + ')';
        document.getElementById('result-company-accidents').textContent =
            fmt(result.ssCompany.accidents) + ' (' + fmtPct(result.ssCompany.accidentsRate) + ')';
        document.getElementById('result-company-total').textContent = fmt(result.company.total);

        // In Simpler Terms card
        document.getElementById('result-simple-company-annual').textContent = fmt(result.company.total);
        document.getElementById('result-simple-employee-annual').textContent = fmt(result.net.annual);
        document.getElementById('result-simple-company-monthly').textContent = fmt(result.company.total / 12);
        document.getElementById('result-simple-employee-monthly').textContent = fmt(result.net.monthly);
        // Employee taxes: SS worker contributions + IRPF
        const employeeTaxes = result.ssWorker.total + result.irpf.withholdingAmount;
        document.getElementById('result-simple-employee-taxes').textContent = fmt(employeeTaxes);
        // Company taxes: SS company contributions
        document.getElementById('result-simple-company-taxes').textContent = fmt(result.ssCompany.total);
    }
});
