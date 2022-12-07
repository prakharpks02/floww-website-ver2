const PageDict = {
    'company':{
        'facebook':'https://facebook.com/floww.deliveryAPIs/',
        'instagram':'https://instagram.com/floww.delivery_api/',
        'twitter':'N/A',
        'logo':'img/logo/logo.png',
        'favicon':'img/logo/favicon.png',
        'contactNo':'9910530300',
        'email':'prakhar@gmail.com',
        'address':'C-903, Signature Park, Wakad, Pune - 411033',
        'alternateNo':'9910530300',
        'companyName':'Blaze Logistics',
        'policy':'N/A'
    },
    'hero': {
        'tagline':'Your Delivery Partner',
        'heading':'Your Customers deserve the new age delivery',
        'subheading':'The delivery can not be something you can not overlook',
        'image':'../img/storefront/banner-bg-1.jpg'
    },
    'special': {
        'heading':'Our Transportation is unparelled',
        'subheading':'Blaze Logistics is a leading provider of specialized service in integrated multi-mode solutions for the transportations of bulk of container cargo. Blaze Logistics provides a single window for businesses that seek seamless transportation, warehousing, supply chain management and trucking.',
        'image':'img/storefront/about-year.png',
        'imageText':'Year’s of experience in transport and logistics services'
    },
    'about': {
        'heading':'Why Choose Us',
        'image':'img/storefront/choose-us-img.png',
        'list': [
            {
                'label':'Our History', 'heading':'Strong Customer Focus', 'subheading':'Our focus is very strong on great customer service and after sales service'
            },
            {
                'label':'Our History', 'heading':'Strong Customer Focus', 'subheading':'Our focus is very strong on great customer service and after sales service'
            },
            {
                'label':'Our History', 'heading':'Strong Customer Focus', 'subheading':'Our focus is very strong on great customer service and after sales service'
            }
        ]
    },
    'services': {
        'smallHeading':'Road and Air Transports',
        'heading':'What can we do for you',
        'list' : [
            {
                'heading':'Road Freight Services', 'subheading':'Transport across 2000+ pincodes in 12 states of India', 'image':'img/storefront/services-1.jpg','link':'N/A'
            },
            {
                'heading':'Road Freight Services', 'subheading':'Transport across 2000+ pincodes in 12 states of India', 'image':'img/storefront/services-1.jpg','link':'N/A'
            },
            {
                'heading':'Road Freight Services', 'subheading':'Transport across 2000+ pincodes in 12 states of India', 'image':'img/storefront/services-1.jpg','link':'N/A'
            },
            {
                'heading':'Road Freight Services', 'subheading':'Transport across 2000+ pincodes in 12 states of India', 'image':'img/storefront/services-1.jpg','link':'N/A'
            },
            {
                'heading':'Road Freight Services', 'subheading':'Transport across 2000+ pincodes in 12 states of India', 'image':'img/storefront/services-1.jpg','link':'N/A'
            }
        ]
    },
    'solutions': {
        'smallHeading':'Range of Solutions',
        'heading':'We provide the best solutions for you',
        'list': [
            {
                'heading':'Warehouse Solutions', 'subheading':'Get cheapest and most reliable warehouse near busy routes of metro cities'
            },
            {
                'heading':'Warehouse Solutions', 'subheading':'Get cheapest and most reliable warehouse near busy routes of metro cities'
            },
            {
                'heading':'Warehouse Solutions', 'subheading':'Get cheapest and most reliable warehouse near busy routes of metro cities'
            }
        ]
    },
    'numbers': {
        'years':'10', 'vehicles':'20', 'deliveries':'45000', 'clients':'60'
    },
    'fleet': {
        'smallHeading':'Our Fleet',
        'heading':'Choose from a wide range of vehicles',
        'list': [
            {
                'name': 'Tata Ace 400', 'description':'4 Tonne | 45x20x25 ft', 'image': 'img/storefront/team-img-1.jpg'
            },
            {
                'name': 'Tata Ace 400', 'description':'4 Tonne | 45x20x25 ft', 'image': 'img/storefront/team-img-1.jpg'
            },
            {
                'name': 'Tata Ace 400', 'description':'4 Tonne | 45x20x25 ft', 'image': 'img/storefront/team-img-1.jpg'
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
    // let facebookElements = document.getElementsByClassName('value-facebook');
    // let facebookElements = document.getElementsByClassName('value-facebook');
    // let facebookElements = document.getElementsByClassName('value-facebook');
    // let facebookElements = document.getElementsByClassName('value-facebook');

    if(dictValue.company.facebook=='N/A') {
        
    }
}