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

// variables
var ft = 0

// upgrade variables
var x, y;

var init = () => {
    currency = theory.createCurrency();

    // Regular Upgrades

    // x
    {
        let getDesc = (level) => "x=" + getX(level).toString(0);
        let getInfo = (level) => "x=" + getX(level).toString(0);
        x = theory.createUpgrade(1, currency, new FreeCost());
        x.getDescription = (_) => Utils.getMath(getDesc(q1.level));
        x.getInfo = (amount) => Utils.getMathTo(getDesc(q1.level), getDesc(x.level + amount));
    }
}
