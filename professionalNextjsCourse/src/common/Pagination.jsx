import { usePaginator } from '@hooks/usePaginator';

import { arrayFromNumber } from 'util/index';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const status = [
  'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium',
  'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium',
];

export default function Pagination({ elements, limit }) {
  const paginator = usePaginator();

  const pivot = arrayFromNumber(elements, limit);

  const avalibleConstrain = (item) =>
    paginator.current - 2 < item && item < paginator.current + 4 ? true : false;

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{paginator.current}</span> to{' '}
            <span className="font-medium">{pivot.length}</span> of{' '}
            <span className="font-medium">{elements.length}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => paginator.handleCurrent(paginator.current - 1)}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            {pivot.map((item) =>
              avalibleConstrain(item) ? (
                <button
                  className={item !== paginator.current ? status[1] : status[0]}
                  onClick={() => paginator.handleCurrent(item)}
                  key={`page-${item}-of-current-list`}
                >
                  {item}
                </button>
              ) : null
            )}

            <button
              onClick={() => paginator.handleCurrent(paginator.current + 1)}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
