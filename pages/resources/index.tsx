import { Box, Heading, Container } from "@chakra-ui/react";
import type { NextPage } from "next";

import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";

const Home: NextPage = () => {
  const [data, setData] = useState([
    {
      title: "Web Programming UNPAS",
      type: "youtube",
      link: "https://www.youtube.com/c/WebProgrammingUNPAS",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "php", "codeigniter", "laravel"],
    },
    {
      title: "Web Programming UNPAS",
      type: "youtube",
      link: "https://www.youtube.com/c/WebProgrammingUNPAS",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "php", "codeigniter", "laravel"],
    },
    {
      title: "Web Programming UNPAS",
      type: "youtube",
      link: "https://www.youtube.com/c/WebProgrammingUNPAS",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "php", "codeigniter", "laravel"],
    },
    {
      title: "Web Programming UNPAS",
      type: "youtube",
      link: "https://www.youtube.com/c/WebProgrammingUNPAS",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "php", "codeigniter", "laravel"],
    },
    {
      title: "Web Programming UNPAS",
      type: "youtube",
      link: "https://www.youtube.com/c/WebProgrammingUNPAS",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "php", "codeigniter", "laravel"],
    },
    {
      title: "Web Programming UNPAS",
      type: "youtube",
      link: "https://www.youtube.com/c/WebProgrammingUNPAS",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "php", "codeigniter", "laravel"],
    },
    {
      title: "Web Programming UNPAS",
      type: "youtube",
      link: "https://www.youtube.com/c/WebProgrammingUNPAS",
      categories: ["fullstack-web"],
      tags: ["html", "css", "javascript", "php", "codeigniter", "laravel"],
    },
  ]);
  useEffect(() => {}, []);

  return (
    <PageContainer>
      <Container>
        {data.map((item, index) => (
          <Box
            key={index}
            boxShadow="md"
            padding="8"
            bg="white"
            mb="4"
            borderRadius="4"
          >
            <Heading size="md" marginBottom="4">
              {item.title}
            </Heading>
            <Box>
              {item.tags.map((tag, index) => (
                <Box key={index} as="span" bg="gray.200" padding="2" mr="2">
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </PageContainer>
  );
};

export default Home;
