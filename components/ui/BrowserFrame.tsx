interface BrowserFrameProps {
  filename: string;
  className?: string;
}

export default function BrowserFrame({
  filename,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl border border-stone-200 bg-white shadow-xl overflow-hidden ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-stone-100 border-b border-stone-200">
        <div className="w-3 h-3 rounded-full bg-stone-300" />
        <div className="w-3 h-3 rounded-full bg-stone-300" />
        <div className="w-3 h-3 rounded-full bg-stone-300" />
        <div className="flex-1 mx-4">
          <div className="h-5 bg-stone-200 rounded-md max-w-xs mx-auto" />
        </div>
      </div>
      {/* Screenshot placeholder */}
      <div className="aspect-[16/10] bg-stone-100 flex items-center justify-center">
        <span className="text-stone-400 text-sm font-medium">{filename}</span>
      </div>
    </div>
  );
}
