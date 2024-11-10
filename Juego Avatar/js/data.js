export const data = {
    screens: {
        play: {
            name: "Play",
            href: "play",
            flow: {
                select: {
                    name: "Select",
                },
                battle: {
                    name: "Battle",
                },
                result: {
                    name: "Result",
                },
            },
        },
        rules: {
            name: "Rules",
            href: "rules",
        },
        score: {
            name: "Score",
            href: "score",
        },
        exit: {
            name: "Exit",
            href: "exit",
        },
    },
};

export const characters = {
    Aang: {
        name: "Aang",
        select: "../assets/characters/Aang/select.png",
        avatar: "../assets/characters/Aang/avatar.png",
        back: "../assets/characters/Aang/back.png",
        type: "air",
    },
    Iroh: {
        name: "Iroh",
        select: "../assets/characters/Iroh/select.png",
        avatar: "../assets/characters/Iroh/avatar.png",
        back: "../assets/characters/Iroh/back.png",
        type: "fire",
    },
    Azula: {
        name: "Azula",
        select: "../assets/characters/Azula/select.png",
        avatar: "../assets/characters/Azula/avatar.png",
        back: "../assets/characters/Azula/back.png",
        type: "fire",
    },
    Katara: {
        name: "Katara",
        select: "../assets/characters/Katara/select.png",
        avatar: "../assets/characters/Katara/avatar.png",
        back: "../assets/characters/Katara/back.png",
        type: "water",
    },
    Sokka: {
        name: "Sokka",
        select: "../assets/characters/Sokka/select.png",
        avatar: "../assets/characters/Sokka/avatar.png",
        back: "../assets/characters/Sokka/back.png",
        type: "water",
    },
    Toph: {
        name: "Toph",
        select: "../assets/characters/Toph/select.png",
        avatar: "../assets/characters/Toph/avatar.png",
        back: "../assets/characters/Toph/back.png",
        type: "earth",
    },
    Zuko: {
        name: "Zuko",
        select: "../assets/characters/Zuko/select.png",
        avatar: "../assets/characters/Zuko/avatar.png",
        back: "../assets/characters/Zuko/back.png", 
        type: "fire",
    },
    Mai: {
        name: "Mai",
        select: "../assets/characters/Mai/select.png",
        avatar: "../assets/characters/Mai/avatar.png",
        back: "../assets/characters/Mai/back.png",
        type: "fire",
    },
    TyLee: {
        name: "TyLee",
        select: "../assets/characters/TyLee/select.png",
        avatar: "../assets/characters/TyLee/avatar.png",
        back: "../assets/characters/TyLee/back.png",
        type: "air",
    },
    Suki: {
        name: "Suki",
        select: "../assets/characters/Suki/select.png",
        avatar: "../assets/characters/Suki/avatar.png",
        back: "../assets/characters/Suki/back.png",
        type: "earth",
    },
    Yue: {
        name: "Yue",
        select: "../assets/characters/Yue/select.png",
        avatar: "../assets/characters/Yue/avatar.png",
        back: "../assets/characters/Yue/back.png",
        type: "water",
    },
};  

export const rules = {
    rules: {
        name: "Para Jugar",
        description: "Selecciona un personaje y lucha contra otro personaje. Cada personaje tiene tres vidas. Elige un ataque y espera el resultado. El personaje que gane tres veces gana la partida.",
    },
    /* types: {
        name: "Types",
        description: "There are four types of characters: Water, Earth, Air and Fire. Water beats Fire, Fire beats Earth, and Earth beats Water. Air is neutral and does not have any advantage or disadvantage against the other types.",
        img: "../assets/ui/elements.png",
    },  */ 
    battle: {
        name: "Para Ganar",
        description: "Puño gana a Barrida, Patada gana a Puño, y Barrida gana a Patada.",
    },
};

export const abilities = {
    water: {
        type: "water",
        attack1: {
            name: "Puño",
            icon:"💧",
            damage: 100,
        },
        attack2: {
            name: "Patada",
            icon:"🌊",
            damage: 200,
        },
        attack3: {
            name: "Barrida",
            icon:"🌧️",
            damage: 300,
        },
    },
    earth: {
        type: "earth",
        attack1: {
            name: "Puño",
            icon:"🪨",
            damage: 100,
        },
        attack2: {
            name: "Patada",
            icon:"🏔️",
            damage: 200,
        },
        attack3: {
            name: "Barrida",
            icon:"🌋",
            damage: 300,
        },
    },
    air: {
        type: "air",
        attack1: {
            name: "Puño",
            icon:"💨",
            damage: 100,
        },
        attack2: {
            name: "Patada",
            icon:"🌪️",
            damage: 200,
        },
        attack3: {
            name: "Barrida",
            icon:"🌬️",
            damage: 300,
        },
    },
    fire: {
        type: "fire",
        attack1: {
            name: "Puño",
            icon:"🔥",
            damage: 100,
        },
        attack2: {
            name: "Patada",
            icon:"🌞",
            damage: 200,
        },
        attack3: {
            name: "Barrida",
            icon:"🔥",
            damage: 300,
        },
    },
};