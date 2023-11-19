import React, { useRef, useEffect, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { defaults as defaultInteractions } from 'ol/interaction';
import { fromLonLat } from 'ol/proj';

const ShopMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [dialogText, setDialogText] = useState<string>('');

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM({ attributions: [] }) })],
      view: new View({
        center: fromLonLat([-73.94287, 40.669021]),
        zoom: 10,
      }),
      overlays: [new Overlay({})],
      controls: [],
      interactions: defaultInteractions().extend([]),
    });

    const markers = [
      { position: [-73.7625, 40.7128], name: '196-35 Hiawatha Ave, Jamaica, NY 11423' },
      { position: [-74.1555, 40.5795], name: '75 Pierpont Pl, Staten Island, NY 10314' },
      { position: [-73.9857, 40.7488], name: '20 W 34th St. 27th Floor, New York, NY 10118' },
      { position: [-73.9772, 40.7527], name: '89 E 42nd St, New York, NY 10017' },
      { position: [-74.0133, 40.7131], name: '185 Greenwich St, New York, NY 10007' },
      { position: [-73.9969, 40.7061], name: '16th St, Brooklyn, NY 11215, United States' },
      { position: [-73.9698, 40.6802], name: 'Dean St, Brooklyn, NY 11238' },
      { position: [-73.9840, 40.5755], name: '1618 Mermaid Ave, Brooklyn, NY 11224' },
      { position: [-73.9535, 40.7081], name: '319 Hooper St, Brooklyn, NY 11211' },
      { position: [-73.8155, 40.7033], name: '138th St, Jamaica, NY 11435' },
    ];

    
    
    markers.forEach((marker) => {
      const overlay = new Overlay({
        position: fromLonLat(marker.position),
        element: createMarkerElement(),
      });

      map.addOverlay(overlay);

      overlay.getElement()?.addEventListener('click', () => {
        setDialogText(marker.name);
      });
    });

    return () => {
      map.setTarget('');
    };
  }, []);


   const createMarkerElement = () => {
    const markerElement = document.createElement('div');
    markerElement.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/503/503080.png" alt="Marker" width="20" height="20" />`;
    markerElement.style.position = 'relative';
    markerElement.style.left = '-16px';
    markerElement.style.top = '-32px';
    markerElement.style.cursor = 'pointer';
    return markerElement;
  };
  return (
    <div ref={mapRef} style={{ width: '100%', height: '400px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '5px', left: '200px', margin: '4px', display: dialogText ? 'block' : 'none' }}>
      </div>
      <div style={{ padding: '2px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {dialogText}
      </div>
    </div>
  );
};

export default ShopMap;
