import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { useEffect, useCallback, useState } from 'react'

export type GalleryImage = {
  src: string
  alt: string
}

type ImageGalleryProps = {
  images: GalleryImage[]
  projectTitle: string
}

function ProjectImage({ image, onClick }: { image: GalleryImage; onClick: () => void }) {
  const [error, setError] = useState(false)

  return (
    <button
      onClick={onClick}
      className="group relative aspect-video rounded-xl overflow-hidden border border-slate-800/50 bg-slate-900/50 hover:border-slate-700/50 transition-all hover:scale-[1.02]"
      aria-label={`Ver ${image.alt}`}
    >
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-600">
          <ImageIcon className="w-8 h-8" />
          <span className="text-xs">Imagen no disponible</span>
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onError={() => setError(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
    </button>
  )
}

export function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const closeModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!modalOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [modalOpen, closeModal, goNext, goPrev])

  if (images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
        {images.map((image, i) => (
          <ProjectImage key={i} image={image} onClick={() => openModal(i)} />
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${projectTitle}`}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 sm:-top-12 sm:right-0 p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous */}
            {images.length > 1 && (
              <button
                onClick={goPrev}
                className="absolute left-0 sm:-left-14 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Image */}
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />

            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={goNext}
                className="absolute right-0 sm:-right-14 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-slate-500">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
