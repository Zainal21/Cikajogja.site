import Image from 'next/image'
export default function ProjectCard(props) {
   return (
      <div className="w-full px-4 md:w-1/2 xl:w-1/3">
         <div className="relative mb-12">
            <div className="overflow-hidden rounded-lg">
               <Image src={props.image} alt="portfolio" className="w-full" />
            </div>
            <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg">
               <span className="mb-2 block text-sm font-semibold text-warning">
                  {props.category}
               </span>
               <h3 className="mb-4 text-xl font-bold text-dark">
                  {props.name}
               </h3>
            </div>
         </div>
      </div>
   )
}