// // "use client";

// // import { forwardRef } from "react";
// // import { CVData } from "../cv-builder/types";

// // const CVPreview = forwardRef<HTMLDivElement, { data: CVData }>(
// //   ({ data }, ref) => {
// //     const skills = data.skills
// //       ? data.skills.split(",").map((s) => s.trim())
// //       : [];

// //     return (
// //       <div
// //         ref={ref}
// //         className="w-full max-w-[750px] bg-white shadow-xl rounded-xl overflow-hidden"
// //         style={{ color: "#111827" }}
// //       >
// //         {/* HEADER */}
// //         <div className="bg-slate-900 text-white p-8">
// //           <h1 className="text-3xl font-bold tracking-tight">
// //             {data.fullName || "Your Name"}
// //           </h1>
// //           <p className="text-sm text-slate-300 mt-1">
// //             {data.email || "your@email.com"}
// //           </p>
// //         </div>

// //         {/* BODY */}
// //         <div className="p-8 space-y-8">

// //           {/* SKILLS */}
// //           <section>
// //             <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
// //               Skills
// //             </h2>

// //             <div className="flex flex-wrap gap-2">
// //               {skills.length > 0 ? (
// //                 skills.map((skill, i) => (
// //                   <span
// //                     key={i}
// //                     className="px-3 py-1 text-sm bg-slate-100 rounded-full border"
// //                   >
// //                     {skill}
// //                   </span>
// //                 ))
// //               ) : (
// //                 <span className="text-sm text-gray-400">
// //                   Your skills will appear here
// //                 </span>
// //               )}
// //             </div>
// //           </section>

// //           {/* EXPERIENCE */}
// //           <section>
// //             <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
// //               Experience
// //             </h2>

// //             <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
// //               {data.experience ||
// //                 "Your experience will appear here..."}
// //             </p>
// //           </section>

// //         </div>
// //       </div>
// //     );
// //   }
// // );

// // export default CVPreview;

// "use client";

// import { forwardRef } from "react";
// import { CVData } from "../cv-builder/types";

// import ModernBlueCV from "../templates/ModernBlueCV";
// import ModernCV from "../templates/ModernBlueCV";
// import ModernLightCV from "../templates/ModernLightCV";

// import MinimalCleanCV from "../templates/MinimalCleanCV";
// import MinimalElegantCV from "../templates/MinimalElegantCV";

// import ProfessionalSidebarCV from "../templates/ProfessionalSidebarCV";
// import ProfessionalClassicCV from "../templates/ProfessionalClassicCV";

// interface Props {
//   data: CVData;
//   template: string;
// }

// const CVPreview = forwardRef<HTMLDivElement, Props>(
//   ({ data, template }, ref) => {
//     switch (template) {

//       // MODERN VARIANTS
//       case "modern-blue":
//         return <ModernBlueCV ref={ref} data={data} />;

//       case "modern-dark":
//         return <ModernDarkCV ref={ref} data={data} />;

//       case "modern-light":
//         return <ModernLightCV ref={ref} data={data} />;

//       // MINIMAL VARIANTS
//       case "minimal-clean":
//         return <MinimalCleanCV ref={ref} data={data} />;

//       case "minimal-elegant":
//         return <MinimalElegantCV ref={ref} data={data} />;

//       // PROFESSIONAL VARIANTS
//       case "professional-sidebar":
//         return <ProfessionalSidebarCV ref={ref} data={data} />;

//       case "professional-classic":
//         return <ProfessionalClassicCV ref={ref} data={data} />;

//       // DEFAULT
//       default:
//         return <ModernBlueCV ref={ref} data={data} />;
//     }
//   }
// );

// CVPreview.displayName = "CVPreview";

// export default CVPreview;
// //     if (template === "modern-blue") {
// //   return <ModernCV data={data} ref={ref} />;
// // }

// // if (template === "modern-dark") {
// //   return <ModernDarkCV data={data} ref={ref} />;
// // }
// //   }
// // );
//   })
// // ✅ FIX (required for build)
// CVPreview.displayName = "CVPreview";

// export default CVPreview;