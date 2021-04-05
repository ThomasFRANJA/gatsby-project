import React from 'react'

const Meta = ({title}) => {
    return (
        <head>
            <meta name="title" content={title ? title : 'React Static Starter'}/>
            <meta name="description" content=""/>
            <meta itemProp="name" content=""/>
            <meta itemProp="url" content=""/>
            <meta itemProp="image" content=""/>
            <meta itemProp="thumbnailUrl" content=""/>
            <link rel="image_src" href=""/>

            <meta property="og:site_name" content=""/>
            <meta property="og:title" content=""/>
            <meta property="og:url" content=""/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content=""/>
            <meta property="og:image" content=""/>
            <meta property="og:image:width" content=""/>
            <meta property="og:image:height" content=""/>

            <meta name="twitter:title" content=""/>
            <meta name="twitter:image" content=""/>
            <meta name="twitter:url" content=""/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:description" content=""/>
        </head>
    )
}

export default Meta
