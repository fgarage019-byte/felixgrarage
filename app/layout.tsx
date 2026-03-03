import type { Metadata } from 'next'
import { Play, Lato } from 'next/font/google'
import './globals.css'

const play = Play({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-play'
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: 'Felix Garage - Diagnóstico IA em Sumaré',
  description: 'Tecnologia de precisão e gestão inteligente. 35 anos de expertise + IA diagnóstica.',
  keywords: ['oficina', 'audi', 'porsche', 'diagnóstico', 'IA', 'sumaré'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${play.variable} ${lato.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Microsoft Clarity - Mapa de Calor */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
            `,
          }}
        />
      </head>
      <body className="bg-felix-dark text-white font-lato">
        {children}
      </body>
    </html>
  )
}
