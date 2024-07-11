
const categories = {
    "Graphics & Design": [
        { name: "Logo Design", icon: "fa-solid fa-paint-brush" },
        { name: "Brand Style Guides", icon: "fa-solid fa-book" },
        { name: "Business Cards & Stationery", icon: "fa-solid fa-id-card" },
        { name: "Game Art", icon: "fa-solid fa-gamepad" },
        { name: "Graphics for Streamers", icon: "fa-solid fa-tv" },
        { name: "Art & Illustration", icon: "fa-solid fa-palette" },
        { name: "Visual Design", icon: "fa-solid fa-image" },
        { name: "Packaging & Covers", icon: "fa-solid fa-box" },
        { name: "Web & App Design", icon: "fa-solid fa-mobile-alt" },
        { name: "Social Media Design", icon: "fa-solid fa-share-alt" },
        { name: "Fashion & Jewelry", icon: "fa-solid fa-tshirt" },
        { name: "Print Design", icon: "fa-solid fa-print" },
        { name: "Product & Characters Design", icon: "fa-solid fa-cube" },
        { name: "Presentation Design", icon: "fa-solid fa-file-powerpoint" },
        { name: "Infographic Design", icon: "fa-solid fa-chart-pie" },
        { name: "Pattern Design", icon: "fa-solid fa-th" },
        { name: "Car Wraps", icon: "fa-solid fa-car" },
        { name: "Storyboards", icon: "fa-solid fa-film" },
        { name: "Tattoo Design", icon: "fa-solid fa-anchor" },
        { name: "Banner Ads", icon: "fa-solid fa-ad" },
        { name: "Icon Design", icon: "fa-solid fa-icons" },
        { name: "Catalog Design", icon: "fa-solid fa-book-open" }
    ],
    "Digital Marketing": [
        { name: "Social Media Marketing", icon: "fa-solid fa-share-square" },
        { name: "SEO", icon: "fa-solid fa-search" },
        { name: "Content Marketing", icon: "fa-solid fa-file-alt" },
        { name: "Video Marketing", icon: "fa-solid fa-video" },
        { name: "Email Marketing", icon: "fa-solid fa-envelope" },
        { name: "Influencer Marketing", icon: "fa-solid fa-user-friends" },
        { name: "Community Management", icon: "fa-solid fa-users" },
        { name: "Local SEO", icon: "fa-solid fa-map-marker-alt" },
        { name: "Search & Display Marketing", icon: "fa-solid fa-search-dollar" },
        { name: "Marketing Strategy", icon: "fa-solid fa-lightbulb" },
        { name: "Web Traffic", icon: "fa-solid fa-chart-line" },
        { name: "Marketing Advice", icon: "fa-solid fa-comments" },
        { name: "Public Relations", icon: "fa-solid fa-bullhorn" }
    ],
    "Writing & Translation": [
        { name: "Articles & Blog Posts", icon: "fa-solid fa-newspaper" },
        { name: "Translation", icon: "fa-solid fa-language" },
        { name: "Proofreading & Editing", icon: "fa-solid fa-edit" },
        { name: "Resume Writing", icon: "fa-solid fa-file-word" },
        { name: "Cover Letters", icon: "fa-solid fa-file-alt" },
        { name: "LinkedIn Profiles", icon: "fa-solid fa-linkedin" },
        { name: "Technical Writing", icon: "fa-solid fa-cogs" },
        { name: "Business Names & Slogans", icon: "fa-solid fa-lightbulb" },
        { name: "Case Studies", icon: "fa-solid fa-file" },
        { name: "White Papers", icon: "fa-solid fa-file-alt" },
        { name: "Grant Writing", icon: "fa-solid fa-hand-holding-usd" },
        { name: "Research & Summaries", icon: "fa-solid fa-book" },
        { name: "Creative Writing", icon: "fa-solid fa-pen-fancy" },
        { name: "Scriptwriting", icon: "fa-solid fa-file-alt" },
        { name: "Book & eBook Writing", icon: "fa-solid fa-book" },
        { name: "Speechwriting", icon: "fa-solid fa-microphone-alt" },
        { name: "Ad Copy", icon: "fa-solid fa-bullhorn" },
        { name: "Sales Copy", icon: "fa-solid fa-dollar-sign" },
        { name: "Social Media Copy", icon: "fa-solid fa-share-alt" },
        { name: "Press Releases", icon: "fa-solid fa-newspaper" },
        { name: "Podcast Writing", icon: "fa-solid fa-podcast" },
        { name: "Website Content", icon: "fa-solid fa-globe" },
        { name: "Technical Manuals", icon: "fa-solid fa-tools" },
        { name: "UX Writing", icon: "fa-solid fa-user-circle" }
    ],
    "Video & Animation": [
        { name: "Whiteboard & Animated Explainers", icon: "fa-solid fa-chalkboard-teacher" },
        { name: "Video Editing", icon: "fa-solid fa-video" },
        { name: "Short Video Ads", icon: "fa-solid fa-ad" },
        { name: "Animated GIFs", icon: "fa-solid fa-gift" },
        { name: "Logo Animation", icon: "fa-solid fa-play-circle" },
        { name: "Intros & Outros", icon: "fa-solid fa-film" },
        { name: "App & Website Previews", icon: "fa-solid fa-mobile-alt" },
        { name: "Character Animation", icon: "fa-solid fa-user" },
        { name: "3D Product Animation", icon: "fa-solid fa-cube" },
        { name: "Subtitles & Captions", icon: "fa-solid fa-closed-captioning" },
        { name: "Spokesperson Videos", icon: "fa-solid fa-user-tie" },
        { name: "Live Action Explainers", icon: "fa-solid fa-video" },
        { name: "Visual Effects", icon: "fa-solid fa-magic" }
    ],
    "Music & Audio": [
        { name: "Voice Over", icon: "fa-solid fa-microphone" },
        { name: "Mixing & Mastering", icon: "fa-solid fa-sliders-h" },
        { name: "Producers & Composers", icon: "fa-solid fa-music" },
        { name: "Singers & Vocalists", icon: "fa-solid fa-microphone-alt" },
        { name: "Songwriters", icon: "fa-solid fa-pencil-alt" },
        { name: "Session Musicians", icon: "fa-solid fa-guitar" },
        { name: "Audiobook Production", icon: "fa-solid fa-book" },
        { name: "Sound Effects", icon: "fa-solid fa-volume-up" },
        { name: "Jingles & Intros", icon: "fa-solid fa-bullhorn" },
        { name: "Podcast Editing", icon: "fa-solid fa-podcast" },
        { name: "Music Transcription", icon: "fa-solid fa-file-alt" },
        { name: "Vocal Tuning", icon: "fa-solid fa-sliders-h" },
        { name: "Online Music Lessons", icon: "fa-solid fa-chalkboard-teacher" }
    ],
    "Programming & Tech": [
        { name: "WordPress", icon: "fa-brands fa-wordpress" },
        { name: "Website Builders & CMS", icon: "fa-solid fa-globe" },
        { name: "Game Development", icon: "fa-solid fa-gamepad" },
        { name: "Web Programming", icon: "fa-solid fa-code" },
        { name: "E-Commerce Development", icon: "fa-solid fa-shopping-cart" },
        { name: "Mobile Apps", icon: "fa-solid fa-mobile-alt" },
        { name: "Desktop Applications", icon: "fa-solid fa-desktop" },
        { name: "Support & IT", icon: "fa-solid fa-headset" },
        { name: "Chatbots", icon: "fa-solid fa-comments" },
        { name: "Data Analysis", icon: "fa-solid fa-chart-bar" },
        { name: "Convert Files", icon: "fa-solid fa-file-alt" },
        { name: "User Testing", icon: "fa-solid fa-vial" },
        { name: "QA & Review", icon: "fa-solid fa-check-circle" },
        { name: "Cybersecurity", icon: "fa-solid fa-shield-alt" },
        { name: "Database Design & Administration", icon: "fa-solid fa-database" },
        { name: "DevOps & Cloud", icon: "fa-solid fa-cloud" },
        { name: "Blockchain & Cryptocurrency", icon: "fa-solid fa-coins" },
        { name: "AR/VR Development", icon: "fa-solid fa-vr-cardboard" },
        { name: "Hardware & Networking", icon: "fa-solid fa-network-wired" },
        { name: "IoT (Internet of Things)", icon: "fa-solid fa-cogs" },
        { name: "SAP", icon: "fa-solid fa-briefcase" },
        { name: "Software Testing", icon: "fa-solid fa-vial" }
    ],
    "Business": [
        { name: "Virtual Assistant", icon: "fa-solid fa-user-secret" },
        { name: "Data Entry", icon: "fa-solid fa-keyboard" },
        { name: "Market Research", icon: "fa-solid fa-chart-line" },
        { name: "Project Management", icon: "fa-solid fa-tasks" },
        { name: "Business Plans", icon: "fa-solid fa-file-alt" },
        { name: "Legal Consulting", icon: "fa-solid fa-gavel" },
        { name: "Financial Consulting", icon: "fa-solid fa-dollar-sign" },
        { name: "Presentations", icon: "fa-solid fa-file-powerpoint" },
        { name: "Business Consulting", icon: "fa-solid fa-briefcase" },
        { name: "Flyer Distribution", icon: "fa-solid fa-fly" },
        { name: "Lead Generation", icon: "fa-solid fa-user-plus" },
        { name: "Online Tutoring", icon: "fa-solid fa-chalkboard-teacher" },
        { name: "Career Counseling", icon: "fa-solid fa-user-tie" },
        { name: "E-Commerce Management", icon: "fa-solid fa-shopping-cart" },
        { name: "Supply Chain Management", icon: "fa-solid fa-shipping-fast" },
        { name: "Human Resources Consulting", icon: "fa-solid fa-users" },
        { name: "Business Tips", icon: "fa-solid fa-lightbulb" },
        { name: "Presentations Design", icon: "fa-solid fa-file-powerpoint" },
        { name: "Market Research Reports", icon: "fa-solid fa-chart-line" },
        { name: "SWOT Analysis", icon: "fa-solid fa-chart-pie" },
        { name: "Business Coaching", icon: "fa-solid fa-comments" }
    ],
    "Lifestyle": [
        { name: "Gaming", icon: "fa-solid fa-gamepad" },
        { name: "Online Lessons", icon: "fa-solid fa-chalkboard-teacher" },
        { name: "Astrology & Psychics", icon: "fa-solid fa-star" },
        { name: "Dance Lessons", icon: "fa-solid fa-music" },
        { name: "Life Coaching", icon: "fa-solid fa-user-tie" },
        { name: "Wellness", icon: "fa-solid fa-heartbeat" },
        { name: "Traveling", icon: "fa-solid fa-plane" },
        { name: "Fitness Lessons", icon: "fa-solid fa-dumbbell" },
        { name: "Cooking Lessons", icon: "fa-solid fa-utensils" },
        { name: "Craft Lessons", icon: "fa-solid fa-paint-brush" },
        { name: "Art Lessons", icon: "fa-solid fa-palette" },
        { name: "Relationship Coaching", icon: "fa-solid fa-heart" },
        { name: "Personal Stylists", icon: "fa-solid fa-user-tie" },
        { name: "Family & Genealogy", icon: "fa-solid fa-users" },
        { name: "Greeting Cards & Videos", icon: "fa-solid fa-envelope" },
        { name: "Viral Videos", icon: "fa-solid fa-video" },
        { name: "Your Message On...", icon: "fa-solid fa-envelope" },
        { name: "Celebrity Impersonators", icon: "fa-solid fa-user" },
        { name: "Gaming Coaching", icon: "fa-solid fa-gamepad" },
        { name: "Outdoor Adventures", icon: "fa-solid fa-tree" },
        { name: "Personal Development", icon: "fa-solid fa-user-graduate" },
        { name: "Model & Acting Auditions", icon: "fa-solid fa-film" }
    ],
    "Industry Specific": [
        { name: "Real Estate Services", icon: "fa-solid fa-home" },
        { name: "Legal Services", icon: "fa-solid fa-gavel" },
        { name: "Financial Services", icon: "fa-solid fa-dollar-sign" },
        { name: "Medical Services", icon: "fa-solid fa-stethoscope" },
        { name: "Educational Services", icon: "fa-solid fa-graduation-cap" },
        { name: "Restaurant & Food Services", icon: "fa-solid fa-utensils" },
        { name: "Hospitality & Travel Services", icon: "fa-solid fa-plane" },
        { name: "Retail Services", icon: "fa-solid fa-store" },
        { name: "Manufacturing & Engineering Services", icon: "fa-solid fa-industry" }
    ],
    "Data": [
        { name: "Data Entry", icon: "fa-solid fa-keyboard" },
        { name: "Data Processing", icon: "fa-solid fa-database" },
        { name: "Data Analytics", icon: "fa-solid fa-chart-bar" },
        { name: "Data Visualization", icon: "fa-solid fa-chart-pie" },
        { name: "Data Science", icon: "fa-solid fa-flask" },
        { name: "Databases", icon: "fa-solid fa-database" },
        { name: "Data Engineering", icon: "fa-solid fa-cogs" },
        { name: "Data Mining", icon: "fa-solid fa-search" },
        { name: "Data Extraction", icon: "fa-solid fa-code" },
        { name: "Data Warehousing", icon: "fa-solid fa-warehouse" }
    ],
    "Photography": [
        { name: "Product Photography", icon: "fa-solid fa-camera" },
        { name: "Real Estate Photography", icon: "fa-solid fa-home" },
        { name: "Event Photography", icon: "fa-solid fa-calendar" },
        { name: "Portrait Photography", icon: "fa-solid fa-user" },
        { name: "Lifestyle Photography", icon: "fa-solid fa-camera-retro" },
        { name: "Fashion Photography", icon: "fa-solid fa-tshirt" },
        { name: "Drone Photography", icon: "fa-solid fa-drone" },
        { name: "Sports Photography", icon: "fa-solid fa-football-ball" },
        { name: "Pet Photography", icon: "fa-solid fa-paw" },
        { name: "Photography Editing", icon: "fa-solid fa-edit" }
    ]
};

