import { useEffect } from "react";
import Portfolio from "./Portfolio";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Portfolio />
    </div>
  );
}
