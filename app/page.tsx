import { Boundary } from '../ui/Boundary';
import ClientComponent from './ClientComponent';
import superjson from 'superjson';

export default function Page() {
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
    </Boundary>
  );
}
