import React from 'react'

//import { action } from '@storybook/addon-actions'

import { Okla } from 'ui'
//import QUERY from './graphql/query.graphql'
//import TestClient from 'stories/TestClient'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'Okla',
  component:Okla,
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <TestClient endpoint={ endpoint }>{ storyfn() }</TestClient>,
    ]
  }
}

export const Default = () => (
  <Okla></Okla> 
)

export const Variant = () => (
    <Okla></Okla> 
)

