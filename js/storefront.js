const PageDict = {
    'company': {
        'facebook': 'https://facebook.com/floww.deliveryAPIs/',
        'instagram': 'https://instagram.com/floww.delivery_api/',
        'twitter': 'N/A',
        'logo': 'img/logo/tmos.png',
        'favicon': 'img/logo/favicon.ico',
        'contactNo': '9910530300',
        'email': 'prakhar@gmail.com',
        'address': 'C-903, Signature Park, Wakad, Pune - 411033',
        'alternateNo': '9910530300',
        'companyName': 'Blaze Logistics',
        'policy': 'N/A'
    },
    'hero': {
        'tagline': 'Your Delivery Partner',
        'heading': 'India\'s Biggest Delivery Partner',
        'subheading': 'Expand Your Base Of Happy Customers With Our Reliable, Convenient And Cost-Effective Hyperlocal Delivery Platform. We are hyperlocal delivery company that offers an array of delivery services for all your business needs.',
        'image': 'img/storefront/banner-bg-1.jpg'
    },
    'special': {
        'heading': 'Our Transportation is unparelled',
        'subheading': 'Blaze Logistics is a leading provider of specialized service in integrated multi-mode solutions for the transportations of bulk of container cargo. Blaze Logistics provides a single window for businesses that seek seamless transportation, warehousing, supply chain management and trucking.',
        'image': 'img/storefront/about-year.png',
        'imageText': 'Year’s of experience in transport and logistics services'
    },
    'about': {
        'heading': 'Why Choose Us',
        'image': 'img/storefront/choose-us-img.png',
        'list': [{
                'label': 'Our History',
                'heading': 'Strong Customer Focus',
                'subheading': 'Our focus is very strong on great customer service and after sales service'
            },
            {
                'label': 'Our History',
                'heading': 'Strong Customer Focus',
                'subheading': 'Our focus is very strong on great customer service and after sales service'
            },
            {
                'label': 'Our History',
                'heading': 'Strong Customer Focus',
                'subheading': 'Our focus is very strong on great customer service and after sales service'
            }
        ]
    },
    'services': {
        'smallHeading': 'Road and Air Transports',
        'heading': 'What can we do for you',
        'list': [{
                'heading': 'Road Freight Services',
                'subheading': 'Transport across 2000+ pincodes in 12 states of India',
                'image': 'img/storefront/services-1.jpg',
                'link': 'N/A'
            },
            {
                'heading': 'Road Freight Services',
                'subheading': 'Transport across 2000+ pincodes in 12 states of India',
                'image': 'img/storefront/services-1.jpg',
                'link': 'N/A'
            },
            {
                'heading': 'Road Freight Services',
                'subheading': 'Transport across 2000+ pincodes in 12 states of India',
                'image': 'img/storefront/services-1.jpg',
                'link': 'N/A'
            },
            {
                'heading': 'Road Freight Services',
                'subheading': 'Transport across 2000+ pincodes in 12 states of India',
                'image': 'img/storefront/services-1.jpg',
                'link': 'N/A'
            },
            {
                'heading': 'Road Freight Services',
                'subheading': 'Transport across 2000+ pincodes in 12 states of India',
                'image': 'img/storefront/services-1.jpg',
                'link': 'N/A'
            }
        ]
    },
    'solutions': {
        'smallHeading': 'Range of Solutions',
        'heading': 'We provide the best solutions for you',
        'list': [{
                'heading': 'Warehouse Solutions',
                'subheading': 'Get cheapest and most reliable warehouse near busy routes of metro cities'
            },
            {
                'heading': 'Warehouse Solutions',
                'subheading': 'Get cheapest and most reliable warehouse near busy routes of metro cities'
            },
            {
                'heading': 'Warehouse Solutions',
                'subheading': 'Get cheapest and most reliable warehouse near busy routes of metro cities'
            }
        ]
    },
    'numbers': {
        'years': '12',
        'vehicles': '120',
        'deliveries': '4.5 lacs',
        'clients': '120'
    },
    'fleet': {
        'smallHeading': 'Our Fleet',
        'heading': 'Choose from a wide range of vehicles',
        'list': [{
                'name': 'Tata Ace 400',
                'description': '4 Tonne | 45x20x25 ft',
                'image': 'img/storefront/tata-ace.jpg'
            },
            {
                'name': 'Mahindra Blazo 37',
                'description': '10 Tonne | 75x30x25 ft',
                'image': 'img/storefront/mahindra-blazo.jpg'
            },
            {
                'name': 'Force Shaktiman 200',
                'description': '5 Tonne | 45x20x25 ft',
                'image': 'img/storefront/force-shaktiman.png'
            }
        ]
    }
}




