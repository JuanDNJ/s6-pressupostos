const Card = ({children}) => {
    return (
        <article className="md:min-h-56 grid grid-cols-3 bg-stone-200 rounded-md overflow-hidden">
            {children}
        </article>
    )
}
 export default Card;