import {
  SideBarContainer,
  SideBarMainTitle,
  SideBarMinorTitle,
  SideBarCategory,
  SideBarCategoryTitle,
  SidebarResetButton
} from "../DashboardStyles/SideBar.styled";
import arrow from "../../../../assets/dashboard-assets/inverted_caret.png";
// import orangeArrow from "../../../../assets/dashboard-assets/orange_inverted_caret.png";
import { fetchProductsCategories, fetchProductsColors } from "../../../../api/product";
import { ChangeEvent, useEffect, useState } from "react";

//Prop declaration:
interface Props {
  handleFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleReset: (event:any)=>void;
}

const SideBar = ({ handleFilterChange, handleReset }: Props) => {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([])
  const [dealsVisibility, setDealsVisibility] = useState<boolean>(true)
  const [colorsVisibility, setColorsVisibility]= useState<boolean>(true)
  const [priceVisibility, setPriceVisibility]= useState<boolean>(true)
const toggleDealsVisibility = ()=>{
  setDealsVisibility(!dealsVisibility)
}
const toggleColorsVisibility = ()=>{
  setColorsVisibility(!colorsVisibility)
}
const togglePriceVisibility = ()=>{
  setPriceVisibility(!priceVisibility)
}


  // fetching shop categories
  useEffect(() => {
    fetchProductsCategories().then((res) => {
      setCategories(res);
    });
    
    fetchProductsColors().then((res)=>{
      setColors(res)
    })

  }, []);
  return (
    <SideBarContainer>
      <SideBarMainTitle>CATEGORIES</SideBarMainTitle>
      <SideBarMinorTitle>Filters</SideBarMinorTitle>

      <SideBarCategory>
        {/* Deals title */}
        <SideBarCategoryTitle>
          <h2 className="sidebar-category-filter-title">Deals</h2>
          <div className="sidebar-filter-arrow">
            <img src={arrow} onClick={toggleDealsVisibility}/>
          </div>
        </SideBarCategoryTitle>
        <form>
          {dealsVisibility && categories.map((category: string, index: number) => {
            return (
              <fieldset key={index}>
                <input
                  className="sidebar-filter-selection"
                  type="radio"
                  name={`category`}
                  id={index.toString()}
                  value={category}
                  onChange={handleFilterChange}
                />
                <label className="sidebar-filter-selection-label">
                {category===""? `None`: category}
                </label>
              </fieldset>
            );
          })}
          {/* <div className="sidebar-filter-selection-show-more-continer">
            <p className="sidebar-filter-selection-show-more-text">Show more</p>
            <img
              className="sidebar-filter-selection-show-more-arrow"
              src={orangeArrow}
            />
          </div> */}
          {/* Price secetion */}
          <SideBarCategoryTitle>
            <h2 className="sidebar-category-filter-title">Price</h2>
            <div className="sidebar-filter-arrow">
              <img src={arrow} onClick={togglePriceVisibility} />
            </div>
          </SideBarCategoryTitle>
          {priceVisibility &&
          <fieldset>
            <input
              className="sidebar-price-range"
              type="number"
              name="minPrice"
              placeholder="min"
              onChange={handleFilterChange}
            />
            <span className="sidebar-price-separator"> - </span>

            <input
              className="sidebar-price-range"
              type="number"
              name="maxPrice"
              placeholder="max"
              onChange={handleFilterChange}
            />
          </fieldset>}
          {/* <div className="sidebar-filter-selection-show-more-continer">
            <p className="sidebar-filter-selection-show-more-text">Show more</p>
            <img
              className="sidebar-filter-selection-show-more-arrow"
              src={orangeArrow}
            />
          </div> */}
          {/* colour filter */}
          <SideBarCategoryTitle>
            <h2 className="sidebar-category-filter-title">Colour</h2>
            <div className="sidebar-filter-arrow">
              <img src={arrow} onClick={toggleColorsVisibility}/>
            </div>
          </SideBarCategoryTitle>
          
          {colorsVisibility && colors.map((color: string, index: number) => {
            return (
              <fieldset key={index}>
                <input
                  className="sidebar-filter-selection"
                  type="radio"
                  name={`color`}
                  id={index.toString()}
                  value={color}
                  onChange={handleFilterChange}
                />
                <label className="sidebar-filter-selection-label">
                  {color===""? `None`: color}
                </label>
              </fieldset>
            );
          })}
          <fieldset>
            <input className="sidebar-filter-selection" id="colorInput" type="text" name={`color`} onChange={handleFilterChange} placeholder="Enter Color"/>
          </fieldset>
          {/* <div className="sidebar-filter-selection-show-more-continer">
            <p className="sidebar-filter-selection-show-more-text">Show more</p>
            <img
              className="sidebar-filter-selection-show-more-arrow"
              src={orangeArrow}
            />
          </div> */}
          <SidebarResetButton onClick={handleReset}>RESET</SidebarResetButton>
        </form>
      </SideBarCategory>
    </SideBarContainer>
  );
};

export default SideBar;

/*
DELETED ELEMENTS:
 <fieldset>
            <input
              className="sidebar-filter-selection"
              type="radio"
              value={"less than 25000"}
              name="price"
            />
            <label className="sidebar-filter-selection-label">
              Less than ₦25,000
            </label>
          </fieldset>
          <fieldset>
            <input
              className="sidebar-filter-selection"
              type="radio"
              value={"15000 - 25000"}
              name="price"
            />
            <label className="sidebar-filter-selection-label">
              Less than ₦25,000
            </label>
          </fieldset>



*/
