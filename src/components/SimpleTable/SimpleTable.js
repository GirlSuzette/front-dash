import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
}

let id = 0
function createData (name, number, reserved, data) {
  id += 1
  return { id, name, number, reserved, data }
}

const data = [
  createData('React', 136, 400, 304),
  createData('Html', 23, 168, 64),
  createData('Css', 86, 16, 8),
  createData('Nodejs', 90, 48, 8),
  createData('Material', 67, 80, 48)
]

function SimpleTable (props) {
  const { classes } = props

  return (
    <div className='contaTable'>
      <Typography variant='h4' gutterBottom component='h2'>
        Technology
      </Typography>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Technology</TableCell>
              <TableCell align='right'>Number</TableCell>
              <TableCell align='right'>Reserved Size (KB)</TableCell>
              <TableCell align='right'>Data Size (KB)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.id}>
                <TableCell component='th' scope='row'>
                  {n.name}
                </TableCell>
                <TableCell align='right'>{n.number}</TableCell>
                <TableCell align='right'>{n.reserved}</TableCell>
                <TableCell align='right'>{n.data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleTable)
