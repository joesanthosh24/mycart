import React, { useEffect } from 'react';

import PageWrapperModule from './page-wrapper.module.scss';

import { PageProps } from '../types';

const PageWrapper: React.FC<PageProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return <div className={PageWrapperModule.wrapper}>{children}</div>;
};

export default PageWrapper;
