import { useEffect, useRef } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

// MapLibre v6 ke liye worker URL zaroori hai
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

// Worker ko set karo taake map load ho sake
maplibregl.setWorkerUrl(workerUrl)

export default function MapView() {
  const mapContainer = useRef(null)

  useEffect(() => {
    // Agar container nahi mila to wapis jao
    if (!mapContainer.current) return

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [70, 30], // Pakistan kecoordinates
      zoom: 3,
    })

    // Cleanup: Component hatne par map remove karo
    return () => map.remove()
  }, [])

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-80 rounded-lg border border-gray-300 bg-gray-200" 
    />
  )
}