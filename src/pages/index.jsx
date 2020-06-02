import React from "react"
import ViewLogin from "src/views/ViewLogin"
import SEO from "src/components/atoms/SEO"
import ShowViewNotLogged from "src/components/hoc/ShowViewNotLogged"

const Index = () => {
    return (
        <SEO title="welcome" >
            <div className="start">
                <ViewLogin />
            </div>
        </SEO>
    )
}

export default ShowViewNotLogged(Index);