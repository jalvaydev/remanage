import NavBar from "./navbar";
import Head from "next/head";

const Layout = ({ children, home }) => {
  return (
    <div>
      <Head>
        <title>Welcome to Chilis</title>
      </Head>
      <div className="bg-gray-800 pb-32">
        <NavBar />
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
