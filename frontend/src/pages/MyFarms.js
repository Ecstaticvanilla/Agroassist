import React, { useState } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { FiPlus, FiEdit, FiTrash2, FiX, FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MyFarms = () => {
  const [farms, setFarms] = useState([
    {
      id: 1,
      name: 'Green Acres',
      location: 'Springfield',
      size: '50 acres',
      image: 'https://picsum.photos/400/200?random=4',
    },
    {
      id: 2,
      name: 'Sunny Fields',
      location: 'Riverdale',
      size: '30 acres',
      image: 'https://picsum.photos/400/200?random=5',
    },
  ]);

  const [farmToDelete, setFarmToDelete] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingFarm, setEditingFarm] = useState(null);
  const [newFarm, setNewFarm] = useState({
    name: '',
    location: '',
    size: '',
    image: '',
  });

  const confirmDelete = () => {
    if (farmToDelete) {
      setFarms(farms.filter((farm) => farm.id !== farmToDelete.id));
      setFarmToDelete(null);
    }
  };

  const handleSaveFarm = () => {
    if (!newFarm.name || !newFarm.location || !newFarm.size || !newFarm.image) {
      alert('Please fill in all fields');
      return;
    }

    if (editingFarm) {
      setFarms(farms.map(f => (f.id === editingFarm.id ? { ...editingFarm, ...newFarm } : f)));
    } else {
      const newId = Math.max(...farms.map((f) => f.id), 0) + 1;
      setFarms([...farms, { id: newId, ...newFarm }]);
    }

    setShowAddDialog(false);
    setEditingFarm(null);
    setNewFarm({ name: '', location: '', size: '', image: '' });
  };
  return (
    <Layout>
      <Navbar pageTitle="My Farms" />

      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-700 dark:text-green-300">My Farms</h1>
          <button
            onClick={() => {
              setEditingFarm(null);
              setNewFarm({ name: '', location: '', size: '', image: '' });
              setShowAddDialog(true);
            }}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
          >
            <FiPlus className="w-5 h-5" />
            Add Farm
          </button>
        </div>

        {farms.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">No farms yet. Add your first farm!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {farms.map((farm) => (
              <Link
                to={`/farms/${farm.id}`}
                key={farm.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.03]"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={farm.image}
                      alt={farm.name}
                      className="w-full h-40 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-green-800 dark:text-green-300">{farm.name}</h2>
                  <p className="text-gray-600 text-sm dark:text-gray-400">📍{farm.location}</p>
                  <p className="text-gray-600 text-sm dark:text-gray-400">🌾{farm.size}</p>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditingFarm(farm);
                        setNewFarm({
                          name: farm.name,
                          location: farm.location,
                          size: farm.size,
                          image: farm.image,
                        });
                        setShowAddDialog(true);
                      }}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <FiEdit />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setFarmToDelete(farm);
                      }}
                      className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm"
                    >
                      <FiTrash2 />
                      Delete
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Add/Edit Farm Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">
                {editingFarm ? 'Edit Farm' : 'Add New Farm'}
              </h2>
              <button onClick={() => setShowAddDialog(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Farm Name</label>
                <input
                  type="text"
                  value={newFarm.name}
                  onChange={(e) => setNewFarm({ ...newFarm, name: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Location</label>
                <input
                  type="text"
                  value={newFarm.location}
                  onChange={(e) => setNewFarm({ ...newFarm, location: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Size</label>
                <input
                  type="text"
                  value={newFarm.size}
                  onChange={(e) => setNewFarm({ ...newFarm, size: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Image URL</label>
                <input
                  type="text"
                  value={newFarm.image}
                  onChange={(e) => setNewFarm({ ...newFarm, image: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setShowAddDialog(false)}
                className="px-4 py-2 text-sm rounded-md border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveFarm}
                className="px-4 py-2 text-sm rounded-md bg-green-600 hover:bg-green-700 text-white"
              >
                {editingFarm ? 'Save Changes' : 'Add Farm'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {farmToDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <div className="flex items-center gap-3 mb-4 text-red-600 dark:text-red-400">
              <FiAlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Confirm Delete</h3>
            </div>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Are you sure you want to delete <strong>{farmToDelete.name}</strong>? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setFarmToDelete(null)}
                className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyFarms;
