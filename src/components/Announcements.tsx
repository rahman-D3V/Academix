import React from 'react'

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
  <div className="bg-[#EDF9FD] rounded-md p-4">
    <div className="flex items-center justify-between">
      <h2 className="font-medium">School Science Fair Scheduled</h2>
      <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
        2025-03-15
      </span>
    </div>
    <p className="text-sm text-gray-400 mt-1">
      Join us for the annual Science Fair where students display innovative experiments and projects.
    </p>
  </div>

  <div className="bg-[#F1F0FF] rounded-md p-4">
    <div className="flex items-center justify-between">
      <h2 className="font-medium">Inter-House Football Finals</h2>
      <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
        2025-03-20
      </span>
    </div>
    <p className="text-sm text-gray-400 mt-1">
      Cheer for your house as the top two football teams compete in the grand finals on the school ground.
    </p>
  </div>

  <div className="bg-[#FEFCE8] rounded-md p-4">
    <div className="flex items-center justify-between">
      <h2 className="font-medium">Art & Craft Exhibition</h2>
      <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
        2025-03-25
      </span>
    </div>
    <p className="text-sm text-gray-400 mt-1">
      Explore the creative artworks and crafts made by our talented students in this colorful exhibition.
    </p>
  </div>
</div>

    </div>
  )
}

export default Announcements