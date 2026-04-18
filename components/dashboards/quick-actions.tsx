export function QuickActions({ actions }: any) {
  return (
    <div className="space-y-3">
      {actions.map((a: string, i: number) => (
        <button
          key={i}
          className="w-full text-left p-3 rounded-lg bg-muted hover:bg-accent transition text-sm"
        >
          {a}
        </button>
      ))}
    </div>
  );
}