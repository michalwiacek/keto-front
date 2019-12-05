import React from 'react';
import 'isomorphic-fetch';

import Container from '../components/Container';
import SectionWrapper from '../containers/Blog/BlogSection/blogSection.style';
import { Grommet, Box } from 'grommet'

class Terms extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <Container className="contact" fullWidth={false} id="contact" noGutter mobileGutter width="1200px">
            <Grommet>
                <Box  justify="center" direction="row" flex="shrink" fill="horizontal" wrap={true}>
                    regulamin
                </Box>
            </Grommet>
        </Container>
      </SectionWrapper>
    );
  }
}

export default Terms;
