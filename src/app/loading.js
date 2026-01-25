export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] bg-white/10 dark:bg-black/80 backdrop-blur-md flex flex-col items-center justify-center">
            <div className="relative">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-text-main mb-2 animate-pulse">
                    AxoraKitchens
                </h1>
                <div className="h-0.5 w-full bg-bg-secondary rounded-full overflow-hidden">
                    <div
                        className="h-full bg-text-main animate-[loading_1s_ease-in-out_infinite]"
                        style={{
                            width: '100%',
                            animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
