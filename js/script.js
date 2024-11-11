let hamburgerButton = document.getElementById("hamburger");
let mainNav = document.getElementById("main-nav");
let styleRules = document.styleSheets[0].cssRules;
let navigation;

for (const [key, value] of Object.entries(styleRules)) {
    if (value.selectorText == '.navigation') {
        navigation = styleRules[key];
    }
}

hamburgerButton.addEventListener('click', function() {
    hamburgerButton.classList.toggle('closed');
    if (hamburgerButton.classList.contains('closed')) {
        navigation.style.setProperty('opacity', 0);
        navigation.style.setProperty('transform', 'scale(0)');
    } else {
        navigation.style.setProperty('opacity', 1);
        navigation.style.setProperty('transform', 'scale(1)');
    }
})

mainNav.addEventListener('click', () => {
    hamburgerButton.classList.add('closed');
    navigation.style.setProperty('opacity', 0);
    navigation.style.setProperty('transform', 'scale(0)');
})