function FillPage(dictValue) {
    let facebook = document.getElementsByClassName('value-facebook');
    let instagram = document.getElementsByClassName('value-instagram');
    let twitter = document.getElementsByClassName('value-twitter');
    let logo = document.getElementsByClassName('value-img-logo');
    let favicon = document.getElementsByClassName('value-img-favicon');
    let contactNo = document.getElementsByClassName('value-contact-no');
    let email = document.getElementsByClassName('value-email');
    let address = document.getElementsByClassName('value-address');
    let alternateNo = document.getElementsByClassName('value-alternate-no');
    let companyName = document.getElementsByClassName('value-company-name');
    let policy = document.getElementsByClassName('value-policy');
    let heroTagline = document.getElementsByClassName('value-hero-tagline');
    let heroHeading = document.getElementsByClassName('value-hero-heading');
    let heroSubheading = document.getElementsByClassName('value-hero-subheading');
    let heroImage = document.getElementsByClassName('value-hero-image');
    let specialHeading = document.getElementsByClassName('value-special-heading');
    let specialSubheading = document.getElementsByClassName('value-special-subheading');
    let specialImage = document.getElementsByClassName('value-special-image');
    let specialImageText = document.getElementsByClassName('value-special-image-text');
    let aboutTitle = document.getElementsByClassName('value-about-title');
    let aboutImage = document.getElementsByClassName('value-about-image');
    let aboutLabel = document.getElementsByClassName('value-about-label');
    let aboutHeading = document.getElementsByClassName('value-about-heading');
    let aboutSubheading = document.getElementsByClassName('value-about-subheading');
    let servicesSmallHeading = document.getElementsByClassName('value-services-small-heading');
    let servicesHeading = document.getElementsByClassName('value-services-heading');
    let servicesList = document.getElementsByClassName('value-services-list');
    let solutionsSmallHeading = document.getElementsByClassName('value-solutions-small-heading');
    let solutionsHeading = document.getElementsByClassName('value-solutions-heading');
    let solutionsList = document.getElementsByClassName('value-solutions-list');
    let numbersYears = document.getElementsByClassName('value-numbers-years');
    let numbersVehicles = document.getElementsByClassName('value-numbers-vehicles');
    let numbersDeliveries = document.getElementsByClassName('value-numbers-deliveries');
    let numbersClients = document.getElementsByClassName('value-numbers-clients');
    let fleetSmallHeading = document.getElementsByClassName('value-fleet-small-heading');
    let fleetHeading = document.getElementsByClassName('value-fleet-heading');
    let fleetList = document.getElementsByClassName('value-fleet-list');

    // Facebook
    if (dictValue.company.facebook == 'N/A') {
        for (i = 0; i < facebook.length; i++) {
            facebook[i].classList.add('hide');
        }
    } else {
        for (i = 0; i < facebook.length; i++) {
            facebook[i].href = dictValue.company.facebook;
        }
    }

    // Instagram
    if (dictValue.company.instagram == 'N/A') {
        for (i = 0; i < instagram.length; i++) {
            instagram[i].classList.add('hide');
        }
    } else {
        for (i = 0; i < instagram.length; i++) {
            instagram[i].href = dictValue.company.instagram;
        }
    }

    // Twitter
    if (dictValue.company.twitter == 'N/A') {
        for (i = 0; i < twitter.length; i++) {
            twitter[i].classList.add('hide');
        }
    } else {
        for (i = 0; i < twitter.length; i++) {
            twitter[i].href = dictValue.company.twitter;
        }
    }

    // Logo
    for (i = 0; i < logo.length; i++) {
        logo[i].src = dictValue.company.logo;
    }

    // Favicon
    favicon[0].href = dictValue.company.favicon;

    // Contact Number
    contactNo[0].href = 'tel:+91' + dictValue.company.contactNo;
    contactNo[0].getElementsByTagName('span')[0].innerHTML = '+91 ' + dictValue.company.contactNo + ' <i class="ri-phone-fill"></i>';
    contactNo[1].href = 'tel:+91' + dictValue.company.contactNo;
    contactNo[1].getElementsByTagName('span')[0].innerHTML = '+91 ' + dictValue.company.contactNo + ' <i class="ri-phone-fill"></i>';
    contactNo[2].href = 'tel:+91' + dictValue.company.contactNo;
    contactNo[2].innerHTML = '+91 ' + dictValue.company.contactNo;

    // Email
    email[0].href = 'mailto:' + dictValue.company.email;
    email[0].innerHTML = dictValue.company.email;

    // Address
    address[0].innerHTML = dictValue.company.address;

    // Policy
    if (dictValue.company.policy == 'N/A') {
        policy[0].classList.add('hide');
    } else {
        policy[0].href = dictValue.company.policy;
    }

    // Hero Banner
    heroTagline[0].innerHTML = dictValue.hero.tagline;
    heroHeading[0].innerHTML = dictValue.hero.heading;
    heroSubheading[0].innerHTML = dictValue.hero.subheading;
    heroImage[0].style.backgroundImage = "url(" + dictValue.hero.image + ")";
    heroSubheading[1].innerHTML = dictValue.hero.subheading;

    // Special Banner
    specialHeading[0].innerHTML = dictValue.special.heading;
    specialSubheading[0].innerHTML = dictValue.special.subheading;
    specialImage[0].src = dictValue.special.image;
    specialImageText[0].innerHTML = dictValue.special.imageText;

    // About Banner
    aboutTitle[0].innerHTML = dictValue.about.heading;
    aboutImage[0].src = dictValue.about.image;
    for (i = 0; i < dictValue.about.list.length; i++) {
        aboutLabel[i].innerHTML = dictValue.about.list[i].label;
        aboutHeading[i].innerHTML = dictValue.about.list[i].heading;
        aboutSubheading[i].innerHTML = dictValue.about.list[i].subheading;
    }

    // Services Banner
    servicesSmallHeading[0].innerHTML = dictValue.services.smallHeading;
    servicesHeading[0].innerHTML = dictValue.services.heading;
    let tempServiceList = '';
    for (i = 0; i < dictValue.services.list.length; i++) {
        tempServiceList = tempServiceList + `
        <div class="col-lg-3 col-sm-6">
            <div class="single-services-box">
                <a>
                    <img src="${dictValue.services.list[i].image}" alt="floww Service Images">
                    <h3>
                        ${dictValue.services.list[i].heading}
                    </h3>
                    <p>${dictValue.services.list[i].subheading}</p>
                    <span class="read-more">Read more<i class="ri-add-circle-fill"></i></span>
                </a>
            </div>
        </div>`
    }
    servicesList[0].innerHTML = tempServiceList;

    // Solutions Banner
    solutionsSmallHeading[0].innerHTML = dictValue.solutions.smallHeading;
    solutionsHeading[0].innerHTML = dictValue.solutions.heading;
    let tempSolutionsList = '';
    for (i = 0; i < dictValue.solutions.list.length; i++) {
        tempSolutionsList = tempSolutionsList + `
        <li>
            <i class="flaticon-warehouse-1"></i>
            <h3>${dictValue.solutions.list[i].heading}</h3>
            <p>${dictValue.solutions.list[i].subheading}</p>
        </li>`
    }
    solutionsList[0].innerHTML = tempSolutionsList;

    // Numbers Banner
    numbersYears[0].innerHTML = dictValue.numbers.years;
    numbersVehicles[0].innerHTML = dictValue.numbers.vehicles;
    numbersDeliveries[0].innerHTML = dictValue.numbers.deliveries;
    numbersClients[0].innerHTML = dictValue.numbers.clients;

    // Fleet Banner
    fleetSmallHeading[0].innerHTML = dictValue.fleet.smallHeading;
    fleetHeading[0].innerHTML = dictValue.fleet.heading;
    let tempFleetList = '';
    for (i = 0; i < dictValue.fleet.list.length; i++) {
        tempFleetList = tempFleetList + `
        <div class="single-team-member">
            <img src="${dictValue.fleet.list[i].image}" alt="Image" style="height:180px !important;">

            <div class="team-content">
                <h3>${dictValue.fleet.list[i].name}</h3>
                <span>${dictValue.fleet.list[i].description}</span>
            </div>
        </div>`
    }
    fleetList[0].innerHTML = tempFleetList;

}

window.onload = FillPage(PageDict);