import React from 'react';
import { FC } from 'react';
import { HeaderProps } from './props';

export const Header: FC<HeaderProps> = ({children, ...rest}) => <h2 {...rest}>
    {children}
</h2>;
