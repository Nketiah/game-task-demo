import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const ActionButtons = (props) => {
     
const {getAll, getBig, getSmall, getOdd,  getEven, getClear} = props

  return (
    <Box>
       <Button onClick={getAll}>All</Button>
       <Button mx={4} onClick={getBig}>Big</Button>
       <Button mx={4} onClick={getSmall}>Small</Button>
       <Button mx={4} onClick={getOdd}>Odd</Button>
       <Button mx={4} onClick={getEven}>Even</Button>
       <Button mx={4} onClick={getClear}>Clear</Button>
    </Box>
  )
}

export default ActionButtons