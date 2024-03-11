import { SortByModalContainer } from "./SortByModal.style"
interface Props{
  ascendSort: ()=>void;
  descendSort: ()=>void;
originalOrder: ()=> void;
}

const SortByModal = ({ascendSort, descendSort, originalOrder}: Props) => {
  return (
    <SortByModalContainer>
        <div className="sort-by-filter" onClick={originalOrder}>Relevant</div>
        <div className="sort-by-filter">Highest-rated</div>
        <div className="sort-by-filter">Most-recent</div>
        <div className="sort-by-filter">Most-relevant</div>
        <div className="sort-by-filter" onClick={descendSort}>High</div>
        <div className="sort-by-filter" onClick={ascendSort}>Low</div>
    </SortByModalContainer>
  )
}

export default SortByModal