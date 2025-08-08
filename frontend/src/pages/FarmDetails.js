import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { FiArrowLeft, FiMapPin, FiCrop, FiEdit, FiTrash2, FiX, FiAlertTriangle } from 'react-icons/fi';

// Mock data — in real setup, fetch from API or context
const mockFarms = [
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
];

const FarmDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const farmIndex = mockFarms.findIndex((f) => f.id === parseInt(id));
  const farmData = mockFarms[farmIndex];

  const [farm, setFarm] = useState(farmData);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [formState, setFormState] = useState({ ...farm });

  if (!farm) {
    return (
      <Layout>
        <Navbar pageTitle="Farm Not Found" />
        <div className="mt-20 text-center text-red-600 dark:text-red-400">Farm not found.</div>
      </Layout>
    );
  }

  const handleSave = () => {
    setFarm({ ...farm, ...formState });
    setShowEditDialog(false);
  };

  const handleDelete = () => {
    // Remove from mock array, navigate away (in real app, call backend)
    mockFarms.splice(farmIndex, 1);
    navigate('/myfarms');
  };

  return (
    <Layout>
      <Navbar pageTitle={farm.name} />

      <div className="max-w-5xl mx-auto mt-20 px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 mb-6"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to My Farms
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between mb-6">
            <img
              src={farm.image}
              alt={farm.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-green-800 dark:text-green-300">
              {farm.name}
            </h1>
            <div className="flex gap-3">
              <button
                onClick={() => setShowEditDialog(true)}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
              >
                <FiEdit />
                Edit
              </button>
              <button
                onClick={() => setShowDeleteDialog(true)}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm"
              >
                <FiTrash2 />
                Delete
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <FiMapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-300 mt-1" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm">{farm.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <FiCrop className="w-5 h-5 text-purple-600 dark:text-purple-300 mt-1" />
              <div>
                <p className="font-medium">Size</p>
                <p className="text-sm">{farm.size}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      {showEditDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">
                Edit Farm
              </h2>
              <button
                onClick={() => setShowEditDialog(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Farm Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Location</label>
                <input
                  type="text"
                  value={formState.location}
                  onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Size</label>
                <input
                  type="text"
                  value={formState.size}
                  onChange={(e) => setFormState({ ...formState, size: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Image URL</label>
                <input
                  type="text"
                  value={formState.image}
                  onChange={(e) => setFormState({ ...formState, image: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setShowEditDialog(false)}
                className="px-4 py-2 text-sm rounded-md border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm rounded-md bg-green-600 hover:bg-green-700 text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <div className="flex items-center gap-3 mb-4 text-red-600 dark:text-red-400">
              <FiAlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Confirm Delete</h3>
            </div>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Are you sure you want to delete <strong>{farm.name}</strong>? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
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

export default FarmDetails;
