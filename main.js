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
})
