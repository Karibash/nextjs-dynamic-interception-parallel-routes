import { FC, ReactNode } from 'react';

export type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({
  children,
  modal,
}) => {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
};

export default RootLayout;
