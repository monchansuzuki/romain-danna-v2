let cat = [];
let mag = [];
let prom = [];

/*fill the array cuz i am lazzy*/
for (let i = 1; i <= 31; i++) {
    cat.push("img"+i+"-min.jpg");
}


for (let i = 1; i <= 27; i++) {
    mag.push("img"+i+"-min.jpg");
}

for (let i = 1; i <= 16; i++) {
    prom.push("img"+i+"-min.jpg");
}

cat.forEach(function (value, index, array) {
    console.log(value);
})

function addPictureOnElement(arrayOfPicture, conteneurP , width ,height , pictureSource,altName) {
    arrayOfPicture.forEach(function (value, index) {
        let image = new Image(width,height);
        image.src = pictureSource+value;
        image.alt = altName+index;
        image.classList.add("img-gallery");
        document.getElementById(conteneurP).appendChild(image);
    })
}


let h1 = document.getElementById('categorie');
let select = document.getElementById('cat');

select.addEventListener('change',function (e) {
    let value = e.target.value;
    let titre = '';
    let node =document.getElementById('mag-img-container');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    if (value=== 'Catalogue') {
        titre = 'Catalogue';
        addPictureOnElement(cat,'mag-img-container','1000','1000','img/img-cat-comp/','catalogue');
    }else if (value===  'Magazine'){
        titre = 'Magazine';
        addPictureOnElement(mag,'mag-img-container','1000','1000','img/img-magazine-comp/','magazine');
    }else if (value === 'Promotion'){
        titre = 'Promotion';
        addPictureOnElement(prom,'mag-img-container','1000','1000','img/img-promo-comp/','promotion');
    } else {
        titre = 'Select a Catelogie'
    }

    h1.innerText = titre;

})

let btnMag = document.getElementById('mag-btn');
let btnProm =document.getElementById('prom-btn');
let btnCat = document.getElementById('cat-btn');

btnCat.addEventListener('click',function (ev) {
    let node =document.getElementById('mag-img-container');
    while (node.firstChild) {
        node.removeChild(node.firstChild);}
        addPictureOnElement(cat,'mag-img-container','1000','1000','img/img-cat-comp/','catalogue');
})

btnProm.addEventListener('click',function () {
    let node =document.getElementById('mag-img-container');
    while (node.firstChild) {
        node.removeChild(node.firstChild);}
    addPictureOnElement(prom,'mag-img-container','1000','1000','img/img-promo-comp/','promotion');

})

btnMag.addEventListener('click',function () {
    let node =document.getElementById('mag-img-container');
    while (node.firstChild) {
        node.removeChild(node.firstChild);}
    addPictureOnElement(mag,'mag-img-container','1000','1000','img/img-magazine-comp/','magazine');

})