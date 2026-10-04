import { LabelSettings } from '../utils/constants';

interface LabelPreviewProps {
  image: string | null;
  loading: boolean;
  error: string | null;
  settings: LabelSettings;
}

export default function LabelPreview({ image, loading, error, settings }: LabelPreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-700">
          <i className="fas fa-eye mr-2 text-green-600"></i>
          Preview da Etiqueta
        </h2>
      </div>
      <div className="p-4 flex items-center justify-center min-h-[400px] bg-gray-100">
        {loading && (
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            <span className="text-sm text-gray-500">Renderizando...</span>
          </div>
        )}
        {error && !loading && (
          <div className="text-center p-4">
            <i className="fas fa-exclamation-triangle text-red-500 text-3xl mb-2"></i>
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
        {!loading && !error && image && (
          <img
            src={image}
            alt="Preview da etiqueta ZPL"
            className="max-w-full max-h-[500px] border border-gray-300 shadow-lg"
          />
        )}
      </div>
    </div>
  );
}
