// import { useMemo } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    Text,
  } from '@chakra-ui/react'
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useRef, useState } from 'react'
  const center = { lat: 41.0423904497029,lng: 29.004673812622478 }
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const Home = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     libraries: ["places"],
//   });
//   const center = useMemo(
//     () => ({ lat: 41.0423904497029, lng: 29.004673812622478 }),
//     []
//   );
//   const options = useMemo(
//     () => ({
//       disableDefault: true,
//       clickableIcons: false,
//     }),
//     []
//   );
//   if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <GoogleMap
//       zoom={10}
//       center={center}
//       mapContainerStyle={{ width: "100%", height: "100vh" }}
//       options={options}
//     >
//       <Marker position={{ lat: 41.0423904497029, lng: 29.004673812622478 }} />
//     </GoogleMap>
//   );
// };

// export default Home;


const Home = () => {
  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      bgColor='blue.200'
      bgImage='https://images.unsplash.com/photo-1647117181799-0ac3e50a548a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      bgPos='bottom'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'></Box>

      <Box
        p={4}
        borderRadius='lg'
        mt={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='modal'
      >
        <HStack spacing={4}>
          <Input type='text' placeholder='Origin' />
          <Input type='text' placeholder='Destination' />
          <ButtonGroup>
            <Button colorScheme='pink' type='submit'>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={() => alert(123)}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: </Text>
          <Text>Duration: </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => alert(123)}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default Home
