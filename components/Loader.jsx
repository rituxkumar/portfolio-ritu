export default function Loader() {
  return (
    <div className="grid place-items-center">
      <div
        role="status"
        aria-label="Loading"
        className="h-12 w-12 rounded-full border-[6px] border-dotted border-blue-500 animate-spin"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
