import React, { ReactElement, ReactNode } from 'react';

interface TitleProps {
    title: string | ReactNode;
    meta?: ReactNode;
}
const Title = ({ title, meta }: TitleProps): ReactElement => {
    return (
        <div className="card-title">
            <h2>{title}</h2>
            {meta && meta}
        </div>
    );
};

export { Title };
