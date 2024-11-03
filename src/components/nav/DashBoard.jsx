

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}


      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
            Add New Book
          </button>
        </header>

        {/* Dashboard Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Books</h2>
            <p className="text-3xl font-bold text-indigo-600">120</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Authors</h2>
            <p className="text-3xl font-bold text-indigo-600">45</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">New Reviews</h2>
            <p className="text-3xl font-bold text-indigo-600">32</p>
          </div>
        </section>

        {/* Books List */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Latest Books</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="py-2 px-4">Book Name</th>
                  <th className="py-2 px-4">Author</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Pather Panchali</td>
                  <td className="py-2 px-4">Bibhutibhushan Bandyopadhyay</td>
                  <td className="py-2 px-4">Novel</td>
                  <td className="py-2 px-4">4.9</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Shesher Kobita</td>
                  <td className="py-2 px-4">Rabindranath Tagore</td>
                  <td className="py-2 px-4">Romantic Novel</td>
                  <td className="py-2 px-4">4.8</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Kalbela</td>
                  <td className="py-2 px-4">Shirshendu Mukhopadhyay</td>
                  <td className="py-2 px-4">Historical Fiction</td>
                  <td className="py-2 px-4">4.6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
