import { ReloadButton } from './_components/reload-button';

import type { FC } from 'react';

export const runtime = 'edge';

export type UserPostModalProps = {
  params: {
    userName: string;
    postTitle: string;
  };
};

const UserPostModal: FC<UserPostModalProps> = ({
  params,
}) => {
  return (
    <div>
      <h1>{params.userName}'s post modal: {params.postTitle}</h1>
      <ReloadButton />
    </div>
  );
};

export default UserPostModal;
