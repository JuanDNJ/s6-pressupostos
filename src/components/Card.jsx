import { useStore } from "../hooks/useStore";

const Card = ({children, type}) => {

    const {pages, addPage, removePage, } = useStore();

    const handlerAddPage = () => {
        addPage()
        // console.log(pages)
    }
    const handlerRemovePage = () => {
        removePage()
        // console.log(pages)
    }
   
    return (
        <article className="md:min-h-56 grid grid-cols-3 bg-stone-200 rounded-md overflow-hidden">
            {children}
           { type && <footer className="col-span-3 grid grid-cols-6 justify-end ">
              <article className="col-start-3 md:col-start-5 col-end-7 flex items-center gap-2 ">
                <small className="flex-1 p-2 text-right">
                  Nombre de pàgines
                </small>
                <div className="grid grid-cols-3 items-center justify-between p-2">
                  <button onClick={handlerAddPage} className="text-center bg-blue-300 rounded-full size-8">
                    +
                  </button>
                  <span className="text-center ">{pages}</span>
                  <button onClick={handlerRemovePage} className="text-center bg-red-300 rounded-full size-8">
                    -
                  </button>
                </div>
              </article>
              <article className="col-start-2 md:col-start-3 col-end-7 flex items-center  gap-2">
                <small className="flex-1 p-2 justify-end text-right">
                  Nombre de llenguatges
                </small>
                <div className="grid grid-cols-3 items-center justify-between p-2">
                  <button className="text-center bg-blue-300 rounded-full size-8">
                    +
                  </button>
                  <span className="text-center">0</span>
                  <button className="text-center bg-red-300 rounded-full size-8">
                    -
                  </button>
                </div>
              </article>
            </footer>}
        </article>
    )
}
 export default Card;