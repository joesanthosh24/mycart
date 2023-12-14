import React, { useEffect } from 'react';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

const PageWrapper: React.FC<PageProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return <div>{children}</div>;
};

export default PageWrapper;
