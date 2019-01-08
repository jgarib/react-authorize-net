import '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { FormComponent, FormContainer } from '..'
import Input from '../src/Input'

storiesOf('Payment form', module)
  .addDecorator(withKnobs)
  .add('with default credentials', () => {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <FormContainer
          clientKey={text('clientKey', process.env.AUTHORIZENET_CLIENTKEY)}
          apiLoginId={text('apiLoginId', process.env.AUTHORIZENET_LOGINID)}
          environment="sandbox"
          component={FormComponent}
          amount={25}
        />
      </div>
    )
  })