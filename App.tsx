import { useState, useCallback, useRef, useEffect } from 'react';
import ZplEditor from './components/ZplEditor';
import LabelPreview from './components/LabelPreview';
import Controls from './components/Controls';
import AdBanner from './components/AdBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import SeoContent from './components/SeoContent';
import { LabelSettings, defaultZpl } from './utils/constants';

function App() {
  const [zpl, setZpl] = useState(defaultZpl);
  const [settings, setSettings] = useState<LabelSettings>({
    density: 8,
    quality: 'grayscale',
    width: 4,
    height: 6,
    units: 'inches',
    rotation: 0,
    index: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [labelImage, setLabelImage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const renderLabel = useCallback(async () => {
    if (!zpl.trim()) {
      setLabelImage(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { density, width, height, index, rotation } = settings;
      const url = `https://api.labelary.com/v1/printers/${density}dpmm/labels/${width}x${height}/${index}`;

      const headers: Record<string, string> = {
        'Accept': 'image/png',
      };

      if (rotation) {
        headers['X-Rotation'] = rotation.toString();
      }

      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: zpl,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Erro ${response.status}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      if (labelImage) {
        URL.revokeObjectURL(labelImage);
      }

      setLabelImage(imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao renderizar');
      setLabelImage(null);
    } finally {
      setLoading(false);
    }
  }, [zpl, settings]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      renderLabel();
    }, 800);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [renderLabel]);

  const handleDownload = async (format: 'png' | 'pdf') => {
    if (!zpl.trim()) return;

    try {
      const { density, width, height, index, rotation } = settings;
      const url = `https://api.labelary.com/v1/printers/${density}dpmm/labels/${width}x${height}/${index}`;

      const headers: Record<string, string> = {
        'Accept': format === 'png' ? 'image/png' : 'application/pdf',
      };

      if (rotation) {
        headers['X-Rotation'] = rotation.toString();
      }

      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: zpl,
      });

      if (!response.ok) throw new Error('Falha ao baixar');

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `label.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao baixar');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo principal
      </a>
      <Header />
      <AdBanner slot="top-banner" className="mx-auto my-2" />

      <main id="main-content" className="flex-1 container mx-auto px-4 py-4">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li><a href="/" className="hover:text-blue-600">Início</a></li>
            <li><i className="fas fa-chevron-right text-[8px]"></i></li>
            <li className="text-gray-700 font-medium">Visualizar ZPL Online</li>
          </ol>
        </nav>

        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            Visualizar ZPL Online Grátis - Editor de Etiquetas Zebra ZPL
          </h1>
          <p className="text-sm text-gray-600">
            <strong>Visualizar etiqueta ZPL</strong> em tempo real. Edite, visualize e converta etiquetas
            <strong> Zebra ZPL II</strong> para <strong>PNG</strong> e <strong>PDF</strong>.
            Suporta <strong>Code 128</strong>, <strong>QR Code</strong>, <strong>EAN-13</strong>.
            Grátis, sem instalação, funciona no celular.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="hidden xl:flex flex-col items-center gap-4 w-[160px] flex-shrink-0">
            <AdBanner slot="left-sidebar" className="sticky top-4" format="vertical" />
          </div>

          <div className="flex-1 min-w-0">
            <Controls
              settings={settings}
              onSettingsChange={setSettings}
              onRender={renderLabel}
              onDownload={handleDownload}
              loading={loading}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <ZplEditor zpl={zpl} onChange={setZpl} />
              <LabelPreview
                image={labelImage}
                loading={loading}
                error={error}
                settings={settings}
              />
            </div>

            <AdBanner slot="mid-content" className="mt-4" format="horizontal" />
            <SeoContent />
          </div>

          <div className="hidden xl:flex flex-col items-center gap-4 w-[160px] flex-shrink-0">
            <AdBanner slot="right-sidebar" className="sticky top-4" format="vertical" />
          </div>
        </div>
      </main>

      <AdBanner slot="bottom-banner" className="mx-auto my-2" />
      <Footer />
    </div>
  );
}

export default App;
