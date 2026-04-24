export default function MapLocator() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Polling Locations</h2>
      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '1rem' }}>
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=Washington,DC&zoom=13&size=600x400&maptype=roadmap&markers=color:blue%7Clabel:P%7C38.8977,-77.0365&key=AIzaSyDPy5jb-sJFocm10pv2Zfj_D2Q0M4PgMvQ" 
             alt="Map Placeholder" 
             style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }} 
        />
        <h3>Find Your Polling Place</h3>
        <p style={{ color: 'var(--text-muted)' }}>Enter your address to find the nearest official voting center.</p>
        <div className="input-group" style={{ width: '100%' }}>
          <input className="input" placeholder="Search address..." style={{ flex: 1 }} />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
}
