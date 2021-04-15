var app = new Vue ({
    el: '#header-vue',
    data: {
        nav: [
            'Home',
            'About Me',
            'Testimonials',
            'My Blog',
            'Meetups',
            'Shop',
            'Contact Me'
        ],
        icon: 'fas fa-shopping-cart',
        currentPage: 'Home'
    },
    methods: {
        page: function(index) {
            this.currentPage = this.nav[index];
        }
    }
});

var appDue = new Vue ({
    el: '#footer-vue',
    data: {
        liste: [
            {  
                type: 'descrizione',
                title: 'ABOUT ME',
                paragraph: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volupat.'
            },
            {  
                type: 'link',
                title: 'USEFUL LINKS',
                list: [
                    'Latest Books',
                    'Upcoming Events',
                    'Recent Articles',
                    'Business Enquiries',
                    'Visit My Foundation'
                ]
            },
            {  
                type: 'contatti',
                title: 'CONTACT INFO',
                list: [
                    '63 E. Studebaker Street Bolingbrook, IL 60440',
                    'Phone: (800) 000-0000',
                    'Mobile: (800) 000-0000',
                    'Email: info@your-company.com'
                ],
                icons: [
                    'fab fa-facebook-f',
                    'fab fa-twitter',
                    'fab fa-instagram',
                    'fab fa-linkedin-in',
                    'fab fa-youtube'
                ]

            },
            
        ],
        copyright: '© Copyright 2012 - 2021 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress'
    }
})
