import React from 'react'
import { Grommet, Box, Heading, Paragraph, Button, Form, FormField, TextInput, TextArea, CheckBox } from 'grommet'
import { Facebook, Instagram, Snapchat, Slack, Send } from 'grommet-icons'

export default () => {

  return (
    <Box align="stretch" justify="start" direction="column" width="medium" gap="xxsmall" elevation="none">
      <Heading level="2">
        Formy kontaktu
      </Heading>
      <Heading level="3">
        email
      </Heading>
      <Paragraph>
        info@dancingavocado.pl
      </Paragraph>
      <Heading level="3">
        telefon
      </Heading>
      <Paragraph>
        +48 22000000
      </Paragraph>
      <Heading level="3" truncate={false}>
        social media
      </Heading>
      <Box align="center" justify="start" direction="row" gap="small">
        <Button icon={<Facebook />} />
        <Button icon={<Instagram />} />
        <Button icon={<Snapchat />} />
        <Button icon={<Slack />} />
      </Box>
    </Box>
  )
};
