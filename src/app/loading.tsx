import { Spinner } from '@/shared/ui/spinner/spinner';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex items-center gap-4 animate-pulse">
        <Spinner className="size-10 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
        <Spinner className="size-16 text-purple-500 drop-shadow-[0_0_14px_rgba(139,92,246,0.8)] mt-4" />
        <Spinner className="size-12 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
      </div>
    </div>
  );
}
