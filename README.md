# Screeen-Bottom-Reach
The function will be triggered once you reach the bottom  of the screen. This will run in any JS platform and library. E.g React,Nextjs ,React-Native,Angular


'''window.onscroll = (ev) => {

    //this condition is tru when you reach botttom of  screen'
    if ((Math.ceil(window.innerHeight + window.scrollY)) >= document.body.offsetHeight) {
        // you're at the bottom of the page
    }
};
'''
