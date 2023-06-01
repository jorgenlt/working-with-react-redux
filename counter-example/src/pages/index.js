import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import store from '../app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from '../serviceWorker';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  )
}
