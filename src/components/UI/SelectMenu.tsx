"use client";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { categories } from "../../data";
import { ICategory } from "../../Interface";

interface IProps {
  selected: { name: string; imageURL: string };
  setSelected: (category: ICategory) => void;
}

const Select = ({ selected, setSelected }: IProps) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label className=" text-sm font-medium text-gray-700 space-y-0">
        Category
      </Listbox.Label>
      <div className="relative  ">
        <Listbox.Button className="relative py-3 shadow-2xl w-full cursor-default rounded-md bg-white  pl-3 pr-10 text-left text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <img
              alt=""
              src={selected.imageURL}
              className="h-5 w-5 flex-shrink-0 rounded-full"
            />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {categories.map((category) => (
            <Listbox.Option
              key={category.id}
              value={category}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-3 pr-9 ${
                  active ? "bg-indigo-600 text-white" : "text-gray-900"
                }`
              }
            >
              {({ selected }) => (
                <>
                  <div className="flex items-center">
                    <img
                      alt=""
                      src={category.imageURL}
                      className="h-5 w-5 flex-shrink-0 rounded-full"
                    />
                    <span
                      className={`ml-3 block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {category.name}
                    </span>
                  </div>
                  {selected && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Select;
