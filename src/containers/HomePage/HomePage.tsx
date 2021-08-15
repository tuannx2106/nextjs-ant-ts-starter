import { Button, Space, Switch } from 'antd';
import React from 'react';
import s from './HomePage.module.scss';

interface HomePageProps {
  sampleProps: string
}

const HomePage = (props: HomePageProps) => {
  const { sampleProps } = props

  return (
    <div className={s.test}>
      <p>{sampleProps || 'HomePage'}</p>
      <Space>
        <Button type="primary">adasd</Button>
        <Switch />
      </Space>
    </div>
  );
};

export default HomePage;
