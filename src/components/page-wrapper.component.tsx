import React, { useEffect } from 'react';

import PageWrapperModule from './page-wrapper.module.scss';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

const PageWrapper: React.FC<PageProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return <div className={PageWrapperModule.wrapper}>{children}</div>;
};

export default PageWrapper;
