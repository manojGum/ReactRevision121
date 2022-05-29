import React, { useEffect, useState } from 'react'
import { Box,Center,Heading,Image,SimpleGrid,Skeleton,SkeletonCircle,SkeletonText,Stack,Text, VStack } from '@chakra-ui/react'
import axios from 'axios';

const Github = () => {
    const [loading, setLoading]=useState(false);
    const [error,setErorr]=useState(false);
    const [data,setData]=useState([]);
    useEffect(()=>{
        setLoading(true);
        axios({
            url: "https://api.github.com/search/users",
            method:"GET",
            params:{
                q: "masai",
                page: 1,
                per_page: 5
            }
        })
        // .then((res)=>{
        //     console.log(res);
        //     setData(res.data.item);
        //     setLoading(false);
        // })
        .then(res=>{
            setData(res.data.items);
            setLoading(false);
          })
        .catch((err)=>{
            setLoading(false);
            setErorr(true);
        });
    },[]);
    console.log(data);
  return (
    <Box>
        {loading?(
    <Box padding='6' boxShadow='lg' bg='white'>
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' />
  </Box>
        ):(
            <Box p={2}>
            <Heading>GetHub search</Heading>
            <SimpleGrid gap={4} columns={2}>

            
            {
                data?.map((item)=>(<GithubUserCard key={item.id} {...item}/>
                ))}
                </SimpleGrid>
          {/* <GithubUserCard /> */}
        </Box>
        )}  
   </Box>
   
  );
}

const GithubUserCard=({
    
    avatar_url,
    login,
    html_url

})=>{

    return (
        <Box>
            <Stack direction="row" boxShadow="lg" p={4}>
                <Center>
                    <Image
                    w={"50px"} src={avatar_url}></Image>
                </Center>
                <VStack>
                    <Box>
                        <Heading>{login}</Heading>
                        <Text>{html_url}</Text>
                        <Text>Subtitle</Text>
                        <Text>Subtitle</Text>

                    </Box>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Github