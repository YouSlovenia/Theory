let theory = new Theory("Turbulent Chaos", "Turbulent chaos theory based on fractals and instability", true);

// Add the theory to the list of available theories in the game
theory.unlockable = true;

let Fi = new Variable("Fractal Instability", "The chaos within the system", 1, 0, 100);
let Ti = new Variable("Turbulence Intensity", "The intensity of turbulence", 1, 0, 100);
let Cf = new Variable("Chaos Feedback", "The feedback loop that increases tau", 0, 0, 100);
let Qd = new Variable("Quantum Drift", "Drift caused by quantum instability", 0, 0, 100);

theory.tauGeneration = function() {
    return Math.pow(Fi.value, 1.5) * Math.pow(Ti.value, 2.0) * (1 + Cf.value * 0.5);
}

theory.rhoGeneration = function() {
    return Ti.value * Qd.value * (1 + Fi.value);
}

theory.unlockMilestones = [
    {level: 1, milestone: () => Fi.value >= 100, unlock: () => Cf.value = 1}, // Unlock Chaos Feedback
    {level: 2, milestone: () => Cf.value >= 1, unlock: () => Qd.value = 0.1} // Unlock Quantum Drift
];

Game.addTheory(theory);
