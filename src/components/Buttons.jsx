import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ActionButtons from './ActionButtons'
import LoopButton from './LoopButton'

const Buttons = (props) => {
  
  //const {arrayOfNumbers} = props


  const[userSelected, setUserSelected] = useState([])
  const[arrayOfNumbers, setArrayOfNumbers] = useState([0,1,2,3,4,5,6,7,8,9])
  const[isEven, setEven] = useState(false)
  const[isOdd, setOdd] = useState(false)
  const[isSmall, setSmall] = useState(false)
  const[isBig, setBig] = useState(false)
  const[isAll, setAll] = useState(false)
  const[data, setData] = useState([1,2])
  const oddNums  = []
  const evenNums = []
 

  const handleButtonClick = (element) => {

    const numberOnButton = Number(element.currentTarget.innerText)
    if(userSelected.includes(numberOnButton)){
      setUserSelected(userSelected.filter((element) => element !== numberOnButton))
      element.currentTarget.classList.remove('active')
    }else{
      setUserSelected((prev)=> [...prev, numberOnButton])
      element.currentTarget.classList.add('active')
    }
    
  }

   userSelected.sort((a, b) => a - b);
   console.log("User selected", userSelected)

  
 
   const getEven = () =>{
    arrayOfNumbers.forEach(element => {
      return element % 2 === 0 ? evenNums.push(element) : null
    })

    setEven(true)
    setUserSelected([...evenNums])
    setEven(false)
   }



  const getOdd = () =>{
    arrayOfNumbers.forEach(element => {
      return element % 2 !== 0 ? oddNums.push(element) : null
    })
    
    setOdd(true)
    setUserSelected([...oddNums])
    setOdd(false)
  }


  const getSmall = () => {
    setSmall(true)
    setUserSelected([...arrayOfNumbers.slice(0, 5)])
    setSmall(false)
  }

  const getBig = () => {
    setBig(true)
    setUserSelected([...arrayOfNumbers.slice(5)])
    setBig(false)
  }
  

  const getAll = () => {
    setAll(true)
    setUserSelected([...arrayOfNumbers])
    setAll(false)
  }

  const getClear = () => {
    setUserSelected([])
  }

   
  return (
    <Box bg='gray.50'  shadow="lg" display="flex" alignItems="center" justifyContent="center">
     {
      arrayOfNumbers.map((element, index)=> 
       <Box py={50} key={index}>
         <LoopButton
         handleButtonClick={handleButtonClick}
         userSelected={userSelected}
         element={element}
         isAll={isAll}
         isBig={isBig}
         isSmall={isSmall}
         isOdd={isOdd}
         isEven={isEven}
          />
       </Box>
      )
     }
     <ActionButtons
        getAll={getAll}
        getBig={getBig}
        getSmall={getSmall}
        getOdd={getOdd}
        getEven={getEven}
        getClear={getClear}
    />
    </Box>
  )
}

export default Buttons