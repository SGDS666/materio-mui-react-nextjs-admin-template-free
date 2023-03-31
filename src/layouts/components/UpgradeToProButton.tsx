// ** React Import
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { usePopper } from 'react-popper'

const BuyNowButton = () => {
  // ** States
  const [open, setOpen] = useState<boolean>(false)
  const [popperElement, setPopperElement] = useState(null)
  const [referenceElement, setReferenceElement] = useState(null)

  const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
    placement: 'top-end'
  })

  const handleOpen = () => {
    setOpen(true)
    update ? update() : null
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      className='upgrade-to-pro-button mui-fixed'
      sx={{ right: theme => theme.spacing(20), bottom: theme => theme.spacing(10), zIndex: 11, position: 'fixed' }}
    >
      <Button
        component='button'

        variant='contained'
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        ref={(e: any) => setReferenceElement(e)}

        sx={{
          backgroundColor: '#ff3e1d',
          boxShadow: '0 1px 20px 1px #ff3e1d',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#e6381a'
          }
        }}
      >
        升级SVIP
      </Button>
      <Fade in={open} timeout={700}>
        <Box
          style={styles.popper}
          ref={setPopperElement}
          {...attributes.popper}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          sx={{ pb: 4, minWidth: theme => (theme.breakpoints.down('sm') ? 400 : 300) }}
        >
          <Paper elevation={9} sx={{ borderRadius: 1, overflow: 'hidden' }}>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://themeselection.com/products/materio-mui-react-nextjs-admin-template/'
            >
              <img width='100%' alt='materio-pro-banner' src='/images/misc/materio-pro-banner.png' />
            </a>
            <CardContent>
              <Typography sx={{ mb: 4 }} variant='h6'>
                SVIP 就是随心所欲
              </Typography>
              <Typography sx={{ mb: 4 }} variant='body2'>
                我觉得你骨骼惊奇 快来开通一个SVIP 感受一下土豪的快乐吧
              </Typography>
              <Typography sx={{ mb: 4 }} variant='body2'>
                点击下面的按钮 开始享受特权吧
              </Typography>
              <Button
                component='button'
                sx={{ mr: 4 }}

                variant='contained'

              >
                感受一下
              </Button>
              <Button
                component="button"

                variant='outlined'

              >
                深入感受
              </Button>
            </CardContent>
          </Paper>
        </Box>
      </Fade>
    </Box>
  )
}

export default BuyNowButton
