'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '@/app/ui/component.module.scss';
import classNames from 'classnames/bind';
import { GNB } from '@/app/lib/define';
import Link from 'next/link';

const cx = classNames.bind(styles);

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <header className={cx('mainHeader')}>
        <nav>
          <ul>
            {GNB.map((v) => {
              const active = v.link === pathname;

              return (
                <li key={`GNB_LINK_${v.link}`}>
                  <Link href={`${v.link}`} className={cx({ active })}>
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
