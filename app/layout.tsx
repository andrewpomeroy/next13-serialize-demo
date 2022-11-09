import '#/styles/globals.css';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js App Directory Playground</title>
        <meta
          name="description"
          content="Next.js App Directory Playground"
          key="desc"
        />
      </head>
      <body className="overflow-y-scroll bg-gray-900">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
          <div className="col-span-2 col-start-2 space-y-6">
            <div className="rounded-xl border border-gray-800 bg-black p-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
