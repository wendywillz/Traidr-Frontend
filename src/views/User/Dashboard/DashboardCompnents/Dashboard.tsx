import {
  DashboardMain,
  DashboardContainer,
  DashBoardTitle,
  DasboardPageButtonContainer,
  DashboardChangePageButton,
} from "../DashboardStyles/Dashboard.styled";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import Header from "../../../../components/Header/Header";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect, ChangeEvent } from "react";
import { shopProductsInterface } from "../../../../interfaces/shopInterfaces";
import { QueryParams } from "../../../../interfaces/queryInterfaces";
import { fetchAllProducts, fetchProductCount } from "../../../../api/product";
import { AllProductsContainer } from "../DashboardStyles/Product.styled";
import AllProductsCard from "../../../../components/ProductsCard/AllProductsCard";
//import { useSelector } from "react-redux";
// import { RootState } from "../../../../app/store";

const Dashboard = () => {
  // const { shopId } = useParams();
  //Constants declarations
  //const currentUserId:string|null = useSelector((state: RootState)=> state.user.userId)
  const [displayedProducts, setDisplayedProducts] =
    useState<shopProductsInterface[]>();
  const [queryParams, setQueryParams] = useState<QueryParams>({
    category: "",
    search: "",
    sort: "",
    price: "",
    maxPrice: "",
    minPrice: "",
    page: "1",
    pageSize: "9",
  });
  const [totalPages, setTotalPages] = useState<number>(1);
  // const productsPerPage = 9;

  //{category, search, sort, price, maxPrice, minPrice}
  useEffect(() => {
    fetchAllProducts(
      queryParams.category,
      queryParams.search,
      queryParams.sort,
      queryParams.price,
      queryParams.maxPrice,
      queryParams.minPrice,
      queryParams.page,
      queryParams.pageSize
    ).then((res) => {
      if (res) {
        setDisplayedProducts(res);
        // if(!displayedProducts){return}
        // setTotalPages(Math.ceil(displayedProducts.length))
      }
    });

    fetchProductCount().then((res) => {
      if (res) {
        setTotalPages(Math.ceil(res.totalProductCount / 9));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  //CATEGORY FILTERING
  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.value as string;
    setQueryParams({ ...queryParams, [event.target.name]: selectedCategory });
  };

  const nextPage = () => {
    setQueryParams({
      ...queryParams,
      page: (+queryParams.page + 1).toString(),
    });
  };
  const previousPage = () => {
    if (+queryParams.page > 1) {
      setQueryParams({
        ...queryParams,
        page: (+queryParams.page - 1).toString(),
      });
    }
  };

  return (
    <>
      <Header />
      <DashboardContainer>
        <SideBar handleFilterChange={handleFilterChange} />
        <DashboardMain>
          <SearchBar handleFilterChange={handleFilterChange} />

          <DashBoardTitle>TRENDING SALES </DashBoardTitle>
          <AllProductsContainer>
            {displayedProducts &&
              displayedProducts.map((product) => {
                return (
                  <AllProductsCard product={product} key={product.productId} />
                );
              })}
          </AllProductsContainer>
          <DasboardPageButtonContainer>
            <DashboardChangePageButton
              onClick={previousPage}
              disabled={+queryParams.page === 1}
              className="prev-button"
            >
              <BsChevronLeft
                size={20}
                className="dashboard-page-previous-button"
              />
            </DashboardChangePageButton>

            <span className="dashboard-current-page-text">
              Page {+queryParams.page} of {totalPages}
            </span>

            <DashboardChangePageButton
              onClick={nextPage}
              disabled={+queryParams.page === totalPages}
              className="next-button"
            >
              <BsChevronRight
                size={20}
                className="dashboard-page-next-button"
              />
            </DashboardChangePageButton>
          </DasboardPageButtonContainer>
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
