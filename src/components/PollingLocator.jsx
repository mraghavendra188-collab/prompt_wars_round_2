import { useEffect, useRef } from 'react'
import styles from './PollingLocator.module.css'

export function PollingLocator() {
  const mapRef = useRef(null)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  useEffect(() => {
    if (window.google) { initMap(); return }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    script.async = true
    script.onload = initMap
    document.head.appendChild(script)
  }, [apiKey])

  function initMap() {
    if (!mapRef.current) return
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 38.9072, lng: -77.0369 },
      zoom: 12,
    })
    const input = document.getElementById('polling-search-input')
    const searchBox = new window.google.maps.places.SearchBox(input)
    map.addListener('bounds_changed', () => searchBox.setBounds(map.getBounds()))
    searchBox.addListener('places_changed', () => {
      searchBox.getPlaces().forEach(place => {
        if (!place.geometry) return
        new window.google.maps.Marker({
          map,
          position: place.geometry.location,
          title: place.name,
        })
        if (place.geometry.viewport) map.fitBounds(place.geometry.viewport)
      })
    })
  }

  return (
    <section aria-label="Find your polling place" className={styles.container}>
      <label htmlFor="polling-search-input" className="sr-only">
        Search for your polling place by address
      </label>
      <input
        id="polling-search-input"
        type="text"
        placeholder="Enter your address to find polling places..."
        className={styles.searchInput}
        aria-label="Address search for polling places"
      />
      <div
        ref={mapRef}
        className={styles.map}
        role="img"
        aria-label="Interactive map showing polling locations"
      />
    </section>
  )
}

export default PollingLocator
