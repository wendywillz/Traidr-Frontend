
import { SearchBarContainer, SearchField, SortButton } from '../DashboardStyles/SearchBar.styled'

const SearchBar = () => {
  return (
    <SearchBarContainer>
        {/*This should contain both the search input filed and the sortby button */}
        
            <SearchField type="text" placeholder='search for item...'/>
       
        <SortButton>
            SORT BY:
        </SortButton>
        
    </SearchBarContainer>
  )
}

export default SearchBar
 

{/*
<input type="text" placeholder='search for item...'/>
*/}