export default function PageWrapper({
  children,
}) {
  return (
    <div
      className="
      mx-auto
      w-full
      max-w-245
      space-y-28
      pb-28
      "
    >
      {children}
    </div>
  );
}