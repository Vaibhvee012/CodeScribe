const Footer = () => (
  <footer id="footer" className="border-t border-slate-200 dark:border-white/10">
    <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center lg:px-8">
      <a href="#" className="font-semibold text-slate-900 dark:text-white">
        CodeScribe<span className="text-blue-600">.</span>
      </a>
      <p className="max-w-full">© 2024 CodeScribe. Built for thoughtful developers.</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Privacy</a>
      </div>
    </div>
  </footer>
);

export default Footer;