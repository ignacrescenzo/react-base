import React from 'react'
import MUIDataTable from 'mui-datatables'

function MuiTable (props) {
  const { data, columns, title } = props

  const options = {
    filterType: 'multiselect',
    tableBodyMaxHeight: '55vh'
  }

  return (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  )
}

export default MuiTable
