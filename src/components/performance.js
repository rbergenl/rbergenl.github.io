import React from "react"
import { Helmet } from 'react-helmet'

const Performance = () => (
  <Helmet>
    <link rel="prefetch stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Dosis" crossorigin="true"/>
    <link rel="preconnect" href="https://firebasestorage.googleapis.com" crossorigin="true"/>
  </Helmet>
);

export default Performance;
