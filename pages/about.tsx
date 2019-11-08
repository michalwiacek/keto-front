import React from 'react';
import Container from '../components/Container';
import SectionWrapper from '../containers/Blog/BlogSection/blogSection.style';

class About extends React.Component {
    render () {
        return (
            <SectionWrapper>
              <Container className="wip" fullWidth={false} id="wip" noGutter mobileGutter width="1200px">
                <div className="work-in-progress">
                  <h1>Work in progress</h1>
                </div>
              </Container>
            </SectionWrapper>
        );
    }
};

export default About;
