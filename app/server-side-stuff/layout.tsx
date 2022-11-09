import superjson from 'superjson';
import { fetchCategories } from '#/lib/getCategories';
import { Boundary } from '#/ui/Boundary';
import { CounterProvider } from 'app/context/CounterContext';
import React from 'react';
import CategoryNav from './CategoryNav';
import ClickCounter from './ClickCounter';
import ClientComponent from './ClientComponent';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const categories = await fetchCategories();
  // generate date from 12/25/2020 at 12:00:00 AM
  const dates = [1, 2, 3, 4].map((int, index) => {
    return new Date(2020, 11, 25 + index, 0, 0, 0);
  });
  const date = new Date();
  return (
    <Boundary
      labels={['Server Component Boundary']}
      size="small"
      animateRerendering={false}
    >
      <>
        {dates.map((date) => {
          const dateJsonString = superjson.stringify(date);
          return <ClientComponent key={dateJsonString} date={dateJsonString} />;
        })}
      </>
      {/* <Boundary
        labels={['Counter Context Provider [Client Component]']}
        color="blue"
        size="small"
        animateRerendering={false}
      >
        <CounterProvider>
          <Boundary
            labels={['Server Component Boundary']}
            size="small"
            animateRerendering={false}
          >
            <div className="space-y-9">
              <div className="flex items-center justify-between">
                <CategoryNav categories={categories} />
              </div>

              <ClickCounter />
              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
      </Boundary> */}
    </Boundary>
  );
}
