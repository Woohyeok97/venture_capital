interface GuideQuestionHeaderProps {
  children: React.ReactNode;
}
export function GuideQuestionHeader({ children }: GuideQuestionHeaderProps) {
  return (
    <div className="flex items-center gap-2 font-bold text-lg cursor-pointer">
      <span className="text-purple-400">Q</span>
      {children}
    </div>
  );
}
