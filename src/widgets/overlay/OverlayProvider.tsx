'use client';
import { createContext, useContext, useEffect, useState } from 'react';
// components

type Content = (close: () => void) => void;

interface OverlayContextType {
  openOverlay: (content: Content) => void;
  closeOverlay?: () => void;
}

const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<Content | null>(null);

  const openOverlay = (content: Content) => {
    setIsOpen(true);
    setContent(() => content);
  };

  const closeOverlay = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <OverlayContext.Provider value={{ openOverlay, closeOverlay }}>
      {children}
      {isOpen && content && (
        <div className="fixed inset-0 bg-black/50" onClick={closeOverlay}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#1e242e] p-6 min-w-xl"
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

export function useOverlay() {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }

  // useEffect(() => {
  //   return () => {
  //     console.log('unmount!');
  //   };
  // });
  return context;
}

// 'use client';
// import { createContext, useContext, useState } from 'react';
// // components
// import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/shared/ui/dialog/dialog';

// type Content = (close: () => void) => void;

// interface OverlayContextType {
//   openOverlay: (content: Content) => void;
//   closeOverlay?: () => void;
// }

// const OverlayContext = createContext<OverlayContextType | null>(null);

// export function OverlayProvider({ children }: { children: React.ReactNode }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [content, setContent] = useState<Content | null>(null);

//   const openOverlay = (content: Content) => {
//     setIsOpen(true);
//     setContent(() => content);
//   };

//   const closeOverlay = () => {
//     setIsOpen(false);
//     setContent(null);
//   };
//   // console.log(isOpen, content);
//   return (
//     <OverlayContext.Provider value={{ openOverlay, closeOverlay }}>
//       {children}
//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogOverlay />
//         <DialogContent aria-describedby={undefined} className="border border-[#303946]">
//           <DialogTitle className="h-0" />
//           {content && content(closeOverlay)}
//         </DialogContent>
//       </Dialog>
//     </OverlayContext.Provider>
//   );
// }

// export function useOverlay() {
//   const context = useContext(OverlayContext);
//   if (!context) {
//     throw new Error('useOverlay must be used within an OverlayProvider');
//   }
//   return context;
// }
