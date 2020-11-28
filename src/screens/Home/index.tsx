import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '~/routes';
import { ReservationList } from '~screens/ReservationList';

const Home = (): ReactElement => {
    return (
        <Switch>
            <Route exact path={routes.home}>
                <h2>List of Reservations</h2>
                <ReservationList />
            </Route>
            <Route exact path={routes.create}>
                create it{' '}
            </Route>
            <Route exact path={routes.reservation()}>
                view it
            </Route>
        </Switch>
    );
};

export { Home };
