// ===== PROMISE DATA (From React TypeScript version) =====

const statesAndDistricts = {
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bharatpur", "Sikar", "Pali"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj", "Meerut", "Noida", "Ghaziabad"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],
    "Karnataka": ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belgaum"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Nellore"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
    "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal"],
    "Delhi": ["New Delhi", "Central Delhi", "South Delhi", "North Delhi", "East Delhi"],
};

const availableYears = [2013, 2018, 2023];

const rajasthanPromises2013 = [
    { id: 1, title: "24x7 Electricity Supply", description: "Uninterrupted power supply to all rural and urban areas of Rajasthan.", status: "Partially Completed", sources: [{ title: "Rajasthan Energy Dept Report", url: "https://energy.rajasthan.gov.in" }, { title: "NDTV News Report", url: "https://ndtv.com" }] },
    { id: 2, title: "Free Laptops for Students", description: "Distribute free laptops to meritorious students in government schools.", status: "Completed", sources: [{ title: "Education Dept Press Release", url: "https://education.rajasthan.gov.in" }, { title: "Times of India Report", url: "https://timesofindia.com" }] },
    { id: 3, title: "New Highway Construction", description: "Build 5000 km of new state highways connecting rural areas.", status: "Partially Completed", sources: [{ title: "PWD Official Report", url: "https://pwd.rajasthan.gov.in" }, { title: "The Hindu Article", url: "https://thehindu.com" }] },
    { id: 4, title: "Women Safety Program", description: "Launch dedicated women safety helpline and patrol units across the state.", status: "Completed", sources: [{ title: "Rajasthan Police Portal", url: "https://police.rajasthan.gov.in" }, { title: "India Today Coverage", url: "https://indiatoday.in" }] },
    { id: 5, title: "Irrigation Canal Project", description: "Complete major irrigation canals to benefit 10 lakh farmers.", status: "Not Completed", sources: [{ title: "Water Resources Report", url: "https://water.rajasthan.gov.in" }, { title: "Down To Earth Article", url: "https://downtoearth.org.in" }] },
    { id: 6, title: "Smart City Jaipur", description: "Transform Jaipur into a smart city with digital infrastructure.", status: "Partially Completed", sources: [{ title: "Smart City Mission", url: "https://smartcities.gov.in" }, { title: "Economic Times", url: "https://economictimes.com" }] },
    { id: 7, title: "Free Medicine Scheme", description: "Provide free generic medicines at all government hospitals.", status: "Completed", sources: [{ title: "Health Dept Rajasthan", url: "https://health.rajasthan.gov.in" }, { title: "Hindustan Times", url: "https://hindustantimes.com" }] },
    { id: 8, title: "Tourism Boost Plan", description: "Invest ₹500 crore in tourism infrastructure development.", status: "Partially Completed", sources: [{ title: "Tourism Dept Report", url: "https://tourism.rajasthan.gov.in" }, { title: "Mint Article", url: "https://livemint.com" }] },
    { id: 9, title: "Industrial Corridor", description: "Develop Delhi-Mumbai Industrial Corridor passing through Rajasthan.", status: "Not Completed", sources: [{ title: "DMIC Official Site", url: "https://dmicdc.com" }, { title: "Business Standard", url: "https://business-standard.com" }] },
    { id: 10, title: "Pension for Elderly", description: "Increase old age pension to ₹1500/month for all eligible citizens.", status: "Completed", sources: [{ title: "Social Justice Dept", url: "https://sje.rajasthan.gov.in" }, { title: "News18 Report", url: "https://news18.com" }] },
];

