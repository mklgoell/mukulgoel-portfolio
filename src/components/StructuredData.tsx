'use client';

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mukul Goel",
        "url": "https://mukulgoel.dev",
        "jobTitle": "Full-Stack & Mobile Engineer",
        "image": "https://mukulgoel.dev/icon.svg",
        "sameAs": [
            "https://github.com/mklgoell",
            "https://linkedin.com/in/mukul--goel/"
        ],
        "knowsAbout": [
            "Next.js",
            "React",
            "Flutter",
            "Dart",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Fintech Architecture",
            "Web3 Infrastructure",
            "Blockchain Protocols",
            "Automated Payment Recovery",
            "Smart Routing Engines"
        ],
        "description": "Mukul Goel is a Full-Stack and Mobile Engineer specializing in high-performance digital products, fintech rails, and decentralized protocols.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Engineering Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Full-Stack Web Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile Architecture & Development"
                    }
                }
            ]
        },
        "mainEntity": [
            {
                "@type": "SoftwareApplication",
                "name": "Moviq",
                "url": "https://moviq.in",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Automated payment recovery for Indian SMBs."
            },
            {
                "@type": "SoftwareApplication",
                "name": "KiwiPay",
                "url": "https://kiwipayment.com",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "Web",
                "description": "Smart Payment Routing Platform connecting to 500+ methods."
            },
            {
                "@type": "SoftwareApplication",
                "name": "LumeStream",
                "url": "https://lumestream.io",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web",
                "description": "Decentralized P2P streaming protocol."
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