function toggleMenu() {
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    if (navLeft.style.display === "none" && navRight.style.display === "none") {
        navLeft.style.display = "flex";
        navRight.style.display = "flex";
    } else {
        navLeft.style.display = "none";
        navRight.style.display = "none";
    }
}

function showSubcategories(category) {
    const subcategoryList = document.getElementById('subcategory-list');
    subcategoryList.innerHTML = ''; // Clear previous subcategories

    categories[category].forEach(subcategory => {
        const subcategoryItem = document.createElement('div');
        subcategoryItem.className = 'subcategory-item';
        subcategoryItem.innerHTML = `
            <div class="icon"><i class="${subcategory.icon}"></i></div>
            <div>${subcategory.name}</div>
            <div class="redirect-icon">➔</div>
        `;
        subcategoryList.appendChild(subcategoryItem);
    });




    if (window.innerWidth <= 768) {
        document.getElementById('breadcrumb').style.display = 'flex';
    }

    // Highlight the selected category
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`.category-item[data-category="${category}"]`).classList.add('active');
}

function goBackToCategories() {
    document.getElementById('breadcrumb').style.display = 'none';
    document.getElementById('subcategory-list').innerHTML = '';
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => item.classList.remove('active'));
}

function loadCategories() {
    const categoryList = document.getElementById('category-list');
    Object.keys(categories).forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        categoryItem.innerText = category;
        categoryItem.setAttribute('data-category', category);
        categoryItem.onclick = () => showSubcategories(category);
        categoryList.appendChild(categoryItem);
    });
    
    // Show subcategories for the first category by default
    const firstCategory = Object.keys(categories)[0];
    if (firstCategory) {
        showSubcategories(firstCategory);
    }
}


    var subcategory = document.getElementById("subcategory-list")
    subcategory.addEventListener("click", add)

