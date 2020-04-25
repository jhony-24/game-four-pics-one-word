import React from "react"
import Fade from "src/components/dom/Fade";
import CheckLogged from "src/hoc/CheckLogged"
import SEO from "src/components/atoms/SEO"

const Settings = () => {
    return (
        <SEO title="my settings" >
            <div className="settings">

            </div>
        </SEO>
    )
}

export default CheckLogged(Settings);