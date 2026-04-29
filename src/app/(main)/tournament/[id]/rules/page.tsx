import React from "react";

export default function RulesPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-xl font-bold text-foreground">Tournament Rules</h2>
      <div className="bg-card border border-border rounded-2xl p-6">
        <ul className="flex flex-col gap-3 text-sm text-muted-foreground list-disc pl-5">
          <li>Fair play is mandatory.</li>
          <li>Cheating will result in an immediate ban.</li>
          <li>Ensure you are in the lobby 5 minutes before the start.</li>
          <li>Decisions by organisers are final.</li>
        </ul>
      </div>
    </div>
  );
}
