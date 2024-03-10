'use client';

import React from 'react';
import Link from 'next/link';
import { GNB } from '@/app/lib/define';
import styles from '@/app/ui/component.module.scss';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <header className={styles.mainHeader}>
        <nav>
          <ul>
            {GNB.map((v) => {
              const active = v.link === pathname;

              return (
                <li key={`GNB_LINK_${v.link}`}>
                  <Link
                    href={`${v.link}`}
                    className={classNames([active && styles.active])}
                  >
                    {v.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <section>{children}</section>
      <footer></footer>
    </React.Fragment>
  );
};

export default MainLayout;
