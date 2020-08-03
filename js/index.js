const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
}


/////LOGO Example: Update the img src for the logo
let logo = document.getElementById('logo-img')
;``
logo.setAttribute('src', siteContent['nav']['img-src'])


/////NAV
let navItems = document.querySelectorAll('a')

navItems[0].textContent = siteContent['nav']['nav-item-1']
navItems[1].textContent = siteContent['nav']['nav-item-2']
navItems[2].textContent = siteContent['nav']['nav-item-3']
navItems[3].textContent = siteContent['nav']['nav-item-4']
navItems[4].textContent = siteContent['nav']['nav-item-5']
navItems[5].textContent = siteContent['nav']['nav-item-6']


/////CTA
let ctaH1 = document.querySelector('.cta-text h1')
let ctaBtn = document.querySelector('.cta-text button')
let ctaImg = document.querySelector('#cta-img')

ctaH1.textContent = siteContent["cta"]["h1"]
ctaBtn.textContent = siteContent["cta"]["button"]
ctaImg.src = siteContent["cta"]["img-src"]


/////MAIN CONTENT
//top - features/about
let featuresH4 = document.querySelector('.top-content .text-content:nth-child(1) h4')
let featuresP = document.querySelector('.top-content .text-content:nth-child(1) p')
featuresH4.textContent = siteContent["main-content"]["features-h4"]
featuresP.textContent = siteContent["main-content"]["features-content"]

let aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4')
let aboutP = document.querySelector('.top-content .text-content:nth-child(2) p')
aboutH4.textContent = siteContent["main-content"]["about-h4"]
aboutP.textContent = siteContent["main-content"]["about-content"]


//middle - img
let middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent["main-content"]["middle-img-src"]


//bottom - services/product/vision
let servicesH4 = document
  .querySelector('.bottom-content .text-content:nth-child(1) h4')
let servicesP = document
  .querySelector('.bottom-content .text-content:nth-child(1) p')
servicesH4.textContent = siteContent["main-content"]["services-h4"]
servicesP.textContent = siteContent["main-content"]["services-content"]

let productH4 = document
  .querySelector('.bottom-content .text-content:nth-child(2) h4')
let productP = document
  .querySelector('.bottom-content .text-content:nth-child(2) p')
productH4.textContent = siteContent["main-content"]["product-h4"]
productP.textContent = siteContent["main-content"]["product-content"]

let visionH4 = document
  .querySelector('.bottom-content .text-content:nth-child(3) h4')
let visionP = document
  .querySelector('.bottom-content .text-content:nth-child(3) p')
visionH4.textContent = siteContent["main-content"]["vision-h4"]
visionP.textContent = siteContent["main-content"]["vision-content"]


//////CONTACT
let contactH4 = document.querySelector('.contact h4')
let contactPees = document.querySelectorAll('.contact p')

contactH4.textContent = siteContent["contact"]["contact-h4"]
contactPees[0].textContent = siteContent["contact"]["address"]
contactPees[1].textContent = siteContent["contact"]["email"]
contactPees[2].textContent = siteContent["contact"]["phone"]