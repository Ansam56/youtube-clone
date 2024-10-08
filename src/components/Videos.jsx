import { Stack, Box } from "@mui/material";
import {VideoCard, ChannelCard, Loader}from "./";

export default function Videos({videos}) {
    // console.log(videos);
    // if (!videos || videos.length === 0) {
    //   return <p>Loading...</p>; 
    // }
    if(!videos||videos.length === 0) return <Loader />;

    //null
  return (
   <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
     {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}

   </Stack>
  )
}
