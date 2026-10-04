export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg" role="banner">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group" aria-label="VisualizarZPL - Visualizar ZPL Online Grátis">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow group-hover:scale-105 transition-transform">
              <i className="fas fa-barcode text-blue-700 text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">VisualizarZPL</h1>
              <p className="text-xs text-blue-200">Visualizar ZPL Online Grátis - Editor de Etiquetas Zebra</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
            <a href="/" className="text-sm text-white font-medium flex items-center gap-1 border-b-2 border-white pb-0.5">
              <i className="fas fa-eye"></i> Viewer
            </a>
            <a href="/zpl-commands" className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1">
              <i className="fas fa-book"></i> Comandos ZPL
            </a>
            <a href="/zpl-tutorial" className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1">
              <i className="fas fa-graduation-cap"></i> Tutorial
            </a>
            <a href="/faq" className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1">
              <i className="fas fa-question-circle"></i> FAQ
            </a>
            <a href="/api" className="text-sm text-blue-100 hover:text-white transition-colors flex items-center gap-1">
              <i className="fas fa-plug"></i> API
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
            >
              <i className="fab fa-github text-sm"></i>
            </a>
            {/* Mobile menu button */}
            <button className="md:hidden w-8 h-8 rounded bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Menu">
              <i className="fas fa-bars text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
