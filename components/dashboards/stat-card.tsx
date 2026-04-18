import { Card } from "../ui/card";

export function StatCard({ title, value, change }: any) {
  return (
    <Card>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{title}</span>
        <span className="text-green-500">{change}</span>
      </div>
      <h2 className="text-xl font-semibold mt-2">{value}</h2>
    </Card>
  );
}