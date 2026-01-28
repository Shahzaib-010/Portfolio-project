// export default function PhotoMasonry({ images }) {
//   return (
//     <div
//       className="
//         columns-1
//         sm:columns-2
//         lg:columns-3
//         xl:columns-4
//         gap-3
//       "
//     >
//       {images.map((img, i) => (
//         <img
//           key={i}
//           src={img.src}
//           alt={img.alt}
//           loading="lazy"
//           decoding="async"
//           className="
//             w-full
//             mb-3
//             rounded-xl
//             object-cover
//             transition-transform duration-500 ease-out
//             hover:scale-[1.01]
            
//           "
//         />
//       ))}
//     </div>
//   );
// }



import { useInView } from "../../Animations/useInView";

export default function PhotoMasonry({ images, onImageClick }) {
  
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
      {images.map((img, i) => {
        const [ref, visible] = useInView();

        return (
          <img
            key={i}
            ref={ref}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(i)}
            
            className={`
             
              w-full mb-3 rounded-xl cursor-zoom-in object-cover
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          />
        );
      })}
    </div>
  );
}

