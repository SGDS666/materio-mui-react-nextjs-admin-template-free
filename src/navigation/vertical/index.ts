// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: '数据面板',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: '账户设置',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: '登录',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: '注册',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: '错误页',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: '用户界面'
    },
    {
      title: '排版',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: '图标',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: '卡片',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: '表格',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: '表单布局',
      path: '/form-layouts'
    }
  ]
}

export default navigation
