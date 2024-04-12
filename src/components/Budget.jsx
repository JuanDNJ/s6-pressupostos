export default function Budget({ children }) {
  return (
    <article className="md:min-h-56 grid md:grid-cols-3 bg-stone-200 rounded-md overflow-hidden relative">
      {children}
    </article>
  );
}
