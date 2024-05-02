// Target the p to display the name
let nameDisplay = document.getElementById('name');
// Target the button
let getName = document.getElementById('getNameBtn');


getName.addEventListener('click', () => {
    // Get a random number between 1 and 8
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
    // Display the name in the paragraphe
    nameDisplay.innerHTML = chosenName;
})


