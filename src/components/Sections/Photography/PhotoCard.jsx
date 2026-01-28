// const ratioMap = {
//   "4/5": "aspect-[4/5] row-span-20",
//   "9/16": "aspect-[9/16] row-span-28",
//   "16/9": "aspect-[16/9] row-span-14",
// };

// export default function PhotoCard({ src, alt, ratio }) {
//   return (
//     <div
//       className={`
//         relative 
//         overflow-hidden 
//         rounded-2xl 
//         bg-zinc-900
//         ${ratioMap[ratio]}
//       `}
//     >
//       <img
//         src={src}
//         alt={alt}
//         loading="lazy"
//         decoding="async"
//         className="
//           absolute inset-0 
//           w-full h-full 
//           object-cover 
//           transition-transform duration-700 ease-out
//           hover:scale-[1.03]
//         "
//       />
//     </div>
//   );
// }
