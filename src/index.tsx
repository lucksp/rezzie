import React, { ReactElement } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReservationsProvider } from './context/Reservations';
import { Home } from './screens/Home';

const Application = (): ReactElement => (
    <BrowserRouter>
        <ReservationsProvider>
            <Home />
        </ReservationsProvider>
    </BrowserRouter>
);

render(<Application />, document.getElementById('root'));
