import Link from 'next/link';

export const runtime = 'edge';

const RootPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link href="/john">
        john
      </Link>
      <Link href="/smith">
        smith
      </Link>
    </div>
  );
};

export default RootPage;
