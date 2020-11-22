// import { wrapRootElement } from './src/apollo/wrap-root-element';
// wrapRootElement
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo//client';
import "./src/assets/css/theme.bundle.css"
import "./src/assets/css/libs.bundle.css"

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
);
// import "./src/assets/scss/theme.scss"