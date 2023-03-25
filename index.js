const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(function(entry){
        // if(entry.isIntersecting){
        //     entry.target.classList.toggle('show');
        // }  else {
        //     entry.target.classList.toggle('show');
        // }
        
        entry.target.classList.toggle('show', entry.isIntersecting);
        console.log(entry.target);
        // if(entry.isIntersecting) observer.unobserve(entry.target);

    })
    console.log(entries);
},{
    // threshold : 0.5,
    rootMargin: "-100px"
}); 

cards.forEach(card => {
    observer.observe(card);
})

// rootMargin can be used to pre-load the image when the image is a certain distance away from being loaded, it'll start loading