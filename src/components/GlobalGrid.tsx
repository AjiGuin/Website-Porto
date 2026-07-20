export default function GlobalGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-70" />
      <div className="absolute -left-40 top-[10%] h-[420px] w-[420px] rounded-full bg-graphite/[0.05] blur-3xl" />
      <div className="absolute -right-52 top-[45%] h-[520px] w-[520px] rounded-full bg-graphite/[0.04] blur-3xl" />
      <div className="absolute left-1/3 bottom-[-10%] h-[380px] w-[380px] rounded-full bg-graphite/[0.05] blur-3xl" />
    </div>
  );
}
