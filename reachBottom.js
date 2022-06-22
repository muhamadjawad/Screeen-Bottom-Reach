window.onscroll = (ev) => {

    //this condition is tru when you reach botttom of  screen'
    if ((Math.ceil(window.innerHeight + window.scrollY)) >= document.body.offsetHeight) {
        // you're at the bottom of the page
    }
};