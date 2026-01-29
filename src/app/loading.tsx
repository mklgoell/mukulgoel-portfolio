export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-8">
                {/* Modern Loader */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-t-2 border-l-2 border-accent rounded-full animate-spin" />
                    <div className="absolute inset-2 border-r-2 border-b-2 border-slate-700 rounded-full animate-spin-reverse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Text Scramble Effect Placeholder (Static for simplicity/performance in loading state) */}
                <div className="text-xs font-mono text-accent tracking-[0.3em] uppercase animate-pulse">
                    Initializing...
                </div>
            </div>
        </div>
    );
}
