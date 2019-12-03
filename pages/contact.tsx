import React from 'react';
import 'isomorphic-fetch';

import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import SectionWrapper from '../containers/Blog/BlogSection/blogSection.style';

class Contact extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <Container className="contact" fullWidth={false} id="contact" noGutter mobileGutter width="1200px">
          <h1>Jakieś dane kontaktowe</h1>
          <h3>bardzo dużo danych</h3>
          <ContactForm />
        </Container>
      </SectionWrapper>
    );
  }
}

export default Contact;
