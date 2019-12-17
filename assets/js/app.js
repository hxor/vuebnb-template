var app = new Vue({
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        amenities: sample.amenities,
        prices: sample.prices,
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false,
        style: {
            headerImage: {
                'background-image': 'url(./assets/images/header.jpg)'
            },
        },
    },
    watch: {
        modalOpen: function() {
            const className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    }
});