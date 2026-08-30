import * as React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface LightboxImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LightboxProps {
  images: LightboxImage[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function Lightbox({ images, isOpen, onClose, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" && !isFirst) setCurrentIndex(currentIndex - 1);
    if (e.key === "ArrowRight" && !isLast) setCurrentIndex(currentIndex + 1);
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex items-center justify-center outline-none"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center group outline-none">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[60] w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors flex items-center justify-center backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {!isFirst && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(currentIndex - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors flex items-center justify-center backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            <figure className="relative w-full h-full flex items-center justify-center p-4 md:p-16" onClick={onClose}>
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain mx-auto shadow-2xl"
              />
              {images.length > 1 && (
                <figcaption className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-white text-sm font-semibold bg-black/60 backdrop-blur-md pointer-events-none">
                  {currentIndex + 1} / {images.length}
                </figcaption>
              )}
            </figure>

            {!isLast && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(currentIndex + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors flex items-center justify-center backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}