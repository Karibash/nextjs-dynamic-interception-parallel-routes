'use client';

import { useCallback } from 'react';

import type { FC } from 'react';

export const ReloadButton: FC = () => {
  const handleClick = useCallback(() => {
    location.reload();
  }, []);

  return (
    <button onClick={handleClick}>
      Reload page
    </button>
  );
};
