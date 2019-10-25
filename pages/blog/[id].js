import React, {Fragment} from 'react'
import withLayout from 'components/MainLayout';
import {useRouter} from "next/router";
import Container from "../../components/Container";
import SectionWrapper from "../../containers/Blog/BlogSection/blogSection.style";

const Content = () => {
  const router = useRouter();

  return (
    <>
      <img src={router.query.thumbUrl} alt={router.query.title} />
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  )
};

const Post = () => {
  return (
  <Fragment>
    <SectionWrapper id="blog">
    <Container noGutter mobileGutter width="1200px" className="container">
      <Content />
    </Container>
    </SectionWrapper>
  </Fragment>
  )
};

export default withLayout(Post);