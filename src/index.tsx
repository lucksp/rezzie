import React, { ReactElement } from 'react';
import { render } from 'react-dom';

const Application = (): ReactElement => <h1>Application</h1>;

render(<Application />, document.getElementById('root'));
