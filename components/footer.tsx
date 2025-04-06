export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <div className="flex gap-3">
        <p className="">
          &copy; Copyright {new Date().getFullYear()} Immediate.Trade
        </p>
      </div>
    </footer>
  );
};
