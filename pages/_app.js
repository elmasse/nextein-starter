import React from 'react'
import App from 'next/app'

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <style jsx global>{`
            body {
              font-size: 18px;
              font-family: "Helvetica Neue", "Lucida Grande", sans-serif;
              margin: 0;
              padding: 8px;
            }

            h1,h2,h3,h4,h5,h6 {
              font-family: Georgia;
            }

            a {
              color: #035599;
              text-decoration: none;
            }

          `}</style>
          <Component {...pageProps} />
      </div>
    )
  }
}