const rajasthanPromises2018 = [
    { id: 1, title: "Farm Loan Waiver", description: "Waive off farm loans up to ₹2 lakh for small and marginal farmers.", status: "Completed", sources: [{ title: "Agriculture Dept Notification", url: "https://agriculture.rajasthan.gov.in" }, { title: "NDTV Report", url: "https://ndtv.com" }] },
    { id: 2, title: "Indira Rasoi Yojana", description: "Provide meals at ₹8 per plate in urban areas across the state.", status: "Completed", sources: [{ title: "Rajasthan Govt Official", url: "https://rajasthan.gov.in" }, { title: "The Wire Article", url: "https://thewire.in" }] },
    { id: 3, title: "Unemployment Allowance", description: "Provide ₹3500/month to educated unemployed youth.", status: "Partially Completed", sources: [{ title: "Employment Dept", url: "https://employment.rajasthan.gov.in" }, { title: "India Today", url: "https://indiatoday.in" }] },
    { id: 4, title: "Chiranjeevi Health Scheme", description: "Free health insurance up to ₹10 lakh for every family.", status: "Completed", sources: [{ title: "Chiranjeevi Portal", url: "https://chiranjeevi.rajasthan.gov.in" }, { title: "Times of India", url: "https://timesofindia.com" }] },
    { id: 5, title: "English Medium in Govt Schools", description: "Introduce English medium education in all government schools.", status: "Partially Completed", sources: [{ title: "Education Dept Order", url: "https://education.rajasthan.gov.in" }, { title: "The Hindu", url: "https://thehindu.com" }] },
    { id: 6, title: "Free Electricity to Farmers", description: "Provide free electricity for agricultural pump sets.", status: "Not Completed", sources: [{ title: "Energy Dept", url: "https://energy.rajasthan.gov.in" }, { title: "Scroll Article", url: "https://scroll.in" }] },
    { id: 7, title: "Urban Housing Scheme", description: "Build 5 lakh affordable homes for urban poor.", status: "Not Completed", sources: [{ title: "Housing Board Report", url: "https://housing.rajasthan.gov.in" }, { title: "Economic Times", url: "https://economictimes.com" }] },
    { id: 8, title: "Women Empowerment Fund", description: "Create ₹1000 crore women empowerment and self-help group fund.", status: "Partially Completed", sources: [{ title: "WCD Dept Report", url: "https://wcd.rajasthan.gov.in" }, { title: "Hindustan Times", url: "https://hindustantimes.com" }] },
    { id: 9, title: "Metro Rail Extension", description: "Extend Jaipur Metro to cover 40 km network.", status: "Not Completed", sources: [{ title: "Jaipur Metro Official", url: "https://jaipurmetrorail.in" }, { title: "Mint", url: "https://livemint.com" }] },
    { id: 10, title: "Gig Workers Protection", description: "Introduce social security benefits for gig economy workers.", status: "Completed", sources: [{ title: "Labour Dept Gazette", url: "https://labour.rajasthan.gov.in" }, { title: "BBC Hindi", url: "https://bbc.com/hindi" }] },
];

const rajasthanPromises2023 = [
    { id: 1, title: "Rising Rajasthan Initiative", description: "Attract ₹10 lakh crore investment through Rising Rajasthan summit.", status: "Partially Completed", sources: [{ title: "Rising Rajasthan Portal", url: "https://risingrajasthan.rajasthan.gov.in" }, { title: "Business Standard", url: "https://business-standard.com" }] },
    { id: 2, title: "Eastern Rajasthan Canal", description: "Complete ERCP project to solve water crisis in 13 districts.", status: "Not Completed", sources: [{ title: "Water Resources Dept", url: "https://water.rajasthan.gov.in" }, { title: "Down To Earth", url: "https://downtoearth.org.in" }] },
    { id: 3, title: "Digital Rajasthan Mission", description: "Make all government services available online within 1 year.", status: "Partially Completed", sources: [{ title: "IT Dept Report", url: "https://it.rajasthan.gov.in" }, { title: "NDTV Tech", url: "https://ndtv.com" }] },
    { id: 4, title: "Free Scooter for Girls", description: "Provide free scooty to all college-going girls in the state.", status: "Completed", sources: [{ title: "Education Dept Notification", url: "https://education.rajasthan.gov.in" }, { title: "India Today", url: "https://indiatoday.in" }] },
    { id: 5, title: "Solar Energy Parks", description: "Establish 10 GW solar energy capacity in Thar Desert region.", status: "Partially Completed", sources: [{ title: "Renewable Energy Corp", url: "https://rrecl.rajasthan.gov.in" }, { title: "The Hindu", url: "https://thehindu.com" }] },
    { id: 6, title: "New Medical Colleges", description: "Open 10 new government medical colleges in underserved districts.", status: "Not Completed", sources: [{ title: "Medical Education Dept", url: "https://medicaleducation.rajasthan.gov.in" }, { title: "Times of India", url: "https://timesofindia.com" }] },
    { id: 7, title: "Startup Rajasthan 2.0", description: "Launch enhanced startup policy with ₹500 crore fund.", status: "Partially Completed", sources: [{ title: "iStart Portal", url: "https://istart.rajasthan.gov.in" }, { title: "Economic Times", url: "https://economictimes.com" }] },
    { id: 8, title: "Rural Road Connectivity", description: "Connect every village with pucca roads under PMGSY extension.", status: "Not Completed", sources: [{ title: "Rural Development Dept", url: "https://rd.rajasthan.gov.in" }, { title: "Hindustan Times", url: "https://hindustantimes.com" }] },
    { id: 9, title: "Senior Citizen Care Homes", description: "Build 50 modern senior citizen care facilities across the state.", status: "Not Completed", sources: [{ title: "Social Justice Dept", url: "https://sje.rajasthan.gov.in" }, { title: "News18", url: "https://news18.com" }] },
    { id: 10, title: "Organic Farming Push", description: "Convert 1 lakh hectares to certified organic farming zones.", status: "Partially Completed", sources: [{ title: "Agriculture Dept", url: "https://agriculture.rajasthan.gov.in" }, { title: "The Wire", url: "https://thewire.in" }] },
];

