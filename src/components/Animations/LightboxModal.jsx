import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LightboxModal({
  images,
  activeIndex,
  onClose,
  setActiveIndex,
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (activeIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* BACKDROP */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* MODAL */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
          className="relative z-10 max-w-[80vw] max-h-[50vh]"
        >
          {/* IMAGE */}
          <img
            src={images[activeIndex].src}
            alt=""
            className="max-h-[70vh] max-w-[80vw] object-contain rounded-xl"
          />

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-zinc-300 hover:text-white"
          >
            <X size={24} />
          </button>

          {/* PREV */}
          {activeIndex > 0 && (
            <button
              onClick={() => setActiveIndex(activeIndex - 1)}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-zinc-300 hover:text-white"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* NEXT */}
          {activeIndex < images.length - 1 && (
            <button
              onClick={() => setActiveIndex(activeIndex + 1)}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-zinc-300 hover:text-white"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
