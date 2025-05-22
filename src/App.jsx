import Navbar from './components/Navbar';


import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      
    </main>
  )
}

export default Sentry.withProfiler(App);
