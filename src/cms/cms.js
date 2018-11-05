import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProjectPostPreview from './preview-templates/ProjectPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('project', ProjectPostPreview)
