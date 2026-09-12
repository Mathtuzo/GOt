import L from 'leaflet';

export function getTileCode(x: number, y: number, z: number): string {
  let c = Math.pow(2, z);
  let d = x;
  let e = y;
  let f = 't';
  for (let g = 0; g < z; g++) {
    c = c / 2;
    if (e < c) {
      if (d < c) {
        f += 'q';
      } else {
        f += 'r';
        d -= c;
      }
    } else {
      if (d < c) {
        f += 't';
        e -= c;
      } else {
        f += 's';
        d -= c;
        e -= c;
      }
    }
  }
  return f;
}

export type TileStyle = 'fsm' | 'nat' | 'direct';

export class QuartermaesterTileLayer extends L.TileLayer {
  private layerStyle: TileStyle;

  constructor(style: TileStyle = 'fsm', options?: L.TileLayerOptions) {
    super('https://quartermaester.info/tiles/{z}/{x}/{y}.png', {
      minZoom: 1,
      maxZoom: 6,
      maxNativeZoom: 5,
      noWrap: true,
      attribution: 'Carte par theMountainGoat / Quartermaester.info',
      ...options
    });
    this.layerStyle = style;
  }

  setStyle(style: TileStyle) {
    this.layerStyle = style;
    this.redraw();
  }

  getTileUrl(coords: L.Coords): string {
    const { x, y, z } = coords;
    const tileRange = 1 << z;
    if (x < 0 || x >= tileRange || y < 0 || y >= tileRange) {
      return '';
    }

    if (this.layerStyle === 'direct') {
      return `https://quartermaester.info/tiles/${z}/${x}/${y}.png`;
    }

    const keyhole = getTileCode(x, y, z);
    const folder = this.layerStyle === 'nat' ? 'nat' : 'fsm';
    return `https://quartermaester.info/${folder}/${keyhole}.jpg`;
  }
}
