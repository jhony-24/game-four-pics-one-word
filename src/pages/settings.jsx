import React from "react"
import Fade from "src/components/dom/Fade";
import CheckLogged from "src/hoc/CheckLogged"
import SEO from "src/components/atoms/SEO"
import ViewSettings from "src/views/ViewSettings";

const Settings = () => {
    return (
        <SEO title="my settings" >
            <div className="settings">
                <Fade type="in">
                    <ViewSettings />
                </Fade>
            </div>
        </SEO>
    )
}

export default Settings;