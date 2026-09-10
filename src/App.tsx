import './index.css';

import Header  from './components/layout/Header';
import Footer  from './components/layout/Footer';

import HeroBanner from './components/sections/HeroBanner';
import About      from './components/sections/About';
import Schedule   from './components/sections/Schedule';
import Speakers   from './components/sections/Speakers';
import Location   from './components/sections/Location';
import Partners   from './components/sections/Partners';
import IdleState  from './components/sections/IdleState';
import { EVENTS } from './data/events';
import { useCurrentEvent } from './hooks/useCurrentEvent';

function App() {
  const currentEvent = useCurrentEvent(EVENTS);

  return (
    <>
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
                   focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--color-tiffany)]
                   focus:text-[var(--color-deep-blue-900)] focus:font-semibold"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo-principal">
        {currentEvent.status === 'idle' ? (
          <IdleState />
        ) : (
          <>
            <HeroBanner event={currentEvent.event} />
            <Schedule event={currentEvent.event} />
            <About event={currentEvent.event} />
            <Speakers event={currentEvent.event} />
            <Location event={currentEvent.event} />
            <Partners />
          </>
        )}
      </main>

      <Footer event={currentEvent.event ?? undefined} />
    </>
  );
}

export default App;
