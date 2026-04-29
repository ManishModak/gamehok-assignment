import React from "react";

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-xl font-bold text-foreground">Tournament Leaderboard</h2>
      <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4">
        <p className="text-muted-foreground">The leaderboard will appear here once the tournament starts.</p>
      </div>
    </div>
  );
}
