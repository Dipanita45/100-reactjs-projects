export function ActivityList({ data }: any) {
  return (
    <div className="space-y-3">
      {data.map((item: any, i: number) => (
        <div
          key={i}
          className="p-3 rounded-lg bg-muted hover:bg-accent transition"
        >
          <p className="text-sm">{item.title}</p>
          <span className="text-xs text-muted-foreground">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}