'use client';

import React from 'react';
import '../styles/globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Providers } from './providers';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>SOS - Rio Grande do Sul</title>
        <meta
          name="description"
          content="Este site foi criado para disponibilizar informações sobre os pontos de doação em Brasília destinados a auxiliar as vítimas das recentes calamidades no Rio Grande do Sul."
        />
        <meta name="keywords" content="ajuda, RS, doação" />
        <meta name="author" content="Gabriel Teixeira" />
      </head>
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
