import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";

export type ContentCardProps = {
  publish_at: string;
  data: number[];
  content: {
    img: string;
  }[];
};

export default function ContentCard({ content, publish_at }: ContentCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="dark-lg"
      mx="auto"
      bg="gray.900"
      border="none"
      mb={12}
    >
      <Box display="flex" justifyContent="space-between">
        <Text color="gray.400" p={4} fontWeight="medium">
          🕓 {publish_at}
        </Text>
        <Text color="gray.600" p={4} fontWeight="normal">
          {activeIndex + 1}/{content.length}
        </Text>
      </Box>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        grabCursor={true}
        modules={[Pagination, Navigation]}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
