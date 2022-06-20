import Head from 'next/head'
import {
  defaultTheme,
  Provider,
  SSRProvider,
  ActionMenu,
  Item
} from "@adobe/react-spectrum";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SSRProvider>
      <Provider theme={defaultTheme}>
        <div>
          <ActionMenu isOpen>
            <Item>Cut</Item>
            <Item>Copy</Item>
            <Item>Paste</Item>
          </ActionMenu>
        </div>
      </Provider>
    </SSRProvider>
      </main>
    </div>
  )
}
