import { useState, useRef } from 'react';

interface ZplEditorProps {
  zpl: string;
  onChange: (value: string) => void;
}

export default function ZplEditor({ zpl, onChange }: ZplEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-700">
          <i className="fas fa-code mr-2 text-blue-600"></i>
          Editor ZPL
        </h2>
        <button
          onClick={() => onChange('')}
          className="text-xs px-2 py-1 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded"
        >
          <i className="fas fa-trash-alt mr-1"></i> Limpar
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={zpl}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[500px] p-4 font-mono text-sm bg-gray-900 text-green-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        spellCheck={false}
        placeholder="Digite seu código ZPL aqui..."
      />
    </div>
  );
}
