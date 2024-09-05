export function ProgressBar({ progress, color }: { progress: number; color: string }) {
    return (
      <div className="w-full bg-black bg-opacity-20 rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
      </div>
    )
  }