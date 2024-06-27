import React from 'react'
import { Helmet } from 'react-helmet'
const MetaData = ({ titles }) => {
    return (
        <>
            <Helmet >
                <title>{titles}</title>
            </Helmet>
        </>
    )
}

export default MetaData
