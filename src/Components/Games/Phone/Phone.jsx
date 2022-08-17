import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom'
import { Nav } from '../Nav';
import './phone.css'
// import PlayPause from './PlayPause';
import {
    Box, ChakraProvider,
    Flex,
    Heading,
    Image,
    Button

} from '@chakra-ui/react'
    
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { GoogleAuth } from '../../Auth/GoogleOauth';
import {MdStar} from 'react-icons/md'

// async function getApps(category){
//     const response=await fetch(`http://localhost:8080/games/phone/item/${category}`)
//     .catch((err)=>{
//       console.log(err)
//     });
//     const data =await response.json();

//     //console.log(data.item)
//     return data;
// }

async function allApps(){
    try {
        const response=await fetch(`http://localhost:8080/games/phone/allitems`)
    
        const data =await response.json();

        console.log('all',data.data)
        return data;
    } catch (error) {
        console.log(error)

    }
    
    
}



export const Phone=()=>{
    // const params=useParams();
    const [cat,setCat]=React.useState('Popular Games');
    const [appData,setappData]=React.useState([])
    
    useEffect(()=>{
        allApps().then(
            res=>{
                setappData(res.data)
            }
        )
    },[])
    
    console.log('appData',appData)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };
      

    return (
        <>
            <ChakraProvider>
                <Nav/>
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Popular Games</Heading>
                    
                  <Carousel responsive={responsive}
                    className='carou'
                    swipeable={true}
                    
                    //draggable={true}
                    //   showDots={true}
                    //   responsive={responsive}
                    //   ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    //   autoPlaySpeed={1000}
                       keyBoardControl={true}
                    //   customTransition="all .5"
                    //   transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    //   deviceType={this.props.deviceType}
                    //   dotListClass="custom-dot-list-style"
                    //   itemClass="carousel-item-padding-80-px"
                  >
                    {appData.filter((app)=>app.category=='Popular Games').map((e)=>{
                        console.log('map',e)
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem'  borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Recommended for you</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Recommended for you').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Offline games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Offline games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Editors' Choice games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=="Editors' Choice games").map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Stylized games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Stylized games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Non-stop action</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Non-stop action').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Games we are playing</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Games we are playing').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Puzzle games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Puzzle games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Casual games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Casual games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Realistic games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Realistic games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Multiplayer games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Multiplayer games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Simulation games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Simulation games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Sports games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Sports games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box>
                    <Heading as='h3' size='lg' ml='8%'>Anime games</Heading>
                    
                  <Carousel responsive={responsive}
                  className='carou'
                    swipeable={true}
                   // draggable={true}
                    infinite={true}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {appData.filter((app)=>app.category=='Anime games').map((e)=>{
                        return(
                        <div key={e._id} className="container">
                            <div className='image' >
                                <img className='image'  style={{borderRadius:'8px'}} src={e.imageUrl} alt="" />
                            </div>
                            <Flex gap='4' mt='5'>
                                <div> <Image src={e.avatar} boxSize='4.5rem' borderRadius='8px'/> </div>
                                <div>
                                    <p style={{color:'black'}}> {e.name} </p>
                                    <p> {e.field} </p>
                                    <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}><span> {e.rating}</span>  <MdStar/> </div>
                                </div>
                            </Flex>
                        </div>
                        )
                    })
                    }
                    </Carousel>
                </Box>
                
                <Box maxW='90%' m="auto" mt='4rem' mb='4rem'>
                <a href="https://play.google.com/store/apps/editorial?id=mc_editorialevergreen_games_monthly_picks_fcp">
                <Box  height='400px'  bg='rgb(50,232,183)'display='flex' alignItems='center' justifyContent='space-between'  borderRadius='8px' mb='50px'>
                    
                    <Box m='20px' p={10}>
                        <Heading as='h1' fontSize='300%'>New games on Play</Heading>
                        <Button colorScheme='black' variant='outline' m='20px 0px'>Discover More</Button>
                    </Box>
                    <Box>
                        <Image src='https://play-lh.googleusercontent.com/OiirfTX-viH7FmYCfNDLV_Fb8WEgy8N_b7CKrz7siywuoEwlNpkp_4Noc1uKHvcubloouArdjg=w490-h245-rw' height='400px' borderRadius='8rem'></Image>
                    </Box>
                    
                </Box>
                </a>
                </Box>
                {/* <Box>
                    <button
                        onClick={() => alert('sdfj')}
                        style={{
                            border: "none",
                            backgroundColor: "black",
                            // // boxShadow: "0 0 4px 2px rgba(0,0,0,.2)",
                            cursor: "pointer",
                            height: 40,
                            outline: "none",
                            borderRadius: "100%",
                            width: 40
                        }}
                        >
                        <PlayPause buttonToShow="play" />
                    </button>
                </Box> */}


               
            </ChakraProvider>                   
        </>
    )
}