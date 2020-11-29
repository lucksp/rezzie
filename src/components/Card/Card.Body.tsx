import React, { ReactElement, ReactNode } from 'react';

interface TitleProps {
    body: ReactNode;
}
const Body = ({ body }: TitleProps): ReactElement => {
    return <div className="card-body">{body}</div>;
};

export { Body };
