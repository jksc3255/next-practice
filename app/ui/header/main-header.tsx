'use client';

import Link from 'next/link';
import React from 'react';

const MainHeader = () => {
  const [title, setTitle] = React.useState([
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'BioMedical DB',
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
              <li key={`MAIN_HEADER_LINK_${i}`} className="flex grow">
                <Link
                  href={`${v?.link}`}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 40,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}
                >
                  {v?.title}
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
