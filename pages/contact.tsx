import React from 'react';
import 'isomorphic-fetch';

import ContactForm from '../components/ContactForm';
import ContactCopy from '../components/ContactCopy';
import Container from '../components/Container';
import SectionWrapper from '../containers/Blog/BlogSection/blogSection.style';
import { Grommet, Box } from 'grommet'

class Contact extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <Container className="contact" fullWidth={false} id="contact" noGutter mobileGutter width="1200px">
            <Grommet>
                <Box  justify="center" direction="row" flex="shrink" fill="horizontal" wrap={true}>
                    <ContactCopy />
                    <ContactForm />
                </Box>
            </Grommet>
        </Container>
      </SectionWrapper>
    );
  }
}

export default Contact;