// Build manifesto data structure
const manifestoData = {};
const rajasthanDistricts = statesAndDistricts["Rajasthan"];
rajasthanDistricts.forEach((district) => {
    if (!manifestoData["Rajasthan"]) manifestoData["Rajasthan"] = {};
    manifestoData["Rajasthan"][district] = {
        2013: { year: 2013, party: "BJP", leader: "Vasundhara Raje", promises: rajasthanPromises2013 },
        2018: { year: 2018, party: "INC (Congress)", leader: "Ashok Gehlot", promises: rajasthanPromises2018 },
        2023: { year: 2023, party: "BJP", leader: "Bhajan Lal Sharma", promises: rajasthanPromises2023 },
    };
});

// ===== TRACKER PAGE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const stateSelect = document.getElementById('state-select');
    const districtSelect = document.getElementById('district-select');
    const yearSelect = document.getElementById('year-select');
    const searchInput = document.getElementById('search-input');
    const promisesContainer = document.getElementById('promises-container');
    const emptyState = document.getElementById('empty-state');
    const noDataState = document.getElementById('no-data-state');
    const leaderCard = document.getElementById('leader-card');
    const searchWrapper = document.getElementById('search-wrapper');

    let currentYearData = null;
    let allPromises = [];

    // Populate states
    Object.keys(statesAndDistricts).forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

    // State change handler
    stateSelect.addEventListener('change', function() {
        const selectedState = this.value;
        
        // Reset
        districtSelect.innerHTML = '<option value="">Select District</option>';
        districtSelect.disabled = !selectedState;
        yearSelect.innerHTML = '<option value="">Select Year</option>';
        yearSelect.disabled = true;
        
        hideResults();

        if (selectedState && statesAndDistricts[selectedState]) {
            statesAndDistricts[selectedState].forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    });

    // District change handler
    districtSelect.addEventListener('change', function() {
        const selectedDistrict = this.value;
        
        yearSelect.innerHTML = '<option value="">Select Year</option>';
        yearSelect.disabled = !selectedDistrict;
        
        hideResults();

        if (selectedDistrict) {
            availableYears.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            });
        }
    });

    // Year change handler
    yearSelect.addEventListener('change', function() {
        const state = stateSelect.value;
        const district = districtSelect.value;
        const year = parseInt(this.value);

        if (state && district && year) {
            loadPromises(state, district, year);
        } else {
            hideResults();
        }
    });

    // Search handler
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterPromises(this.value);
        });
    }

    function loadPromises(state, district, year) {
        currentYearData = manifestoData[state]?.[district]?.[year];

        if (!currentYearData) {
            showNoData();
            return;
        }

        allPromises = currentYearData.promises;
        displayLeaderInfo(currentYearData);
        displayPromises(allPromises);
        
        emptyState.style.display = 'none';
        noDataState.style.display = 'none';
        leaderCard.style.display = 'block';
        searchWrapper.style.display = 'block';
    }

    function displayLeaderInfo(data) {
        document.getElementById('leader-avatar').textContent = data.leader.charAt(0);
        document.getElementById('leader-name').textContent = data.leader;
        document.getElementById('leader-party').textContent = data.party;
        document.getElementById('leader-year').textContent = data.year;

        const completedCount = data.promises.filter(p => p.status === "Completed").length;
        const partialCount = data.promises.filter(p => p.status === "Partially Completed").length;
        const pendingCount = data.promises.filter(p => p.status === "Not Completed").length;

        document.getElementById('completed-count').textContent = completedCount;
        document.getElementById('partial-count').textContent = partialCount;
        document.getElementById('pending-count').textContent = pendingCount;
    }

    function displayPromises(promises) {
        promisesContainer.innerHTML = '';

        if (promises.length === 0) {
            promisesContainer.innerHTML = '<p class="empty-state">No promises found matching your search.</p>';
            return;
        }

        promises.forEach((promise, index) => {
            const card = createPromiseCard(promise, index);
            promisesContainer.appendChild(card);
        });
    }

    function createPromiseCard(promise, index) {
        const card = document.createElement('div');
        card.className = 'promise-card animate-fade-up';
        card.style.animationDelay = `${index * 60}ms`;

        const statusConfig = getStatusConfig(promise.status);
        
        card.innerHTML = `
            <div class="promise-header">
                <div style="flex: 1; min-width: 0;">
                    <div class="promise-meta">
                        <span class="promise-id">#${promise.id}</span>
                        <span class="status-badge ${statusConfig.className}">
                            ${statusConfig.icon}
                            ${statusConfig.label}
                        </span>
                    </div>
                    <h3 class="promise-title">${promise.title}</h3>
                    <p class="promise-description">${promise.description}</p>
                </div>
            </div>
            <button class="toggle-proof-btn" data-promise-id="${promise.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m6 9 6 6 6-6"/>
                </svg>
                View Proof
            </button>
            <div class="proof-section hidden" id="proof-${promise.id}">
                <p class="proof-label">Sources & Proof</p>
                <div class="proof-links">
                    ${promise.sources.map(source => `
                        <a href="${source.url}" target="_blank" rel="noopener noreferrer" class="proof-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" x2="21" y1="14" y2="3"/>
                            </svg>
                            ${source.title}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;

        // Add toggle functionality
        const toggleBtn = card.querySelector('.toggle-proof-btn');
        const proofSection = card.querySelector('.proof-section');
        const chevronIcon = toggleBtn.querySelector('svg');
        
        toggleBtn.addEventListener('click', function() {
            const isHidden = proofSection.classList.contains('hidden');
            proofSection.classList.toggle('hidden');
            
            if (isHidden) {
                toggleBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m18 15-6-6-6 6"/>
                    </svg>
                    Hide Proof
                `;
            } else {
                toggleBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m6 9 6 6 6-6"/>
                    </svg>
                    View Proof
                `;
            }
        });

        return card;
    }

    function getStatusConfig(status) {
        const configs = {
            "Completed": {
                icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>`,
                className: 'status-completed',
                label: 'Completed'
            },
            "Not Completed": {
                icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m15 9-6 6M9 9l6 6"/>
                </svg>`,
                className: 'status-not-completed',
                label: 'Not Completed'
            },
            "Partially Completed": {
                icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                    <path d="M12 9v4M12 17h.01"/>
                </svg>`,
                className: 'status-partial',
                label: 'Partially Completed'
            }
        };
        return configs[status] || configs["Not Completed"];
    }

    function filterPromises(searchTerm) {
        if (!currentYearData) return;

        const query = searchTerm.toLowerCase().trim();
        
        if (!query) {
            displayPromises(allPromises);
            return;
        }

        const filtered = allPromises.filter(promise => 
            promise.title.toLowerCase().includes(query) || 
            promise.description.toLowerCase().includes(query)
        );

        displayPromises(filtered);
    }

    function hideResults() {
        leaderCard.style.display = 'none';
        searchWrapper.style.display = 'none';
        promisesContainer.innerHTML = '';
        emptyState.style.display = 'block';
        noDataState.style.display = 'none';
        currentYearData = null;
        allPromises = [];
    }

    function showNoData() {
        leaderCard.style.display = 'none';
        searchWrapper.style.display = 'none';
        promisesContainer.innerHTML = '';
        emptyState.style.display = 'none';
        noDataState.style.display = 'block';
    }
});
