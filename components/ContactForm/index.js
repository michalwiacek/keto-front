import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { Send } from 'grommet-icons';
import { Grommet, Box, Grid, FormField, TextInput, TextArea, Button, Collapsible } from 'grommet';

const ContactForm = props => {
  const [open, setOpen] = React.useState(false);

  return (
    <Grommet>
      <Box>
        <Box align="start" pad="small">
          <Button primary color="dark-1" onClick={() => setOpen(!open)} label="Napisz do nas" />
        </Box>
        <Collapsible open={open} {...props}>
          <Box background="light-1" round="medium" pad="small" alignContent="stretch">
            <Formik
              initialValues={{ email: '', name: '', message: '' }}
              validate={values => {
                const errors = {};
                // REGEX
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
                // VALIDATION
                if (!values.email) {
                  errors.email = 'Email is required';
                } else if (regex.test(values.email)) {
                  errors.email = 'Invalid email address';
                }

                if (!values.message) {
                  errors.message = 'A message is required';
                } else if (values.message.length < 100) {
                  errors.message = 'message must be 100 characters';
                }
                return errors;
              }}
              onSubmit={values => {
                console.log(values);
              }}
            >
              {({ touched, errors, values, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Grid
                    fill
                    areas={[['name', 'main'], ['formal', 'formal'], ['buttons', 'buttons']]}
                    columns={['small', 'flex']}
                    rows={['flex', 'xsmall', 'xxsmall']}
                    gap="small"
                  >
                    <Box gridArea="name">
                      <FormField label="Imie" htmlFor="name">
                        <TextInput
                          id="name"
                          value={values.name}
                          placeholder="jak się nazywasz?"
                          onChange={handleChange}
                        />
                      </FormField>
                      <FormField label="Email" htmlFor="email">
                        <TextInput
                          id="email"
                          value={values.email}
                          placeholder="jak możemy odpowiedzieć?"
                          onChange={handleChange}
                        />
                      </FormField>
                    </Box>
                    <Box gridArea="main">
                      <TextArea
                        resize={false}
                        id="message"
                        value={values.message}
                        placeholder="Co Ci chodzi po głowie? :)"
                        onChange={handleChange}
                        fill
                        label="wiadomość"
                      />
                    </Box>
                    <Box gridArea="formal">
                      <p>
                        Wysyłając oświadczasz, że zgadzasz się na <a href="/">warunki</a> przetwarzania danych.
                      </p>
                    </Box>
                    <Box gridArea="buttons" align="end">
                      <Button primary color="dark-1" icon={<Send />} type="submit" label="Wyślij" />
                    </Box>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Collapsible>
      </Box>
    </Grommet>
  );
};

export default ContactForm;
