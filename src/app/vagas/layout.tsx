export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full border-t bg-gray-100">
      <div className="mx-auto max-w-5xl py-10">{children}</div>
    </div>
  );
}
