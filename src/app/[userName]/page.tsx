import Link from 'next/link';

import type { FC } from 'react';

export const runtime = 'edge';

export type UserProfilePageProps = {
  params: {
    userName: string;
  };
};

const UserProfilePage: FC<UserProfilePageProps> = ({
  params,
}) => {
  return (
    <div>
      <h1>{params.userName}'s profile page</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={`/${params.userName}/posts/hello`}>Open post</Link>
        <Link href={`/${params.userName}/posts/goodbye`}>Open post</Link>
      </div>
    </div>
  );
};

export default UserProfilePage;
