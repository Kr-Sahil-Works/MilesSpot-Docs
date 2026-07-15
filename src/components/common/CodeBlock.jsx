import { useState } from "react";
import {
  Check,
  Copy,
} from "lucide-react";

export default function CodeBlock({
  language = "tsx",
  children,
}) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(children);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      console.error("Failed to copy");
    }
  }

  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border
      border-white/5
      bg-[#08110D]
      "
    >
      {/* Header */}

      <div
        className="
        flex
        items-center
        justify-between
        border-b
        border-white/5
        px-5
        py-3
        "
      >
        <div className="flex items-center gap-4">

          {/* macOS Dots */}

          <div className="flex gap-2">

            <span className="h-3 w-3 rounded-full bg-red-400" />

            <span className="h-3 w-3 rounded-full bg-yellow-400" />

            <span className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          <span
            className="
            rounded-full
            bg-emerald-500/10
            px-3
            py-1
            text-xs
            font-medium
            uppercase
            tracking-wider
            text-emerald-300
            "
          >
            {language}
          </span>

        </div>

        <button
          onClick={copyCode}
          className="
          flex
          items-center
          gap-2
          rounded-xl
          px-3
          py-2
          text-sm
          text-zinc-400
          transition
          hover:bg-white/5
          hover:text-white
          "
        >
          {copied ? (
            <>
              <Check size={16} />
              Copied
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy
            </>
          )}
        </button>

      </div>

      {/* Code */}

      <pre
        className="
        overflow-x-auto
        p-6
        text-sm
        leading-7
        text-emerald-300
        "
      >
        <code>{children}</code>
      </pre>

    </div>
  );
}