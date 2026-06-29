import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      setW(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] h-[2px] bg-transparent" data-testid="scroll-progress">
      <div className="h-full bg-[var(--accent)]" style={{ width: `${w}%`, transition: "width 0.05s linear" }} />
    </div>
  );
}
