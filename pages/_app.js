import React from 'react'
import App from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

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
              background: #f0f0f0;
            }

            h1,h2,h3,h4 {
              font-family: Georgia;
            }

            a {
              color: #035599;
              text-decoration: none;
            }

            main > header {
              display: flex;
              flex-direction: column;
              max-width: 740px;
              margin: 0 auto;
              color: rgba(0,0,0,.84);
            }

            main > header > h1 {
              margin-left: 0px;
              padding: 8px 0 8px 8px;
              border-left: 8px solid rgba(0,0,0,.6);
            }

            main > section {
              padding: 20px;
              max-width: 740px;
              margin: 0 auto;
              color: rgba(0,0,0,.84);
              line-height: 1.5em;
              letter-spacing: -0.0034em;
            }

            section > article {
              margin-bottom: 8px;
              padding: 24px;
              background: #fefefe;
            }

            header > h1, header > h2 {
              margin-left: -4px;
            }

            header > p {
              margin-top: -18px;
              font-size: .8em;
              color: rgba(0,0,0,.75);
            }
            
            header a {
              color: rgba(0,0,0,.75);
            }

            nav {
              margin-top: 4px;
              margin-left: -4px;              
            }

            nav > a {
              color: #035599;;
            }

          `}</style>
          <Component {...pageProps} />
      </div>
    )
  }
}
