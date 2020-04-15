import React, { lazy } from "react"
import FloatingButton from "src/components/atoms/FloatingButton"
import { IoIosAdd } from "react-icons/io"
import LazyLoad from 'src/hoc/LazyLoad';
import LoadingPlaceholder from "src/components/molecules/LoadingPlaceholder"
import Fade from "src/components/dom/Fade";
import CheckLogged from "src/hoc/CheckLogged"
import { navigate } from "gatsby";
import SEO from "src/components/atoms/SEO"


const AllWords = lazy(() => import("src/containers/AllWords"))




const List = () => {
    return (
        <SEO title="all words" >
            <div className="list">
                <Fade>
                    <LazyLoad component={AllWords} loading={<LoadingPlaceholder repeat={20} />} />
                </Fade>
                <FloatingButton onClick={() => navigate("/upload")} ><IoIosAdd size={30} /></FloatingButton>
            </div>
        </SEO>
    )
}



// export default CheckLogged(List);
export default List;