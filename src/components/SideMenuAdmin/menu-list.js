import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'

import path from '../../constants/paths'

const listlink = [
  {
    id: 1,
    label: 'Orders',
    link: path.Orders,
    icon: LocalMallOutlinedIcon
  },
  {
    id: 2,
    label: 'Products',
    link: path.Products,
    icon: StorefrontOutlinedIcon
  },
  {
    id: 3,
    label: 'New Product',
    link: path.NewProduct,
    icon: AddShoppingCartRoundedIcon
  },
  {
    id: 4,
    label: 'New Category',
    link: path.NewCatgeory,
    icon: PlaylistAddCheckCircleOutlinedIcon
  }
]

export default listlink
