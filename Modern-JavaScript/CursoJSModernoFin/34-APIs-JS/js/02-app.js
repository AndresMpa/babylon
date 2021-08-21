// Previamente vimos getclientRect, que nos permitia identificar cuando un elemento estaba visible, existe otra API llamada Intersection Observer, veamos como utilizarla..


document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver( entries => {
        console.log(entries[0]);

        if(entries[0].isIntersecting) {
            console.log('Ya esta visible...')
        }
    })


    // El Elemento a observar...
    observer.observe(document.querySelector('.premium'));
});

