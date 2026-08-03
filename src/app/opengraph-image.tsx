import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'UniHunt, Study & Build Careers Abroad';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(135deg, #6D28D9 0%, #4C1D95 55%, #059669 130%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6D28D9', fontSize: 34, fontWeight: 800 }}>★</div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>UniHunt</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Study & build careers abroad
          </div>
          <div style={{ fontSize: 34, marginTop: 20, opacity: 0.9 }}>
            Dubai-first · UK · Germany, guided end to end
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
