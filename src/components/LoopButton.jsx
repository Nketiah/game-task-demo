import { Button } from '@chakra-ui/react'
import React from 'react'

const LoopButton = (props) => {

const {handleButtonClick, userSelected, element, isAll, isBig, isSmall, isOdd, isEven,} = props

  return (
    
    <Button
        onClick={(element)=> handleButtonClick(element)}
        bg='gray.200'
        rounded="full"
        shadow='sm'
        _hover={{ borderColor: 'purple.500', borderWidth: 7 }}
        p="-2"
        h={24}
        w={24}
        fontSize={35}
        size="lg"
        mx={2}
        className={`${
        userSelected.includes(element) ? "active" 
        : isAll ?   "active"
        : isBig ?   "active"
        : isSmall ? "active" 
        : isOdd ?   "active" 
        : isEven ?  "active" 
        : null
        }`}
        id='test'
        >{element}
     </Button> 

  )
}

export default LoopButton