"use client"
import { useRouter } from "next/navigation";


const Pagination = ({page,count}: {page:number; count:number}) => {
  const router = useRouter();

  const hasPrev = 5 * (page - 1) > 0;
  const hasNext = 5 * (page - 1) + 5 < count;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
       onClick={() => changePage(page-1)}
        disabled = {!hasPrev}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">

        {
          Array.from({length:Math.ceil(count/5)},
          (_,index) => {
            const pageIndex = index+1;
            return(

              <button  onClick={() => {
                  changePage(pageIndex);
                }} className={`px-2 rounded-sm ${page === pageIndex ? 'bg-[#C3EBFA]':""}`}>{pageIndex}</button>

            )
          }
        )
        }

        
      </div>
      <button onClick={() => changePage(page+1)} disabled={!hasNext} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        
        Next
      </button>
    </div>
  );
};

export default Pagination;