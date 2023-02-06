import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import { ui } from './Sample'

const AllRows = () => {


const[allSelections, setAllSelections] = useState([])
const[arrayOfNumbers, setArrayOfNumbers] = useState([0,1,2,3,4,5,6,7,8,9])
const[templates, setTemplates] = useState([<Buttons/>, <Buttons/>])

const num1 = 0.36598
const num2 = 10
const num3 = num1  * num2


  return (
    <Box>
      <Buttons
       arrayOfNumbers={arrayOfNumbers}
       />
      {/* {Math.round(num3 * 1000)/ 1000} */}
         {/* <Buttons
          arrayOfNumbers={arrayOfNumbers}
          allSelections={allSelections}
          setAllSelections={setAllSelections}
          />

         <Buttons
          arrayOfNumbers={arrayOfNumbers}
          allSelections={allSelections}
          setAllSelections={setAllSelections}
          /> */}
     
    </Box>
  )

}

export default AllRows