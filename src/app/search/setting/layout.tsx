import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>세팅 헤더</div>
      {children}
    </div>
  );
};
export default Layout;
