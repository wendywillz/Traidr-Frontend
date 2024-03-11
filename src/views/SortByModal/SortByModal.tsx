import { SortByModalContainer } from "./SortByModal.style"

const SortByModal = () => {
  return (
    <SortByModalContainer>
        <div className="sort-by-filter">Highest-rated</div>
        <div className="sort-by-filter">Most-recent</div>
        <div className="sort-by-filter">Most-relevant</div>
        <div className="sort-by-filter">High</div>
        <div className="sort-by-filter">Low</div>
    </SortByModalContainer>
  )
}

export default SortByModal