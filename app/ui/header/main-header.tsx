'use client';

import { GNB } from '@/app/lib/define';
import Link from 'next/link';
import React from 'react';
import styles from '@/app/ui/component.module.scss';

const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <nav>
        <ul>
          {GNB.map((v) => {
            return (
              <li key={`GNB_LINK_${v.link}`}>
                <Link href={`${v.link}`}>{v.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
