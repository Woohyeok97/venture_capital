'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type Content = (close: () => void) => React.ReactNode;

interface OverlayContextType {
  openOverlay: (content: Content) => void;
  closeOverlay?: () => void;
}

const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false); // 오버레이 오픈 여부
  const [content, setContent] = useState<Content | null>(null); // 오버레이로 렌더링할 컨텐츠
  const path = usePathname();
  const prevPath = useRef(path);

  // 오버레이 열기 핸들러
  const openOverlay = (content: Content) => {
    setIsOpen(true);
    setContent(() => content);
  };

  // 오버레이 닫기 핸들러
  const closeOverlay = () => {
    setIsOpen(false);
    setContent(null);
  };

  // 페이지 url 변경 시 오버레이 닫는 effect
  useEffect(() => {
    if (isOpen && prevPath.current !== path) {
      closeOverlay();
    }

    prevPath.current = path;
  }, [isOpen, path]);

  return (
    <OverlayContext.Provider value={{ openOverlay, closeOverlay }}>
      {children}
      {isOpen && content && (
        <div className="fixed inset-0 bg-black/50" onClick={closeOverlay}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#1e242e] p-6 min-w-xl border border-gray-700"
            onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
          >
            <div className="absolute top-5 right-5 p-1 cursor-pointer" onClick={closeOverlay}>
              X
            </div>
            {content(closeOverlay)}
          </div>
        </div>
      )}
    </OverlayContext.Provider>
  );
}

// 오버레이 컨텍스트 반환 커스텀 훅
export function useOverlay() {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
}
