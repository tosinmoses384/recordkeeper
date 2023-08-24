import React from 'react'

type iTabProps = {
    handleTab: any;
    iTab: string;
  
    setFilterName: React.Dispatch<React.SetStateAction<string>>;
    setSearchCriteria: React.Dispatch<React.SetStateAction<string>>;
    setSearchMode: React.Dispatch<React.SetStateAction<string>>;
  };

const Tab = ({
    handleTab,
    iTab,
  
    setFilterName,
    setSearchCriteria,
    setSearchMode,
  }: iTabProps) => {
    const filterTable = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterName(e.target.value);
      };
  return (
    <div className="flex items-center flex-wrap justify-between bg-white gap-6 p-5">
    <ul
      className="overflow-x-auto flex justify-between whitespace-nowrap scrollbar-x -mb-px text-sm text-center"
      id="myTab"
      data-tabs-toggle="#myTabContent"
      role="tablist"
    >
      <li className="mr-2" role="presentation">
        <button
          onClick={handleTab}
          className={`inline-block p-4 border-b-2 ${
            iTab.includes('Teacher')
              ? 'text-[#3b82f6] border-b-[#3b82f6] hover:text-[#3b82f680] hover:border-b-[#3b82f680] dark:hover:text-[#3b82f680]'
              : 'text-[#9CA3AF] hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
          } border-transparent rounded-t-lg  `}
          id="active-tab"
          data-tabs-target="#active"
          type="button"
          role="tab"
          aria-controls="active"
          aria-selected="false"
        >
          {' '}
          Teacher<span></span>{' '}
        </button>
      </li>
      <li className="mr-2" role="presentation">
        <button
          onClick={handleTab}
          className={`inline-block p-4 border-b-2 ${
            iTab.includes('Student')
              ? 'text-[#3b82f6] border-b-[#3b82f6] hover:text-[#3b82f680] hover:border-b-[#3b82f680] dark:hover:text-[#3b82f680]'
              : 'text-[#9CA3AF] hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
          } border-transparent rounded-t-lg  `}
          id="disable-tab"
          data-tabs-target="#disable"
          type="button"
          role="tab"
          aria-controls="disable"
          aria-selected="false"
        >
          {' '}
          Student<span></span>{' '}
        </button>
      </li>
    </ul>

    {/* <div>
      <select
        onChange={(e) => {
          setSearchCriteria('searching');
          setSearchMode('isFalse');

          filterTable(e);
        }}
        id="countries"
        className="bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
      >
        <option selected value="">
          All
        </option>
        <option value="day">Today</option>
        <option value="month">Current Month</option>
        <option value="year">Current Year</option>
      </select>
    </div> */}
  </div>
  )
}

export default Tab