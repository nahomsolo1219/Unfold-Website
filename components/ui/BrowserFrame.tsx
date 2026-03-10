interface BrowserFrameProps {
  filename: string;
  className?: string;
  dark?: boolean;
}

export default function BrowserFrame({
  filename,
  className = "",
  dark = false,
}: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl ${
        dark
          ? "border border-dark-card-border bg-dark-card"
          : "border border-stone-200 bg-white"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 px-4 py-3 border-b ${
          dark
            ? "bg-dark-card border-dark-card-border"
            : "bg-stone-100 border-stone-200"
        }`}
      >
        <div className={`w-3 h-3 rounded-full ${dark ? "bg-stone-700" : "bg-stone-300"}`} />
        <div className={`w-3 h-3 rounded-full ${dark ? "bg-stone-700" : "bg-stone-300"}`} />
        <div className={`w-3 h-3 rounded-full ${dark ? "bg-stone-700" : "bg-stone-300"}`} />
        <div className="flex-1 mx-4">
          <div
            className={`h-5 rounded-md max-w-xs mx-auto ${
              dark ? "bg-stone-800" : "bg-stone-200"
            }`}
          />
        </div>
      </div>
      <div
        className={`aspect-[16/10] flex items-center justify-center ${
          dark ? "bg-stone-900/50" : "bg-stone-100"
        }`}
      >
        <span
          className={`text-sm font-medium ${
            dark ? "text-stone-600" : "text-stone-400"
          }`}
        >
          {filename}
        </span>
      </div>
    </div>
  );
}
