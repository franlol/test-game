'use strict'

class Background {

    static getData(color) {

        const blueBg = "./img/Bgs/Blue/BG.png";
        const blueMeteors = "./img/Bgs/Blue/Meteors.png";
        const bluePlanets = "./img/Bgs/Blue/Planets.png";
        const blueStars = "./img/Bgs/Blue/Stars.png";

        switch (color) {
            case "blue":
                return {
                    bg: blueBg,
                    meteors: blueMeteors,
                    planets: bluePlanets,
                    stars: blueStars,
                    height: 7680,

                }
                

            case "green":
            break;

            case "brown":
            break;

            case "purple":
            break;

        }


    }
}