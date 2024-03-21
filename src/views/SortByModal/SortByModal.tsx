import { ChangeEvent } from "react";
import { SortByModalContainer } from "./SortByModal.style"
interface Props{
  handleFilterChange :(event: ChangeEvent<HTMLInputElement>)=>void;
}

const SortByModal = ({handleFilterChange}: Props) => {
  return (
    <SortByModalContainer >

        <div className="sort-by-filter">
          <input className="sort-by-filter-input" id="highestRatedInput" type="radio" name="sort" value={""} onChange={handleFilterChange} hidden/>
          <label className="sort-by-filter-label" htmlFor="highestRatedInput">Highest-rated</label>
        </div>

        <div className="sort-by-filter">
          <input className="sort-by-filter-input" id="mostRecentInput" type="radio" name="sort" value={"most-recent"} onChange={handleFilterChange} hidden/>
          <label className="sort-by-filter-label" htmlFor="mostRecentInput">Most-recent</label>
        </div>

        <div className="sort-by-filter">
          <input className="sort-by-filter-input" id="mostRelevantInput" type="radio" name="sort" value={""} onChange={handleFilterChange} hidden/>
          <label className="sort-by-filter-label" htmlFor="mostRelevantInput">Most-relevant</label>
        </div>

        <div className="sort-by-filter">
          <input className="sort-by-filter-input" id="highInput" type="radio" name="sort" value={"high"} onChange={handleFilterChange} hidden/>
          <label className="sort-by-filter-label" htmlFor="highInput">High</label>
        </div>

        <div className="sort-by-filter">
          <input className="sort-by-filter-input" id="lowInput" type="radio" name="sort" value={"low"} onChange={handleFilterChange} hidden/>
          <label className="sort-by-filter-label" htmlFor="lowInput">Low</label>
        </div>
        
    </SortByModalContainer>
  )
}

export default SortByModal

/*
const SortByModal = ({ascendSort, descendSort, originalOrder}: Props) => {
  return (
<SortByModalContainer >
      
        <div className="sort-by-filter" onClick={originalOrder}>Relevant</div>
        <div className="sort-by-filter">Highest-rated</div>
        <div className="sort-by-filter">Most-recent</div>
        <div className="sort-by-filter">Most-relevant</div>
        <div className="sort-by-filter" onClick={descendSort}>High</div>
        <div className="sort-by-filter" onClick={ascendSort}>Low</div>
    </SortByModalContainer>
    )
  }
 */

    /*
     */