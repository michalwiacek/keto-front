import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Fade from 'react-reveal/Fade';
import Input from 'components/elements/Input';
import Button from 'components/elements/Button';
import Text from 'components/elements/Text';
import Heading from 'components/elements/Heading';
import { newsletterData } from 'common/src/data';
import { SectionHeader } from '../../Layout/light.style';
import SectionWrapper, { FormWrapper, FormGroup } from './newsletter.style';

const Newsletter = () => {
  const { title, slogan, note } = newsletterData;

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = e => {
    let value = '';
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else if (e.target.value.length > 0) {
      setState({ ...state, valid: 'invalid' });
    } else {
      setState({ ...state, valid: '' });
    }
  };

  const handleSubscriptionForm = e => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: '', valid: '' });
    }
  };

  return (
    <SectionWrapper>
      <Fade bottom>
        <SectionHeader>
          {/* <Heading as="h5" content={title} /> */}
          <Heading content={slogan} />
        </SectionHeader>
      </Fade>
      <Fade bottom delay={30}>
        <FormWrapper onSubmit={handleSubscriptionForm}>
          <FormGroup>
            <Input
              className={state.valid}
              type="email"
              placeholder="wprowadź adres email"
              icon={<Icon icon={iosEmailOutline} />}
              iconPosition="left"
              required
              onChange={handleOnChange}
              aria-label="email"
            />
            <Button type="submit" colors="primaryWithBg" title="Zapisz się" />
          </FormGroup>
          <Text content={note} />
        </FormWrapper>
      </Fade>
    </SectionWrapper>
  );
};

export default Newsletter;
