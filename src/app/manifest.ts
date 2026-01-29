import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Mukul Goel | Full-Stack & Mobile Engineer',
        short_name: 'Mukul Goel',
        description: 'Bespoke digital experiences crafted with precision and speed.',
        start_url: '/',
        display: 'standalone',
        background_color: '#020617',
        theme_color: '#020617',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
