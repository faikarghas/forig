import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';

class MyApp extends App {
    // NProgress
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    // handler refresh back button history
    componentDidMount() {
        Router.beforePopState(({as}) => {
          location.href = as;
        });
    }
    render() {
        const { Component, pageProps } = this.props
        return (
                <Component {...pageProps} />
        )
    }
}

export default MyApp
