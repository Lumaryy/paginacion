import React from 'react'

const Paginacion = ({productsPorPage, totalProducts,currentPage, setCurrentPage}) => {
 
    const pagesNumbers= []

    console.log()

    for (let i = 1; i<=Math.ceil(totalProducts /productsPorPage); i++){
        pagesNumbers.push(i)
    }
 
    const onPreviusPage = () => {
        setCurrentPage(currentPage -1)
    }
    const onNextPage = () => {
        setCurrentPage(currentPage +1)
    }
    const onSpecificPage = (n) => {
    console.log(n)
        setCurrentPage(n)
    }
    

    return (
                <nav 
                className="pagination is-centered mb " 
                role="navigation" 
                aria-label="pagination"
                >
                    <a  className={`pagination-previous ${currentPage == 1 ? 'is-desabled' : ''}`} onClick={onPreviusPage}>anterior</a>
                    <a className={`pagination-next ${currentPage >= pagesNumbers.length ? 'is-desabled' : ''}`} onClick={onNextPage}>siguiente</a>
                    <ul className="pagination-list">
                       
                        {
                            pagesNumbers.map(noPage =>(
                                <li key={noPage}>
                                <a  className={`pagination-link ${
                                    noPage === currentPage ? 'is-current' : '' }`}
                                    onClick={()=> onSpecificPage(noPage)}>
                                    {noPage}
                                </a>
                            </li>
                            ))
                        }
                    </ul>
            </nav>
  )
}
export default Paginacion