import React from 'react';

export default function InputForm({ inputHandler, PageSwitcher, storeprojet }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    storeprojet(); 
    PageSwitcher('DisplayProjectPage'); 
  };

  return (
    <div className="flex flex-col w-64 sm:w-full h-screen sm:justify-center items-center p-4 mt-8 mx-2 sm:mx-36">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex flex-row self-end gap-4 mb-4">
          <button
            type="button"
            onClick={() => PageSwitcher('DefaultPage')}
            className="bg-gray-200 border px-3 py-1 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black px-4 py-1 text-white rounded-md"
          >
            Save
          </button>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            id="title"
            className="w-full border rounded-md p-2 bg-red-50"
            onChange={inputHandler}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            id="description"
            className="w-full h-24 border rounded-md p-2 bg-red-50"
            onChange={inputHandler}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Due Date</label>
          <input
            type="date"
            id="date"
            className="w-full border rounded-md p-2 bg-red-50"
            onChange={inputHandler}
            required
          />
        </div>
      </form>
    </div>
  );
}
