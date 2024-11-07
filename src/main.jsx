import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ShopKeeperApp from './ShopKeeper'
import Keyboard from './ShopKeeper/Keyboard'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Keyboard/>
   <ShopKeeperApp/>
  </StrictMode>,
)
