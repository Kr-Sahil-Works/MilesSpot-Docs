export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-emerald-500 text-black hover:bg-emerald-400",

    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-2xl
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-200
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}