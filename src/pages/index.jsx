import React from "react"
import ViewLogin from "src/views/ViewLogin"
import SEO from "src/components/atoms/SEO"
import useIndexed from "src/use/useIndexedUser"
import { useEffect } from "react"

const Index = () => {
    const { types, defineAction } = useIndexed();
    return (
        <SEO title="welcome" >
            <div className="start">
                <button onClick={()=>defineAction(types.REMOVE)("music")}>ok</button>
                <ViewLogin />
            </div>
        </SEO>
    )
}

export default Index;