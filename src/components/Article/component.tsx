import React, { FC } from 'react';
import { ArticleProps } from './props';

export const Article: FC<ArticleProps> = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
);
