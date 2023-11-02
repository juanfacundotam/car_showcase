import React, { ReactNode } from 'react';

type ConstructionLayoutProps = {
    children: ReactNode;
};

function ConstructionLayout({ children }: ConstructionLayoutProps) {
    return (
        <>
            <nav>
                <h3 className="text-white text-xs">Coming Soon...</h3>
            </nav>
            {children}
        </>
    );
}

export default ConstructionLayout;