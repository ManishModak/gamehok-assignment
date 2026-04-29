import React from "react";

export default function TournamentRootPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-3xl font-black text-foreground">My Tournaments</h1>
      <p className="text-muted-foreground">Your active and past tournaments will be listed here.</p>
    </div>
  );
}
