import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/layout'
import { TiWeatherSunny, TiWeatherDownpour } from 'react-icons/ti'
import { WiHumidity, WiStrongWind } from 'react-icons/wi'
import { RiTempHotLine } from 'react-icons/ri'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout>
      <Flex 
      w={'100%'}
      mx={'1rem'} my={'1rem'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
        <Flex
        pt={'1rem'}
        flexDir={'column'}
        alignItems={'center'} justifyContent={'center'}>
          <Text fontWeight={'500'} fontSize={['1rem', '1rem', '1.5rem']} color={'white'}>Bogor, Jawa Barat, Indonesia</Text>
          <Flex py={'0.5rem'}></Flex>
          <Text fontWeight={'400'} fontSize={['1rem', '1rem', '1.5rem']} color={'white'}>Senin, 20 September 2022</Text>
          <Text fontWeight={'400'} fontSize={['1rem', '1rem', '1.5rem']} color={'white'}>Pada pukul 13.00</Text>
          <Text fontWeight={'700'} fontSize={['2rem', '2rem', '3rem']} color={'white'}>23&deg;C</Text>
          <Text fontWeight={'500'} fontSize={['1.5rem', '1.5rem', '1.5rem']} color={'white'}><Icon as={TiWeatherDownpour}/> Hujan</Text>
          <Flex columnGap={'2rem'}>
            <Text fontWeight={'500'} fontSize={['1.5rem', '1.5rem', '1.5rem']} color={'white'}><Icon as={WiHumidity}/> 67 %</Text>
            <Text fontWeight={'500'} fontSize={['1.5rem', '1.5rem', '1.5rem']} color={'white'}><Icon as={WiStrongWind}/> 15 Km/h</Text>
          </Flex>
        </Flex>
        <Flex
        pt={'2rem'}
        flexDir={'column'}
        w={'100%'}
        alignItems={'center'} justifyContent={'center'} rowGap={'0.5rem'}>
          <Text pb={'0.5rem'} fontWeight={'600'} fontSize={'18px'} color={'white'}>Perkiraan Cuaca per Jam</Text>
          <Accordion allowToggle w={'100%'} maxW={'800px'}>
            <AccordionItem borderWidth={0}>
                <AccordionButton color={'white'} backgroundColor={'rgba(255,255,255,0.05)'} backdropFilter={'blur(20px)'}>
                  <Box flex={'1'} textAlign={'left'}>
                    <Flex columnGap={'10px'}>
                      <Icon as={TiWeatherDownpour} w={[5,5,6,6]} h={[5,5,6,6]}/> <Text fontSize={['16px', '16px', '20px']}>14.00</Text> <Text fontSize={['16px', '16px', '20px']}>Hujan</Text>
                    </Flex>
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
                <AccordionPanel pb={'1rem'} color={'white'} backgroundColor={'rgba(255,255,255,0.05)'} backdropFilter={'blur(20px)'}>
                  <Flex justifyContent={['center', 'center', 'space-between']} alignItems={'center'} w={'100%'} columnGap={'10px'}>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={RiTempHotLine} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Temperatur</Text>
                      <Text>21&deg;C</Text>
                    </Flex>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={WiHumidity} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Kelembapan</Text>
                      <Text>70%</Text>
                    </Flex>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={WiStrongWind} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Angin</Text>
                      <Text>12 Km/h</Text>
                    </Flex>
                  </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem borderWidth={0}>
                <AccordionButton color={'white'} backgroundColor={'rgba(255,255,255,0.05)'} backdropFilter={'blur(20px)'}>
                  <Box flex={'1'} textAlign={'left'}>
                    <Flex columnGap={'10px'}>
                      <Icon as={TiWeatherDownpour} w={[5,5,6,6]} h={[5,5,6,6]}/> <Text fontSize={['16px', '16px', '20px']}>14.00</Text> <Text fontSize={['16px', '16px', '20px']}>Hujan</Text>
                    </Flex>
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
                <AccordionPanel pb={'1rem'} color={'white'} backgroundColor={'rgba(255,255,255,0.05)'} backdropFilter={'blur(20px)'}>
                  <Flex justifyContent={['center', 'center', 'space-between']} alignItems={'center'} w={'100%'} columnGap={'10px'}>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={RiTempHotLine} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Temperatur</Text>
                      <Text>21&deg;C</Text>
                    </Flex>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={WiHumidity} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Kelembapan</Text>
                      <Text>70%</Text>
                    </Flex>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={WiStrongWind} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Angin</Text>
                      <Text>12 Km/h</Text>
                    </Flex>
                  </Flex>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem borderWidth={0}>
                <AccordionButton color={'white'} backgroundColor={'rgba(255,255,255,0.05)'} backdropFilter={'blur(20px)'}>
                  <Box flex={'1'} textAlign={'left'}>
                    <Flex columnGap={'10px'}>
                      <Icon as={TiWeatherDownpour} w={[5,5,6,6]} h={[5,5,6,6]}/> <Text fontSize={['16px', '16px', '20px']}>14.00</Text> <Text fontSize={['16px', '16px', '20px']}>Hujan</Text>
                    </Flex>
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
                <AccordionPanel pb={'1rem'} color={'white'} backgroundColor={'rgba(255,255,255,0.05)'} backdropFilter={'blur(20px)'}>
                  <Flex justifyContent={['center', 'center', 'space-between']} alignItems={'center'} w={'100%'} columnGap={'10px'}>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={RiTempHotLine} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Temperatur</Text>
                      <Text>21&deg;C</Text>
                    </Flex>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={WiHumidity} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Kelembapan</Text>
                      <Text>70%</Text>
                    </Flex>
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                      <Icon as={WiStrongWind} w={[5,5,6,6]} h={[5,5,6,6]}/>
                      <Text>Angin</Text>
                      <Text>12 Km/h</Text>
                    </Flex>
                  </Flex>
                </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </Layout>
  )
}
