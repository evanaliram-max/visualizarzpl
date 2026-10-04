export default function SeoContent() {
  return (
    <section className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Sobre o Visualizador ZPL Online
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        O VisualizarZPL é uma ferramenta online gratuita para visualizar, editar e converter etiquetas ZPL (Zebra Programming Language). 
        Ideal para profissionais de logística, varejo e manufatura que trabalham com impressoras Zebra.
      </p>
      <h3 className="font-semibold text-gray-800 mt-4 mb-2">Recursos:</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li>Visualização em tempo real de etiquetas ZPL</li>
        <li>Suporte a Code 128, QR Code, EAN-13 e outros códigos de barras</li>
        <li>Conversão ZPL para PNG e PDF</li>
        <li>Múltiplas densidades de impressão (152, 203, 300, 600 DPI)</li>
        <li>100% gratuito e sem instalação</li>
      </ul>
    </section>
  );
}
