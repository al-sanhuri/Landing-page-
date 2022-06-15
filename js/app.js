// build navBar
const sections = Array.from(document.getElementsByTagName('section'));

function listItem () {
    for (i of sections) {
        let x = document.querySelector('ul');
        let y = document.createElement("li");
        y.innerHTML=`<a href="#${i.id}" data-nav="${i.id}" class="menu__link">${i.dataset.nav}</a>`;
        x.append(y);
    }
}
listItem();

window.onscroll = function () {
    sections.forEach(function (active){
        if (active.getBoundingClientRect().top >= -100 && active.getBoundingClientRect().top < 150) {
            for (y of sections) {
                active.classList.add('your-active-class');
                const activeLink = document.querySelector(`[href="#${active.id}"]`);
                activeLink.classList.add('menu__links');
            }
        } else {
            active.classList.remove('your-active-class');
            const activeLink = document.querySelector(`[href="#${active.id}"]`);
                activeLink.classList.remove('menu__links');
        }
    })
}

// smoothly
const ul = document.querySelector('ul');
ul.addEventListener("click", function (event) {
    event.preventDefault();
    const clickedSection = document.getElementById(event.target.getAttribute('href').substring(1));
    clickedSection.scrollIntoView({behavior: "smooth", block: 'center'})
})

