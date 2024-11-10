import { characters, abilities } from './data.js';

let selectedCharacter;


const powerList = Object.values(abilities);
const lifeQuantity = 3;
let playerLife = lifeQuantity;
let enemyLife = lifeQuantity;

export const subScreen = (section, index) => {
    const button = createButton(flowLine[index](section), () => {
        section.innerHTML = "";
        index === flowLine.length - 1 ? subScreen(section, 0) : subScreen(section, index + 1);
    });

    section.appendChild(button);
};



const selectCharacter = (characterName) => {
    selectedCharacter = characters[characterName]; 
};

function powerButton(section, text, onClick) {
    const upperBtn = document.createElement("button");
    upperBtn.classList.add("button");
    
    const textButton = document.createElement("p");
    textButton.classList.add("text-btn");
    textButton.innerHTML = text;

    const bloomContainer = document.createElement("div");
    bloomContainer.classList.add("bloom-container");

    const buttonContainerMain = document.createElement("div");
    buttonContainerMain.classList.add("button-container-main");

    const buttonInner = document.createElement("div");
    buttonInner.classList.add("button-inner");

    const back = document.createElement("div");
    back.classList.add("back");

    const front = document.createElement("div");
    front.classList.add("front");

    const svg = document.createElement("svg");
    svg.classList.add("svg");
    svg.innerHTML = text;

    const buttonGlass = document.createElement("div");
    buttonGlass.classList.add("button-glass");

    const bloom1 = document.createElement("div");
    bloom1.classList.add("bloom");
    bloom1.classList.add("bloom1");

    const bloom2 = document.createElement("div");
    bloom2.classList.add("bloom");
    bloom2.classList.add("bloom2");

    section.appendChild(upperBtn);
    upperBtn.appendChild(textButton);
    upperBtn.appendChild(bloomContainer);
    bloomContainer.appendChild(buttonContainerMain);
    buttonContainerMain.appendChild(buttonInner);
    buttonInner.appendChild(back);
    buttonInner.appendChild(front);
    front.appendChild(svg);

    buttonContainerMain.appendChild(buttonGlass);
    buttonGlass.appendChild(back);
    buttonGlass.appendChild(front);

    buttonContainerMain.appendChild(bloom1);
    buttonContainerMain.appendChild(bloom2);

    upperBtn.addEventListener("click", onClick);
}

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.classList.add("main-btn");
    button.innerHTML = text;
    button.addEventListener("click", onClick);
    return button;
}

const startingPage = (section) => {
    const name = "Start";
    const container = document.createElement("div");
    container.id = "start";

    const title = document.createElement("h1");
    const p = document.createElement("p");
    const hero = document.createElement("div");

    hero.classList.add("hero");

    title.innerHTML = "Welcome to the game!";
    p.innerHTML = "Click the button below to start the game.";

    section.appendChild(container);
    container.appendChild(title);
    container.appendChild(p);
    container.appendChild(hero);
    return name;
};

