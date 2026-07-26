import * as React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogOverlay } from "./dialog";

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
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft" && !isFirst) setCurrentIndex(currentIndex - 1);
    if (e.key === "ArrowRight" && !isLast) setCurrentIndex(currentIndex + 1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/95" onClick={onClose} />
      <DialogContent
        className="max-w-none p-0 bg-transparent shadow-none"
        onKeyDown={handleKeyDown}
        style={{ maxWidth: "95vw", maxHeight: "95vh" }}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFirst && (
          <button
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <figure className="relative">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            style={{ width: currentImage.width ? "auto" : undefined }}
          />
          <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white text-center bg-gradient-to-t from-black/70 to-transparent">
            {currentIndex + 1} / {images.length}
          </figcaption>
        </figure>

        {!isLast && (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
}