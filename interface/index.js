
  document.addEventListener( 'DOMContentLoaded', function() {
    const options = {
        mediaQuery: 'min',
        perPage: 1,
        breakpoints: {
            828: {
                destroy: true
            },
        },
        arrows: false,
    }

    const splide = new Splide( '.splide', options );
    splide.mount();
  } );
