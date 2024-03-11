
import { SearchBarContainer, SearchField, SortButton } from '../DashboardStyles/SearchBar.styled'
import { useState } from 'react'
import SortByModal from '../../SortByModal/SortByModal'

const SearchBar = () => {
  const [sortByModalVisibility, setSortByModalVisibility] = useState(false)

const toggleSetByModal = ()=>{
    setSortByModalVisibility(!sortByModalVisibility)
}


  return (
    <>
    <SearchBarContainer>
        {/*This should contain both the search input filed and the sortby button */}
        
            <SearchField type="text" placeholder='search for item...'/>
       
        <SortButton onClick={toggleSetByModal}>
            SORT BY:
        </SortButton>
        
    </SearchBarContainer>
    {sortByModalVisibility && <SortByModal/>}
    </>
  )
}

export default SearchBar
 

{/*
<input type="text" placeholder='search for item...'/>
*/}