'use client';

import React from 'react';
import Link from 'next/link';

const MainHeader = () => {
  const [title, setTitle] = React.useState([
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'BioMedical Db',
      link: '/bio-medical-db',
    },
    {
      title: 'Business',
      link: '/business',
    },
    {
      title: 'Community',
      link: '/community',
    },
    {
      title: 'About',
      link: '/about',
    },
  ]);

  return (
    <header>
      <nav>
        <ul className="flex">
          {title.map((v, i) => {
            return (
              <li key={`MAIN_HEADER_LINK_${v?.link}`} className="flex grow">
                <Link
                  href={`${v.link}`}
                  style={{
                    display: 'block',
                    width: '100%',
                    fontWeight: '500',
                    textAlign: 'center',
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
