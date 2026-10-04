export interface LabelSettings {
  density: number;
  quality: 'grayscale' | 'bitonal';
  width: number;
  height: number;
  units: 'inches' | 'cm' | 'mm';
  rotation: number;
  index: number;
}

export const defaultZpl = `^XA

^FX Top section with logo, name and address.
^CF0,60
^FO50,50^GB100,100,100^FS
^FO75,75^FR^GB100,100,100^FS
^FO93,93^GB40,40,40^FS
^FO220,50^FDIntershipping, Inc.^FS
^CF0,30
^FO220,115^FD1000 Shipping Lane^FS
^FO220,155^FDShelbyville TN 38102^FS
^FO220,195^FDUnited States (USA)^FS
^FO50,250^GB700,3,3^FS

^FX Second section with recipient address and permit information.
^CFA,30
^FO50,300^FDJohn Doe^FS
^FO50,340^FD100 Main Street^FS
^FO50,380^FDSpringfield TN 39021^FS
^FO50,420^FDUnited States (USA)^FS
^CFA,15
^FO600,300^GB150,150,3^FS
^FO638,340^FDPermit^FS
^FO638,390^FD123456^FS
^FO50,500^GB700,3,3^FS

^FX Third section with barcode.
^BY5,2,270
^FO100,550^BC^FD12345678^FS

^FX Fourth section (the two boxes on the bottom).
^FO50,900^GB700,250,3^FS
^FO400,900^GB3,250,3^FS
^CF0,40
^FO100,960^FDCtr. X34B-1^FS
^FO100,1010^FDREF1 F00B47^FS
^FO100,1060^FDREF2 BL4H8^FS
^CF0,190
^FO470,955^FDCA^FS

^XZ`;

export const zplCommands: Record<string, string> = {
  '^XA': 'Inicio do formato da etiqueta.',
  '^XZ': 'Fim do formato da etiqueta.',
  '^FO': 'Field Origin - Posicao do campo.',
  '^FD': 'Field Data - Dados do campo.',
  '^CF': 'Change Font - Muda a fonte.',
  '^GB': 'Graphic Box - Desenha caixa/borda.',
  '^BC': 'Barcode 128.',
  '^BY': 'Bar Code Field Default.',
  '^FX': 'Field Comment - Comentario.',
  '^FS': 'Field Separator - Fim do campo.',
  '^FR': 'Field Reverse Image.',
  '^BQ': 'Bar Code QR.',
  '^B6': 'Barcode Code 39.',
  '^B8': 'Barcode EAN-13.',
  '^GE': 'Graphic Ellipse.',
  '^GD': 'Graphic Diagonal Line.',
  '^GS': 'Graphic Circle.',
  '^IM': 'Image Move.',
  '^DF': 'Download Format.',
  '^LH': 'Label Home.',
  '^PW': 'Print Width.',
  '^LL': 'Label Length.',
  '^CI': 'Change International Font.',
  '^A': 'Scalable/Bitmapped Font.',
};
