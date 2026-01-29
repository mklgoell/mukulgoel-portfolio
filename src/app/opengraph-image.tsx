import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Mukul Goel | Full-Stack & Mobile Engineer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: '#020617',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'serif',
                    position: 'relative',
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        opacity: 0.1,
                    }}
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            background: '#fbbf24',
                            boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
                        }}
                    />
                    <div style={{ fontSize: 40, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'sans-serif', color: '#94a3b8' }}>
                        Architecting Next-Gen
                    </div>
                </div>

                <div style={{ marginTop: 40, fontStyle: 'italic', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span>Mukul Goel</span>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        fontSize: 32,
                        fontFamily: 'sans-serif',
                        color: '#fbbf24',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        borderBottom: '2px solid rgba(251, 191, 36, 0.3)',
                        paddingBottom: 10,
                    }}
                >
                    mukulgoel.dev
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
