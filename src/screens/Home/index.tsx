import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '~/routes';
import { Create } from '~screens/Create';
import { Reservation } from '~screens/Reservation';
import { ReservationList } from '~screens/ReservationList';

const Home = (): ReactElement => {
    return (
        <Switch>
            <Route exact path={routes.home}>
                <ReservationList />
            </Route>
            <Route exact path={routes.create}>
                <Create />
            </Route>
            <Route exact path={routes.reservation()}>
                <Reservation />
            </Route>
        </Switch>
    );
};

export { Home };
