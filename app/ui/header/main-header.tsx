import { GNB } from '@/app/lib/define';
import Link from 'next/link';
import React from 'react';

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex' }}>
          {GNB.map((v) => {
            return (
              <li key={`GNB_LINK_${v.link}`} style={{ flex: 1 }}>
                <Link
                  href={`${v.link}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40,
                    fontWeight: '500',
                  }}
                >
                  {v.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
