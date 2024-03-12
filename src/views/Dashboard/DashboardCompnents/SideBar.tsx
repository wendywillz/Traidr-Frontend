import {
  SideBarContainer,
  SideBarMainTitle,
  SideBarMinorTitle,
  SideBarCategory,
  SideBarCategoryTitle,
} from "../DashboardStyles/SideBar.styled";
import arrow from "../../../assets/dashboard-assets/inverted_caret.png";
import orangeArrow from "../../../assets/dashboard-assets/orange_inverted_caret.png";
import { fetchProductsCategories } from "../../../api/product";
import { useEffect, useState } from "react";
const SideBar = () => {
  const [categories, setCategories] = useState([]);

  // fetching shop categories
  useEffect(() => {
    fetchProductsCategories().then((res) => {
      setCategories(res);
    });
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
            <img src={arrow} />
          </div>
        </SideBarCategoryTitle>
        <form>
          {categories.map((category: string, index: number) => {
            return (
              <>
                <fieldset>
                  <input
                    className="sidebar-filter-selection"
                    type="checkbox"
                    name={category}
                    id={index.toString()}
                    value={category}
                  />
                  <label className="sidebar-filter-selection-label">
                    {category}
                  </label>
                </fieldset>
              </>
            );
          })}
          <div className="sidebar-filter-selection-show-more-continer">
            <p className="sidebar-filter-selection-show-more-text">Show more</p>
            <img
              className="sidebar-filter-selection-show-more-arrow"
              src={orangeArrow}
            />
          </div>
          {/* Price secetion */}
          <SideBarCategoryTitle>
            <h2 className="sidebar-category-filter-title">Price</h2>
            <div className="sidebar-filter-arrow">
              <img src={arrow} />
            </div>
          </SideBarCategoryTitle>

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
          <div className="sidebar-filter-selection-show-more-continer">
            <p className="sidebar-filter-selection-show-more-text">Show more</p>
            <img
              className="sidebar-filter-selection-show-more-arrow"
              src={orangeArrow}
            />
          </div>
          {/* colour filter */}
          <SideBarCategoryTitle>
            <h2 className="sidebar-category-filter-title">Colour</h2>
            <div className="sidebar-filter-arrow">
              <img src={arrow} />
            </div>
          </SideBarCategoryTitle>

          <fieldset>
            <input
              className="sidebar-filter-selection"
              type="radio"
              value={"green"}
              name="colour"
            />
            <label className="sidebar-filter-selection-label">Green</label>
          </fieldset>
          <fieldset>
            <input
              className="sidebar-filter-selection"
              type="radio"
              value={"blue"}
              name="colour"
            />
            <label className="sidebar-filter-selection-label">Blue</label>
          </fieldset>
          <fieldset>
            <input
              className="sidebar-filter-selection"
              type="radio"
              value={"red"}
              name="colour"
            />
            <label className="sidebar-filter-selection-label">Red</label>
          </fieldset>
          <fieldset>
            <input
              className="sidebar-filter-selection"
              type="radio"
              value={"orange"}
              name="colour"
            />
            <label className="sidebar-filter-selection-label">Orange</label>
          </fieldset>
          <fieldset>
            <input
              className="sidebar-filter-selection"
              type="radio"
              value={"yellow"}
              name="colour"
            />
            <label className="sidebar-filter-selection-label">Yellow</label>
          </fieldset>
          <div className="sidebar-filter-selection-show-more-continer">
            <p className="sidebar-filter-selection-show-more-text">Show more</p>
            <img
              className="sidebar-filter-selection-show-more-arrow"
              src={orangeArrow}
            />
          </div>
        </form>
      </SideBarCategory>
    </SideBarContainer>
  );
};

export default SideBar;
