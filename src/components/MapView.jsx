import { useEffect, useRef, useState } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

maplibregl.setWorkerUrl(workerUrl)

export default function MapView({ onLocationSelect }) {
  const mapContainer = useRef(null)
  const mapRef = useRef(null)
  const markerRef = useRef(null)
  const [coords, setCoords] = useState(null)
  const [mapError, setMapError] = useState(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // NOTE: Offline Map Requirement
    // Currently loading from an external URL (demotiles.maplibre.org).
    // For the final offline demo, this must be switched to a local style.
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [70, 30], // Approximate center of Pakistan
      zoom: 3,
    })

    mapRef.current = map
    map.addControl(new maplibregl.NavigationControl(), 'top-right')

    // Handle map loading errors
    map.on('error', (e) => {
      console.error('Map error:', e)
      setMapError('Map could not load fully. Check your internet connection.')
    })

    // Handle click event to drop a pin
    map.on('click', (e) => {
      const { lng, lat } = e.lngLat
      
      // Remove existing marker if present
      if (markerRef.current) markerRef.current.remove()

      // Add new marker
      markerRef.current = new maplibregl.Marker({ color: '#dc2626' })
        .setLngLat([lng, lat])
        .addTo(map)

      setCoords({ lng, lat })
      
      // Notify parent component
      if (onLocationSelect) {
        onLocationSelect({ lng, lat })
      }
    })

    return () => map.remove()
  }, [onLocationSelect])

  return (
    <div className="space-y-2">
      <div 
        ref={mapContainer} 
        className="w-full h-80 rounded-lg border border-gray-300 bg-gray-200" 
      />
      
      {coords ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-2 rounded text-sm font-medium">
          ✅ Location selected: Latitude {coords.lat.toFixed(4)}, Longitude {coords.lng.toFixed(4)}
        </div>
      ) : (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 p-2 rounded text-sm">
          👆 Click anywhere on the map to drop a pin and select your farm location.
        </div>
      )}

      {mapError && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-2 rounded text-sm">
          ⚠️ {mapError}
        </div>
      )}
    </div>
  )
}