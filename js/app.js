window.addEventListener('scroll', e => {

    // Get the scroll on Y
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});

// Add GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create ({
	wrapper: '.wrapper',
	content: '.content'
});