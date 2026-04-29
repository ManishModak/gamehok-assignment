import React from "react";

const steps = [
  "Have your game open already and on the latest version",
  "Once the match is configured you will receive an invite in-game to join the lobby.",
  "Join the match and wait for the game to start.",
  "When eliminated return to the match room page to be ready to join the next map in the round.",
];

export default function HowToJoin() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-foreground">How to Join a Match</h3>
      <ul className="flex flex-col gap-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
            <span className="text-primary mt-1.5">•</span>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
