import { Button, Switch } from 'antd';
import React from 'react';
import s from './HomePage.module.scss'

interface HomePageProps {
  sampleProps: string
}

const HomePage = (props: HomePageProps) => {
  const { sampleProps } = props

  return (
    <div className={s.sampleModuleClass}>
      <Button>{sampleProps || 'test'}</Button>
      <Switch />
    </div>
  );
};

export default HomePage;
