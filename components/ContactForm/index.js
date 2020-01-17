import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Send } from 'grommet-icons';
import { Box, FormField, Select, CheckBox, TextInput, TextArea, Button } from 'grommet';

const ContactForm = () => {
  return (
    <Box
      align="stretch"
      justify="start"
      direction="column"
      gap="xxsmall"
      pad="medium"
      round="small"
      // border={{"color":"brand","size":"large","side":"left","style":"solid"}}
      // elevation="large"
    >
      <Formik
        initialValues={{
          email: '',
          name: '',
          message: '',
          topic: '',
          term1: false,
          term2: false,
        }}
        validateOnChange={false}
        validateOnBlur
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.name) {
            errors.name = 'A name is required';
          } else if (values.name.length < 3) {
            errors.name = 'Not valid name';
          }
          if (!values.message) {
            errors.message = 'A message is required';
          } else if (values.message.length < 100) {
            errors.message = 'message must be 100 characters';
          }
          if (!values.term1) {
            errors.term1 = 'Potrzebujemy zgody';
          }
          return errors;
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({
          touched,
          errors,
          values,
          getFieldProps,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          isValid,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormField label="Temat" htmlFor="topic" error={errors.topic}>
              <Select
                id="topic"
                options={['dieta', 'współpraca', 'say hi']}
                value={values.topic}
                onChange={event => setFieldValue('topic', event.value)}
              />
            </FormField>
            <FormField error={errors.message}>
              <TextArea
                resize={false}
                id="message"
                value={values.message}
                placeholder="Co Ci chodzi po głowie? :)"
                onChange={handleChange}
                label="wiadomość"
              />
            </FormField>
            <FormField label="Imie" htmlFor="name" error={errors.name}>
              <TextInput id="name" value={values.name} placeholder="jak się nazywasz?" onChange={handleChange} />
            </FormField>
            <FormField label="Email" htmlFor="email" error={errors.email}>
              <TextInput
                id="email"
                value={values.email}
                placeholder="jak możemy odpowiedzieć?"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </FormField>
            <Box align="stretch" justify="center" gap="medium" wrap={false} direction="column" pad="medium">
              <CheckBox
                label="Zgoda na przetwarzanie danych w celach marketingowych"
                name="term2"
                checked={values.term2}
                value={values.term2 || false}
                onChange={handleChange}
              />
              <CheckBox
                labelStyle={{ zIndex: 3 }}
                label={
                  <label htmlFor="term1">
                    Zgoda na przetwarzanie danych, szczegóły w <a href="/terms">regulaminie</a>
                  </label>
                }
                name="term1"
                checked={values.term1}
                value={values.term1 || false}
                onChange={handleChange}
              />
              <ErrorMessage name="term1" component="div" />
            </Box>
            <Box align="stretch" justify="start" gap="medium" wrap={false} direction="column" pad="xsmall">
              <Button
                label="Wyślij"
                type="submit"
                icon={<Send />}
                disabled={isSubmitting || !values.term1}
                primary
                reverse
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
