import React from "react"
import FloatingButton from "src/components/atoms/FloatingButton"
import { IoIosAdd } from "react-icons/io"
import Fade from "src/components/dom/Fade";
import CheckLogged from "src/components/hoc/CheckLogged"
import { navigate } from "gatsby";
import SEO from "src/components/atoms/SEO"
import ViewList from "src/views/ViewList";

const List = () => {
    return (
        <SEO title="all words" >
            <div className="list">
                <Fade>
                    <ViewList/>
                </Fade>
                <FloatingButton onClick={() => navigate("/upload")} ><IoIosAdd size={30} /></FloatingButton>
            </div>
        </SEO>
    )
}

export default CheckLogged(List);