const selectionPage = (section) => {
    const name = "Select";

    const container = document.createElement("div");
    container.id = "select";

    const box = document.createElement("div");
    box.classList.add("container");

    const title = document.createElement("h1");
    const p = document.createElement("p");
    title.innerHTML = "Select your character!";
    p.innerHTML = "Click the button below to select your character.";

    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add("thumbnail-container");

    section.appendChild(container);
    container.appendChild(title);
    container.appendChild(p);
    container.appendChild(box);

    // Creación de contenedores para personajes y miniaturas
    const characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");
    box.appendChild(characterContainer);

    box.appendChild(thumbnailContainer);

    const charactersList = Object.values(characters);

    let activeCharacterIndex = 0;

    const renderCharacter = (index) => {
        // Limpiar el contenedor de personaje actual
        characterContainer.innerHTML = ''; 
    
        // Crear el nuevo contenedor de personaje
        const characterData = charactersList[index];
        const character = document.createElement("div");
        character.classList.add("character");
    
        const characterImg = document.createElement("img");
        characterImg.src = characterData.select;
        characterImg.classList.add("character-img");
    
        const characterName = document.createElement("h2");
        characterName.innerHTML = characterData.name;
    
        const characterPlatform = document.createElement("div");
        characterPlatform.classList.add("character-platform");
    
        // Añadir elementos al contenedor de personaje
        character.appendChild(characterName);
        character.appendChild(characterImg);
        character.appendChild(characterPlatform);
        characterContainer.appendChild(character);
    
        // Establecer el personaje seleccionado
        selectCharacter(characterData.name);  // Llama a selectCharacter aquí
    };

    // Renderizar el primer personaje por defecto
    renderCharacter(activeCharacterIndex);

    // Crear las miniaturas
    charactersList.forEach((characterData, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = characterData.avatar;
        thumbnail.classList.add("thumbnail");

        // Añadir la clase "active-thumbnail" solo al thumbnail activo
        if (index === activeCharacterIndex) {
            thumbnail.classList.add("active-thumbnail");
        }

        thumbnail.addEventListener("click", () => {
            // Actualizar el índice del personaje activo
            activeCharacterIndex = index;
            renderCharacter(index);

            // Eliminar la clase "active-thumbnail" de todos los thumbnails
            document.querySelectorAll(".thumbnail").forEach(tn => {
                tn.classList.remove("active-thumbnail");
            });

            // Añadir la clase "active-thumbnail" solo al thumbnail clicado
            thumbnail.classList.add("active-thumbnail");
        });

        thumbnailContainer.appendChild(thumbnail);
        
    });

    return name;
};
const selectRandomEnemy = () => {
    console.log("Selected Character:", selectedCharacter);
    if (!selectedCharacter) {
        console.error("No character selected");
        return null; // O maneja el caso de otra manera
    }
    const enemyCandidates = Object.values(characters).filter(character => character.name !== selectedCharacter.name);
    const randomIndex = Math.floor(Math.random() * enemyCandidates.length);
    return enemyCandidates[randomIndex];
};

const selectRandomEnemyAttack = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;

}

