import  { ReactNode } from 'react'

const MyContainer = ({ children }: { children:ReactNode }) => {
  return <div className="container mx-auto px-4 md:px-0">{children}</div>;
};

export default MyContainer
