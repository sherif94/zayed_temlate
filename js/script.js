// repeat question
const repeatcontainer = document.querySelector('.repeat-question .container');

repeatcontainer.addEventListener('click', e => {
    let er = e.target;
    let x = Array.from(er.children);
    if (e.target.classList.contains('rr') && e.target.classList.contains('box')) {

        x[2].classList.toggle('hide')
        if (x[0].className == 'fa fa-minus') {
            x[0].className = 'fa fa-plus';
        } else {
            x[0].className = 'fa fa-minus';
        }
    } else if (e.target.classList.contains('rr')) {
        console.log(e.target.nextElementSibling.classList.toggle('hide'));
        if (e.target.previousElementSibling.className == 'fa fa-minus') {
            e.target.previousElementSibling.className = 'fa fa-plus';
        } else {
            e.target.previousElementSibling.className = 'fa fa-minus';
        }
    } else if (e.target.classList.contains('fa')) {
        console.log(e.target.nextElementSibling.nextElementSibling.classList.toggle('hide'));
        if (e.target.className == 'fa fa-minus') {
            e.target.className = 'fa fa-plus';
        } else {
            e.target.className = 'fa fa-minus';

        }
    }
});











let arrSlid = [
    { cover: 'el5baz.webp', logo: 'el5bazlogo.jpg', text: 'salem' },
    { cover: '1.webp', logo: '1111.webp', text: 'salem' },
    { cover: 'حق_الموقع.webp', logo: '2l.webp', text: 'salem' },
    { cover: '2.webp', logo: 'American_Pizza_logo.webp', text: 'salem' },
    { cover: 'eid_offer (1).webp', logo: 'el5bazlogo.jpg', text: 'salem' },
    { cover: 'Fried_Fish________________.webp', logo: 'logo-01.webp', text: 'salem' },
    { cover: 'el5baz.webp', logo: 'el5bazlogo.jpg', text: 'salem' },
    { cover: '1.webp', logo: '1111.webp', text: 'salem' },
    { cover: 'حق_الموقع.webp', logo: '2l.webp', text: 'salem' },
    { cover: '2.webp', logo: 'American_Pizza_logo.webp', text: 'salem' },
    { cover: 'eid_offer (1).webp', logo: 'el5bazlogo.jpg', text: 'salem' },
    { cover: 'Fried_Fish________________.webp', logo: 'logo-01.webp', text: 'salem' },
    { cover: 'el5baz.webp', logo: 'el5bazlogo.jpg', text: 'salem' },
    { cover: '1.webp', logo: '1111.webp', text: 'salem' },
    { cover: 'حق_الموقع.webp', logo: '2l.webp', text: 'salem' },
    { cover: '2.webp', logo: 'American_Pizza_logo.webp', text: 'salem' },
    { cover: 'eid_offer (1).webp', logo: 'el5bazlogo.jpg', text: 'salem' },
    { cover: 'Fried_Fish________________.webp', logo: 'logo-01.webp', text: 'salem' }

];

const slidContainer = document.getElementById('slid-container');
let i = 0;
const ss = setInterval(() => {
    if (i < arrSlid.length - 6) {
        slidContainer.innerHTML = `
        <div class="box image-box">
            <img class="cover" src="images/slid/cover/${arrSlid[i+1].cover}">
            <img class="logo" src="images/slid/logo/${arrSlid[i+1].logo}">
            <h3>ديب ان ديب</h3>
        </div>
        <div class="box image-box">
            <img class="cover" src="images/slid/cover/${arrSlid[i+2].cover}">
            <img class="logo" src="images/slid/logo/${arrSlid[i+2].logo}">
            <h3>ديب ان ديب</h3>
        </div>
        <div class="box image-box">
            <img class="cover" src="images/slid/cover/${arrSlid[i+3].cover}">
            <img class="logo" src="images/slid/logo/${arrSlid[i+3].logo}">
            <h3>ديب ان ديب</h3>
        </div>
        <div class="box image-box">
            <img class="cover" src="images/slid/cover/${arrSlid[i+4].cover}">
            <img class="logo" src="images/slid/logo/${arrSlid[i+4].logo}">
            <h3>ديب ان ديب</h3>
        </div>
        <div class="box image-box">
        <img class="cover" src="images/slid/cover/${arrSlid[i+5].cover}">
        <img class="logo" src="images/slid/logo/${arrSlid[i+5].logo}">
        <h3>ديب ان ديب</h3>
    </div>
    <div class="box image-box">
    <img class="cover" src="images/slid/cover/${arrSlid[i+6].cover}">
    <img class="logo" src="images/slid/logo/${arrSlid[i+6].logo}">
    <h3>ديب ان ديب</h3>
</div>

        `;
        i++;
    } else {
        i = 0;
    }

}, 3000);