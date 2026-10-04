import { LabelSettings } from '../utils/constants';

interface ControlsProps {
  settings: LabelSettings;
  onSettingsChange: (settings: LabelSettings) => void;
  onRender: () => void;
  onDownload: (format: 'png' | 'pdf') => void;
  loading: boolean;
}

export default function Controls({
  settings,
  onSettingsChange,
  onRender,
  onDownload,
  loading,
}: ControlsProps) {
  const update = (partial: Partial<LabelSettings>) => {
    onSettingsChange({ ...settings, ...partial });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-gray-600">Densidade:</label>
          <select
            value={settings.density}
            onChange={(e) => update({ density: Number(e.target.value) })}
            className="text-sm border border-gray-300 rounded px-2 py-1.5"
          >
            <option value={6}>6 dpmm (152 dpi)</option>
            <option value={8}>8 dpmm (203 dpi)</option>
            <option value={12}>12 dpmm (300 dpi)</option>
            <option value={24}>24 dpmm (600 dpi)</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-gray-600">Tamanho:</label>
          <input
            type="number"
            value={settings.width}
            onChange={(e) => update({ width: Number(e.target.value) })}
            className="w-16 text-sm border border-gray-300 rounded px-2 py-1.5"
            min={0.5}
            step={0.5}
          />
          <span className="text-gray-400">×</span>
          <input
            type="number"
            value={settings.height}
            onChange={(e) => update({ height: Number(e.target.value) })}
            className="w-16 text-sm border border-gray-300 rounded px-2 py-1.5"
            min={0.5}
            step={0.5}
          />
          <select
            value={settings.units}
            onChange={(e) => update({ units: e.target.value as 'inches' | 'cm' | 'mm' })}
            className="text-sm border border-gray-300 rounded px-2 py-1.5"
          >
            <option value="inches">pol</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={onRender}
            disabled={loading}
            className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
          >
            <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-redo'}`}></i> Redesenhar
          </button>
          <button
            onClick={() => onDownload('png')}
            className="px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700"
          >
            <i className="fas fa-download"></i> PNG
          </button>
          <button
            onClick={() => onDownload('pdf')}
            className="px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            <i className="fas fa-file-pdf"></i> PDF
          </button>
        </div>
      </div>
    </div>
  );
}
