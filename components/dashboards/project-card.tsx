export function ProjectCard({ project }: any) {
  return (
    <div className="p-4 rounded-lg border bg-muted hover:bg-accent transition">
      <h3 className="font-medium">{project.name}</h3>
      <p className="text-xs text-muted-foreground">
        {project.desc}
      </p>
    </div>
  );
}