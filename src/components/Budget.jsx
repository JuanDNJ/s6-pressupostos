export default function Budget({ children }) {
  return (
    <article className="md:min-h-56 grid items-center md:grid-cols-3 bg-white rounded-md overflow-hidden relative">
      {children}
    </article>
  );
}
