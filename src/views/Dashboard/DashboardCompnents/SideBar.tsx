import { SideBarContainer, SideBarMainTitle, SideBarMinorTitle, SideBarCategory, SideBarCategoryTitle } from "../DashboardStyles/SideBar.styled"
import arrow from "../../../assets/dashboard-assets/inverted_caret.png"
import orangeArrow from "../../../assets/dashboard-assets/orange_inverted_caret.png"
import { filterCategoriesDummy } from "./dummyData"


const SideBar = () => {
  return (
    <SideBarContainer>
        <SideBarMainTitle>CATEGORIES</SideBarMainTitle>
        <SideBarMinorTitle>Filters</SideBarMinorTitle>
        {filterCategoriesDummy.map((category)=>{
            return(
                <>
                <SideBarCategoryTitle>
                    <h2 className="sidebar-category-filter-title">{category.filterName}</h2>
                    <div className="sidebar-filter-arrow"><img src={arrow}/></div>
                </SideBarCategoryTitle>

                <SideBarCategory>
                    <form>
                    {...category.filtergroups.map((group, index)=>{
                        return(
                            <> 
                            <input className="sidebar-filter-selection" type={category.inputType} 
                            name={group} id={index.toString()} value={group}/>
                            <label className="sidebar-filter-selection-label" htmlFor={group}>{group}</label> 
                            <br/>
                            </>
                            
                        )
                     })
                        
                     }

                    </form>
                    <div className="sidebar-filter-selection-show-more-continer">
                        <p className="sidebar-filter-selection-show-more-text">Show more</p>
                        <img className="sidebar-filter-selection-show-more-arrow" src={orangeArrow}/>
                    </div>
                     
                    
                     
                    
                </SideBarCategory>

                
                </>
               
            )
        })}
       
       
    </SideBarContainer>
  )
}

export default SideBar

