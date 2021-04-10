import React from 'react'
import {Helmet} from 'react-helmet'
import flex from "../../styles/flexboxgrid.min.css"

const Head = () => {
    return (
        <Helmet>
            {/* <link rel="stylesheet" href="../../styles/flexboxgrid.min.css" type="text/css"/> */}
            <link rel="stylesheet" href={flex} type="text/css"/>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" /> */}
        </Helmet>
    )
}

export default Head
