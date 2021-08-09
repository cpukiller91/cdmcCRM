var elem = Array.prototype.slice.call(document.querySelectorAll('.js-small'));

elem.forEach(function(html) {
    var switchery = new Switchery(html, {
        color: '#1abc9c',
        jackColor: '#fff',
        size: 'small'
    });
});