import { Spinner } from '@/shared/ui/spinner/spinner';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center h-screen">
      <div className="flex gap-4">
        <Spinner className="size-12 text-purple-300" />
        <Spinner className="size-12 text-purple-500" />
        <Spinner className="size-12 text-purple-300" />
      </div>
    </div>
  );
}
