var app = new Vue({
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        style: {
            headerImage: {
                'background-image': 'url(./assets/images/header.jpg)'
            }
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true
    }
});