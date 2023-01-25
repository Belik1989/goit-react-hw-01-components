const li = document.querySelector('.item')

    li.each(function() {
    this.css('background',getRandomHexColor());
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
