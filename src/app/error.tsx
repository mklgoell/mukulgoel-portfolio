'use client';

import { useEffect } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-[#020617] flex items-center justify-center px-6 relative overflow-hidden text-center">
            <div className="noise-overlay" />
            <div className="relative z-10 space-y-8">
                <div>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 italic">
                        Protocol <span className="text-red-500">Inteference</span>
                    </h2>
                    <p className="text-slate-400 font-sans tracking-widest max-w-md mx-auto leading-relaxed">
                        An unexpected anomaly was detected in the neural link.
                        The system has halted to prevent data corruption.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                    <Magnetic>
                        <button
                            onClick={reset}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
                        >
                            <RefreshCw size={14} className="animate-spin-once" />
                            Retry Handshake
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <a
                            href="/"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-slate-800 text-slate-400 hover:text-white font-bold uppercase tracking-widest text-xs hover:border-slate-600 transition-colors"
                        >
                            <ArrowLeft size={14} />
                            Return to Base
                        </a>
                    </Magnetic>
                </div>

                <div className="pt-12 text-[10px] font-mono text-slate-800 uppercase tracking-widest">
                    Error_Digest: {error.digest || 'UNKNOWN_ANOMALY'}
                </div>
            </div>
        </main>
    );
}
