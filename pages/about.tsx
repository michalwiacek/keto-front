import React from 'react';
import {Box, Grommet, WorldMap, Carousel, Image} from "grommet";

class About extends React.Component {
    render () {
        return (
            <Grommet full>
              <Box align="center" pad="xlarge">
              <Box height="medium" width="xlarge" overflow="hidden" margin={{ top: 'xlarge'}}>
                <Carousel fill>
                  <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                  <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                  <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                </Carousel>
              </Box>
              <Box pad='xlarge' justify="center" alignContent="center">
                <WorldMap
                  color="neutral-1"
                  continents={[
                    {
                      name: 'Europe',
                      color: 'light-5',
                      onClick: (name) => {},
                    },
                  ]}
                  alignSelf="center"
                  places={[
                    {
                      name: 'Warsaw',
                      location: [52.237049, 21.017532],
                      color: 'accent-2',
                      onClick: (name) => {},
                    },
                  ]}
                />
              </Box>
              </Box>
            </Grommet>
        );
    }
};

export default About;
