import React from 'react';
import s from './HomePage.module.scss';

interface HomePageProps {
  sampleProps: string
}

const HomePage = (props: HomePageProps) => {
  const { sampleProps } = props

  return (
    <div className={s.test}>
      {sampleProps || 'HomePage'}
    </div>
  );
};

export default HomePage;
