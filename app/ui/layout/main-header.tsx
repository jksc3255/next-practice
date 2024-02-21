'use client';

import React from 'react';
import Link from 'next/link';
import { GNB } from '@/app/lib/define';
import styles from '@/app/ui/component.module.scss';
import { usePathname } from 'next/navigation';
import className from 'classnames';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <header className={styles.mainHeader}>
        <nav>
          <ul>
            {GNB.map((v) => {
              console.log({ pathname }, v.link);
              const active = pathname === v.link;

              return (
                <li key={`GNB_LINK_${v.link}`}>
                  <Link
                    href={`${v.link}`}
                    className={className([active && styles.active])}
                  >
                    {v.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {children}
      <footer></footer>
    </React.Fragment>
  );
};

export default MainLayout;
