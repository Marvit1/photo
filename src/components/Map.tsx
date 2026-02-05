 import { useEffect, useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Studio location (Abovyan 35, Kentron, Yerevan) — coordinates from Nominatim OpenStreetMap
const STUDIO_LOCATION: [number, number] = [40.188124, 44.5235725];

export default function Map() {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: STUDIO_LOCATION,
      zoom: 17,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 40px;
          height: 40px;
          background: hsl(35 80% 50%);
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <span style="transform: rotate(45deg); font-size: 16px;">📷</span>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const popupHtml = `<div style="text-align: center; padding: 8px;"><strong>${t.hero.studio}</strong><br/><a href="${t.contact.addressLink ?? '#'}" target="_blank" rel="noopener noreferrer">${t.contact.addressValue.replace(/\n/g, '<br/>')}</a></div>`;

    // Add marker
    const marker = L.marker(STUDIO_LOCATION, { icon: customIcon })
      .addTo(map)
      .bindPopup(popupHtml)
      .openPopup();

    markerRef.current = marker;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      markerRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Update popup content when translations change
    if (markerRef.current) {
      const popupContent = `<div style="text-align: center; padding: 8px;"><strong>${t.hero.studio}</strong><br/><a href="${t.contact.addressLink ?? '#'}" target="_blank" rel="noopener noreferrer">${t.contact.addressValue.replace(/\n/g, '<br/>')}</a></div>`;
      markerRef.current.bindPopup(popupContent);
    }
  }, [t]);
   return (
     <div
       ref={mapRef}
       className="w-full h-full min-h-[400px] rounded bg-muted"
       style={{ zIndex: 0 }}
     />
   );
 }