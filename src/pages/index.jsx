import React from "react"
import ViewLogin from "src/views/ViewLogin"
import SEO from "src/components/atoms/SEO"


const Index = () => {
    return (
        <SEO title="welcome" >
            <div className="start">
                <ViewLogin />
            </div>
        </SEO>
    )
}


export default Index;