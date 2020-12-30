import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  listContainer: {
    overflowY: 'scroll',
    height: 500
  },
  gridItem: {
    height: '100%'
  },
  selected: {
    background: 'green'
  }
}))
