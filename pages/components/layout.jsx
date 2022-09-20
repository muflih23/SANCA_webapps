import { Search2Icon } from '@chakra-ui/icons'
import { Flex, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'

function Layout({children}) {
  return (
    <Flex 
    w={'100vw'} 
    minH={'100vh'} 
    flexDir={'column'}
    backgroundImage={'/clearBlueSky.jpg'}
    backgroundSize={'cover'}
    overflowX={'hidden'}>
        <Flex w={'100%'}>
            <Flex 
            w={'100%'} 
            py={'1rem'} 
            px={'1rem'} 
            flexDir={['column', 'column', 'row']}
            backgroundColor={'transparent'} 
            rowGap={['1rem', '1rem', '0']}
            justifyContent={['center', 'center', 'space-between']} 
            alignItems={'center'}>
                <Flex w={'100px'}>
                    <Image src='/logo.png'/>
                </Flex>
                <Flex w={'300px'}>
                    <form>
                        <InputGroup>
                            <InputLeftElement children={<Search2Icon color={'white'}/>}/>
                            <Input 
                            type={'text'} 
                            variant={'outline'}
                            focusBorderColor={'white'}
                            bg={'transparent'}
                            borderWidth={'2px'}
                            borderColor={'white'}
                            color={'white'} 
                            placeholder={'Cari kota, provinsi, atau negara'}
                            _placeholder={{color : 'white'}}/>
                        </InputGroup>
                    </form>
                </Flex>
            </Flex>
        </Flex>
        <Flex w={'100%'} h={'100%'}>
            <main>{children}</main>
        </Flex>
    </Flex>
  )
}

export default Layout