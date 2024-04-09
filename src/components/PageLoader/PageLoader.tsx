import Loader from "../Loader/Loader"
import { PageLoaderWholeContainer, PageLoaderContent, LoaderAndTextContainer } from "./PageLoader.Style"
//import Header from "../Header/Header"

const PageLoader = () => {
  return ( 
    <PageLoaderWholeContainer>
        <PageLoaderContent>
            <LoaderAndTextContainer>
            <p className="page-loader-text">Please wait</p>
            <div className="loader-container"><Loader/></div>
            </LoaderAndTextContainer>
        </PageLoaderContent>
    </PageLoaderWholeContainer>
  )
}

export default PageLoader