const battlePage = (section) => {
    const name = "Play Again";
    const container = document.createElement("div");
    container.id = "battle";
    
    
    const title = document.createElement("h1");
    const p = document.createElement("p");
    const image = document.createElement("div");
    image.classList.add("battle-arena");

    title.innerHTML = "Fight!";
    p.innerHTML = "Click the attack buttons to fight.";

    // Selección de enemigo aleatorio
    const enemy = selectRandomEnemy();

    const enemyContainer = document.createElement("div");
    enemyContainer.classList.add("enemy-container");
    image.appendChild(enemyContainer);

    const enemyDialog = document.createElement("div");
    enemyDialog.classList.add("enemy-dialog");
    enemyContainer.appendChild(enemyDialog);

    const enemyAvatar = document.createElement("div");
    enemyAvatar.classList.add("enemy-avatar");
    enemyAvatar.style.backgroundImage = `url(${enemy.avatar})`;
    enemyDialog.appendChild(enemyAvatar);

    const enemyDialogBubble = document.createElement("div");
    enemyDialogBubble.classList.add("enemy-dialog-bubble");
    

    const enemyName = document.createElement("h2");
    enemyName.innerHTML = powerList.find(power => power.type === enemy.type).attack1.icon + " " +  enemy.name;
    enemyDialogBubble.appendChild(enemyName);

    const createMessage = (section, attack) => {
        const message = document.createElement("p");
        message.innerHTML = "A ver si puedes con mi ataque <strong>" + attack + "</strong>";
        section.appendChild(message);
    }


    

    const enemyImg = document.createElement("div");
    enemyImg.classList.add("enemy-img");
    enemyImg.style.backgroundImage = `url(${enemy.select})`;
    enemyContainer.appendChild(enemyImg);

    const enemyHealth = document.createElement("div");
    enemyHealth.classList.add("enemy-health");
    enemyContainer.appendChild(enemyHealth);
    for (let i = 0; i < lifeQuantity; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        enemyHealth.appendChild(heart);
    }



    const playerContainer = document.createElement("div");
    playerContainer.classList.add("player-container");
    image.appendChild(playerContainer);

    const playerImg = document.createElement("div");
    playerImg.classList.add("player-img");
    playerImg.style.backgroundImage = `url(${selectedCharacter.back})`;
    playerContainer.appendChild(playerImg);

    const powers = document.createElement("div");
    powers.classList.add("powers");
    playerImg.appendChild(powers);

    
    
    const playerDialog = document.createElement("div");
    playerDialog.classList.add("player-dialog");
    playerContainer.appendChild(playerDialog);

    const playerAvatar = document.createElement("div");
    playerAvatar.classList.add("player-avatar");
    playerAvatar.style.backgroundImage = `url(${selectedCharacter.avatar})`;
    playerDialog.appendChild(playerAvatar);

    const playerDialogBubble = document.createElement("div");
    playerDialogBubble.classList.add("player-dialog-bubble");
    

    
    /* Game Logic */
    const selectedCharacterPowerIcons = [];
    const selectedPowers = powerList.find(power => power.type === selectedCharacter.type);
    
    if (selectedPowers) {
        selectedCharacterPowerIcons.push(selectedPowers.attack1.icon, selectedPowers.attack2.icon, selectedPowers.attack3.icon);

    }
let existingMessage = false

    selectedCharacterPowerIcons.forEach((power) => {
        
        const onclick = () => {
            /* Player message */
            if (existingMessage) {
                const paragraphs = playerDialogBubble.querySelectorAll("p");
                paragraphs.forEach((p) => p.remove()); // Eliminar todos los <p>
                const enemyM = enemyDialogBubble.querySelectorAll("p");
                enemyM.forEach((p) => p.remove()); // Eliminar todos los <p>
            }
            let playerAttack = "";
            playerDialog.appendChild(playerDialogBubble);
            existingMessage = true
            Object.values(selectedPowers).forEach((element) => {
                if(element.icon === power){
                    createMessage(playerDialogBubble, element.name);
                    playerAttack = element.name;
                }
            }
            );

            const enemyAttack = Object.values(selectedPowers)[selectRandomEnemyAttack() + 1].name;
            
            console.log("Enemy attack:", enemyAttack);

            /* Enemy message */
            let enemyExistingMessage = false;
            
            enemyDialog.appendChild(enemyDialogBubble);
            enemyExistingMessage = true
            
            createMessage(enemyDialogBubble, enemyAttack);

            const result = combat(playerAttack, enemyAttack);
            console.log("Result:", result);
        };
        

        powerButton(powers, power, onclick);
        
    });

    const combat = (playerAttack, enemyAttack) => {
        const winCase = {
            "Puño": "Barrida",
            "Patada": "Puño",
            "Barrida": "Patada"
        };
        if (winCase[playerAttack] === enemyAttack) {
            enemyLife--;
            const mainMessage = document.createElement("h1");
            mainMessage.innerHTML = "Ganaste 🎉";
            mainMessage.classList.add("main-message");
            
            container.appendChild(mainMessage);
            return "Ganaste 🎉";
        } else if (winCase[enemyAttack] === playerAttack) {
            playerLife--;
            mainMessage.innerHTML = "Perdiste";
            mainMessage.classList.add("main-message");
            container.appendChild(mainMessage);
            return "Perdiste";
        } else {
            mainMessage.innerHTML = "Empate";
            mainMessage.classList.add("main-message");
            container.appendChild(mainMessage);
            return "Empate";
        }
    }


    
    const playerName = document.createElement("h2");
    playerName.innerHTML = selectedCharacter.name + " " + selectedCharacterPowerIcons[0];
    playerDialogBubble.appendChild(playerName);

    const playerHealth = document.createElement("div");
    
    playerHealth.classList.add("player-health");
    playerContainer.appendChild(playerHealth);


    for (let i = 0; i < lifeQuantity; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        playerHealth.appendChild(heart);
    }



    section.appendChild(container);
    container.appendChild(title);
    container.appendChild(p);
    container.appendChild(image);

    return name;
};

export const flowLine = [
    startingPage,
    selectionPage,
    battlePage,
];
