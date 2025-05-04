export const Footer = () => {
  return (
    <div className="h-16 bg-cream border-t border-zinc-700/10 flex items-center justify-center">
      <div className="text-xs sm:text-sm text-gray-600 font-medium">
        &copy; {new Date().getFullYear()} Tabaarah.com All rights reserved.
      </div>
    </div>
  );
};
