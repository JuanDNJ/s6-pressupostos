export default function BudgetHeader({ children }) {
  return (
    <header className="absolute bottom-0 md:bottom-40 flex gap-4 justify-end items-center w-full  p-4 ">
      {children}
    </header>
  );
}
