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

var id = "copnerightzoght";
var name = "Copneright Zoght";
var description = "Under constuction"
var authors = "Me";
var version = 1;

// internal variables
var currency;
var quaternaryEntries;
var app_was_closed = false;

// upgrade variables
var a1, a2;

var init = () => {
    currency = theory.createCurrency();

    // Regular Upgrades

    // a1
    {
        let getDesc = (level) => "a_1=" + getA1(level).toString(0);
        let getInfo = (level) => "a_1=" + getA1(level).toString(0);
        a1 = theory.createUpgrade(1, currency, new FirstFreeCost(new ExponentialCost(100, Math.log2(2))));
        a1.getDescription = (_) => Utils.getMath(getDesc(a1.level));
        a1.getInfo = (amount) => Utils.getMathTo(getDesc(a1.level), getDesc(a1.level + amount));
    }

    var getA1 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 1);
    theory.invalidateSecondaryEquation();

    //Sercet and Normal Achievements
    let achievement_category_1 = theory.createAchievementCategory(0, "Secret Achievements");

    s_achievement_1 = theory.createSecretAchievement(1, achievement_category_1, "It's Bright!", "You will get one in one million chance every second.", "No Hint", () => s1Proof());
    s_achievement_2 = theory.createSecretAchievement(2, achievement_category_1, "Massively High", "Get 1e1000 Psi", "No Hint", () => game.psi() >= BigNumber("1e1000"));
    var getSecondaryEquation = () => {
        theory.secondaryEquationHeight = 70
        let result = "\\tau^{0.4}"

        return result
    }
}
init()