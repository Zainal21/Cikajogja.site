export default function SectionTitle(props) {
   return (
      <div className="mx-4 flex flex-wrap">
         <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
               <span className="mb-2 block text-lg font-semibold text-warning">
                  {props.titleHint}
               </span>
               <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  {props.titleMain}
               </h2>
               <p className="text-base text-body-color">
                  {props.titleDescription}
               </p>
            </div>
         </div>
      </div>
   )
}