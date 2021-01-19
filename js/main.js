function onScrollY(positionY) {
    document.body.scrollTo({
        top: positionY,
        behavior : 'smooth'
    });

    document.documentElement.scrollTo({
        top: positionY,
        behavior : 'smooth'
    });
}
// back-to-the-top-button
document.querySelector('#to-the-top-button').addEventListener('click', function(e) {
    e.preventDefault();
    
    onScrollY(0);
});