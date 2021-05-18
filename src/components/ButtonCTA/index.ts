import React from 'react'
import { Button } from '@geist-ui/react'
import styled from 'styled-components'

const ButtonCTA = styled(Button)`
  height: 3.5rem !important;
  border-radius: 5px !important;
  font-weight: bolder !important;
  font-size: 1em !important;
  border: 0px !important;
  box-shadow: none !important;
  margin: 10px 0px 0px !important;
  width: 100% !important;
  text-transform: none !important;

  background-color: #4bf2cd !important;
  color: #000 !important;

  &:hover {
    background-color: #4bf2cd !important;
  }
  
  &:disabled {
    background-color:#4bf2cd !important;
    color: #333 !important;
  }
`
export default ButtonCTA;