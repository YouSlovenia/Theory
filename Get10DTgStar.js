import {CustomCost, ExponentialCost} from "./api/Costs";
import { Localization } from "./api/Localization";
import {BigNumber, parseBigNumber} from "./api/BigNumber";
import {QuaternaryEntry, theory} from "./api/Theory";
import {Utils} from "./api/Utils";
import {ui} from "./api/ui/UI";
import {Thickness} from "./api/ui/properties/Thickness";
import {TextAlignment} from "./api/ui/properties/TextAlignment";
import {FontAttributes} from "./api/ui/properties/FontAttributes";
import {TouchType} from "./api/ui/properties/TouchType";
import { Vector3 } from "../../../Projects/theory-sdk/api/Vector3";
import {Color} from "./api/ui/properties/Color";
import {CornerRadius} from "./api/ui/properties/CornerRadius";
import {game} from "./api/Game";

requiresGameVersion("1.4.33");
var id = "make_rich"
var name = "Get 1e100 stars rich";
var description = "You're a student hired by a professor at a famous university. Since your work has received a bit of attention from your colleagues in the past, you decide to go into a subject not yet covered by your professor, which has interested you since day 1 of deciding to study mathematics - Complex Numbers.\nYou hope that with your research on this subject, you can finally get the breakthrough you always wanted in the scientific world.\n\nThis theory explores the world of complex numbers, their arrangement and their place in the Universe of Mathematics. The theory, named after famous mathematician Leonhard Euler, explores the relationship between exponential and trigonometric functions.\nYour task is to use this formula, and with the help of the Pythagorean theorem, to calculate the distances of cos(t) and isin(t) from the origin and grow them as large as possible using many different methods and approaches!\nA theory with interesting grow and decay rates, unusual properties, and (We hope) an interesting story!\n\nVariable Explanation:\n\nt - A simple variable based on time. Is reset on publish.\nq - A variable helping you grow ρ, directly affected by t.\na - Multiple kinds of variables, helping you grow ρ.\nb and c - Variables modifying cos(t) and isin(t)\n\nHuge thanks to:\n\n- Gilles-Philippe, for implementing integral features we proposed, helping us a *ton* during development, answering our questions and giving us beta features to use in our theories!\n\n- XLII, doing basically ALL of the balancing together with Snaeky, deciding various integral features of the theory such as, but not limited to: milestone placement, milestone costs, publication multipliers and a lot more!\n\n- Snaeky, without whom this theory would not have been possible as he was the one with the original idea of structuring a theory around Euler's Formula, and always answered my (peanut's) questions and motivated us all to push this theory forward.\n\nand of course:\n\n- The entire Discord community, who've playtested this theory and reported many bugs, especially those active in #custom-theories-dev!\n\nWe hope you enjoy playing this theory as much as we had developing it and coming up with ideas for it!\n\n- The Eulers-Formula-CT Team"
var authors = "Snaeky (SnaekySnacks#1161) - Structuring\nXLII (XLII#0042) - Balancing\npeanut (peanut#6368) - Developer";
var version = 1;

var hack = () => {
    game.starsTotal = () => {return BigNumber("1e100")}
}
var getEndPopup = ui.createPopup({
    title: "The End",
    content: ui.createStackLayout({
        children: [
            ui.createFrame({
                heightRequest: 309,
                cornerRadius: 0,
                content: ui.createLabel({text: "Yes or no?",
                    padding: Thickness(12, 2, 12, 2),
                    fontSize: 15
                })
            }),
            ui.createLabel({
                text: "Please get 1e100 stars now",
                horizontalTextAlignment: TextAlignment.CENTER,
                fontAttributes: FontAttributes.BOLD,
                fontSize: 18,
                padding: Thickness(0, 18, 0, 18),
            }),
            ui.createButton({text: "No", onClicked: () => getEndPopup.hide()}),
            ui.createButton({text: "yes", onClicked: () => hack()})
        ]
    })
});

getEndPopup.show()