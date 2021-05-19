let re = RegExp('([a-z]+)_');

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const sect = re.exec(id)[0];
            console.log(sect);
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${sect}"]`).parentElement.classList.add('active');
            }
            //else {
            //    document.querySelector(`nav li a[href="#${sect}"]`).parentElement.classList.remove('active');
            //}
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});

