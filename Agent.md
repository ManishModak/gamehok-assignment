# Gamehok Frontend Assignment

## 🎯 Context & Goal
This is a take-home assignment for the Frontend Developer role at Gamehok. The objective is to build the "Bouncy Bird" game UI specifically for mobile, matching their highly custom dark-mode gaming aesthetic. 

The most critical factor for this assignment is **UI/UX accuracy**, as it will be thoroughly reviewed by their design team.

## 🔗 Important Links
*   **Figma Design:** [Frontend Assignment Figma](https://www.figma.com/design/q9fU3PPVoLqjHyyKEOKB8s/Frontend-Assignment?node-id=0-1&p=f&t=LC1AcIvYz2NfY3Ch-0)
*   **Live Web App (Reference):** [Gamehok User App](https://user.gamehok.com)

## 🛠️ Tech Stack Strategy
*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Core for all custom UI)
*   **Components:** shadcn/ui
    *   *Usage Rule:* Use Shadcn ONLY for complex logic/interactive components (e.g., `Carousel`, `Tabs`, `Sheet` for mobile nav). Build basic elements (Buttons, Cards, Badges) with pure Tailwind to perfectly match the Figma without fighting default styles.
*   **Icons:** `lucide-react` (or export custom SVGs from Figma)
*   **Deployment:** Vercel

## 📝 Constraints & Requirements
1.  **Mobile-First Focus:** The design is specifically for mobile. Do not waste time building a full desktop layout unless there is extra time. Ensure it looks perfect on mobile viewports.
2.  **Data Strategy:** No backend required. Create a `lib/mockData.ts` file or local JSON files to populate the UI (Tournaments, players, stats).
3.  **Timeline:** 2 days total.
4.  **Submission:** Public GitHub repository link + Vercel deployed link.

## 🚀 Execution Plan
1.  **Setup Phase:** Initialize Next.js, configure Tailwind theme (extracting exact colors/fonts from Figma).
2.  **Layout Phase:** Build the mobile app shell (Bottom navigation, sticky headers).
3.  **Component Phase:** Build the specialized cards, tournament details, and game views.
4.  **Polish Phase:** Ensure scroll areas work smoothly, add skeleton loaders if necessary (to mimic their live app), and verify pixel perfection against Figma.
