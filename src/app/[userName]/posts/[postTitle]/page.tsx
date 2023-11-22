import type { FC } from 'react';

export const runtime = 'edge';

export type UserPostPageProps = {
  params: {
    userName: string;
    postTitle: string;
  };
};

const UserPostPage: FC<UserPostPageProps> = ({
  params,
}) => {
  return (
    <div>
      <h1>{params.userName}'s post page: {params.postTitle}</h1>
    </div>
  );
};

export default UserPostPage;
