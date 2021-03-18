import React from 'react';

interface HomePageProps {
  sampleProps: string
}

const HomePage = (props: HomePageProps) => {
  const { sampleProps } = props

  return (
    <div
      className="a"
      style={{ background: 'red' }}
      onClick={console.log}
      role="presentation"
    >
      {sampleProps || 'HomePage'}
    </div>
  );
};

export default HomePage;
