import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <nav>Navbar</nav>
      {children}
      <footer>Footer</footer>
    </main>
  );
};

export default RootLayout;