var now = `
<div class="container">
        <div class="job-list">
            <div class="job-item" onclick="showJobDetails('Email Marketing Specialist', 'Your Company Name', 'City, State (Remote)', jobDescription1);">
                <div class="job-title">Email Marketing Specialist</div>
                <div class="job-company-location">Your Company Name - City, State (Remote)</div>
            </div>
            <div class="job-item" onclick="showJobDetails('Software Engineer', 'Tech Innovations', 'San Francisco, CA', jobDescription2);">
                <div class="job-title">Software Engineer</div>
                <div class="job-company-location">Tech Innovations - San Francisco, CA</div>
            </div>
            <div class="job-item" onclick="showJobDetails('Product Manager', 'Creative Solutions', 'New York, NY', jobDescription3);">
                <div class="job-title">Product Manager</div>
                <div class="job-company-location">Creative Solutions - New York, NY</div>
            </div>
            <div class="job-item" onclick="showJobDetails('Graphic Designer', 'DesignPro', 'Remote', jobDescription4);">
                <div class="job-title">Graphic Designer</div>
                <div class="job-company-location">DesignPro - Remote</div>
            </div>
            <div class="job-item" onclick="showJobDetails('Data Analyst', 'DataCorp', 'Chicago, IL', jobDescription5);">
                <div class="job-title">Data Analyst</div>
                <div class="job-company-location">DataCorp - Chicago, IL</div>
            </div>
        </div>
        <div class="job-details">
            <div class="detail-header">
                <div>
                    <h2 id="job-title">Select a job to view details</h2>
                    <div id="job-company"></div>
                    <div id="job-location"></div>
                </div>
                <div class="action-buttons">
                    <button class="bookmark-button">Bookmark</button>
                    <button class="report-button">Report</button>
                </div>
            </div>
            <div id="job-description">
                <p>Job details will be displayed here.</p>
            </div>
        </div>
    </div>`



    function add(){
        subcategory.innerHTML = now
    }



window.onload = loadCategories;
