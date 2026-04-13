type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`animate-fade-in-blur container mx-auto max-w-6xl px-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}