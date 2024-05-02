let nameDisplay = document.getElementById('name');
let getName = document.getElementById('getNameBtn');


getName.addEventListener('click', () => {
    let x = Math.ceil(Math.random() * 8);
    let chosenName = '';
    switch (x){
        case 1:
            chosenName = 'Tanguy';
            break;
        case 2:
            chosenName = 'JeremyF';
            break;
        case 3:
            chosenName = 'JeremyV';
            break;
        case 4:
            chosenName = 'Tien';
            break;
        case 5:
            chosenName = 'Thomas';
            break;
        case 6:
            chosenName = 'Marilyne';
            break;
        case 7:
            chosenName = 'Quentin';
            break;
        case 8:
            chosenName = 'Pierre';
            break;
        default:
            chosenName = 'Nobody';
            break;
    }
    nameDisplay.innerHTML = chosenName;
})


