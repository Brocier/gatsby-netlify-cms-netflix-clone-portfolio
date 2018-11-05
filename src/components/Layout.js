import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import favicon from "../../static/img/icons/favicon.ico";

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="Projects | Josh's Portfolio"
      link={[{
        rel: 'shortcut icon',
        type: 'image/png',
        href: `${favicon}`
      }
    ]}/>
    <Navbar/>
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
