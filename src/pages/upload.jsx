import React, { lazy } from "react"
import CheckLogged from "src/hoc/CheckLogged"
import LazyLoad from "src/hoc/LazyLoad";
import Position from "src/components/dom/Position"
import Loading from "src/components/atoms/Loading"
import Fade from "src/components/dom/Fade"
import SEO from "src/components/atoms/SEO"


const ViewUploadWord = lazy(() => import("src/views/ViewUploadWord"))


const Upload = () => {
    return (
        <SEO title="Hey! upload new word to discover" >
            <div className="upload">
                <Fade>
                    <LazyLoad component={ViewUploadWord} loading={
                        <Position
                            position="fixed"
                            left="0px"
                            right="0px"
                            top="0px"
                            bottom="0px"
                            margin="0" >
                            <Loading />
                        </Position>
                    } />
                </Fade>
            </div>
        </SEO>
    )
}



// export default CheckLogged(Upload);
export default Upload;