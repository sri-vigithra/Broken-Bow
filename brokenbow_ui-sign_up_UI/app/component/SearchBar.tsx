"use client";

import { useState, useRef, useEffect } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import { CalendarDays, BedDouble, SlidersVertical, ChevronDown, Minus, Plus } from "lucide-react";

import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

export default function SearchBar() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

 
  const [dateRange, setDateRange] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection", 
    },
  ]);

  const [beds, setBeds] = useState(1);

  
  const [showFilters, setShowFilters] = useState(false);

  
  const [showDateRangePicker, setShowDateRangePicker] = useState(false);

  
  const filterRef = useRef<HTMLDivElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const dateRangeTriggerRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      
      if (
        filterRef.current &&
        !filterRef.current.contains(target) &&
        !target.closest('[aria-label="Toggle filters"]')
      ) {
        setShowFilters(false);
      }

      
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(target) &&
        dateRangeTriggerRef.current &&
        !dateRangeTriggerRef.current.contains(target)
      ) {
        setShowDateRangePicker(false);
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 

  
  const onSearch = () => {
    
    console.log({
      checkIn: dateRange[0].startDate,
      checkOut: dateRange[0].endDate,
      beds,
    });
    
  };

  
  const handleDateSelect = (ranges: RangeKeyDict) => {
    
    if (ranges.selection) {
      const { startDate, endDate } = ranges.selection;

      
      if (startDate && endDate) {
        setDateRange([
          {
            startDate: startDate,
            endDate: endDate,
            key: "selection",
          },
        ]);

        
        if (startDate.getTime() !== endDate.getTime()) {
          setShowDateRangePicker(false);
        }
      }
    }
  };

  
  const toggleDateRangePicker = () => {
    setShowDateRangePicker((prev) => !prev);
    
    if (!showDateRangePicker) {
      setShowFilters(false);
    }
  };

  
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
    
    if (!showFilters) {
      setShowDateRangePicker(false);
    }
  };

  return (
    <div className="relative bg-white p-2 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-2 w-full max-w-4xl mx-auto">
  
      <div
        ref={dateRangeTriggerRef} 
        onClick={toggleDateRangePicker} 
        className="flex-1 min-w-0 flex items-center justify-between px-3 py-2 rounded-md border border-gray-300 hover:border-blue-500 cursor-pointer w-full"
      >
        <CalendarDays className="text-gray-500 mr-2" size={20} />
        <div className="flex flex-col items-start flex-grow">
          <span className="text-gray-700 text-xs font-medium">Check In</span>
          <span className="text-sm font-normal text-gray-700">
           
            {format(dateRange[0].startDate, "dd MMM")}
          </span>
        </div>
        <ChevronDown className="text-gray-500 ml-auto" size={16} /> 

        
        <div className="h-8 border-l border-gray-300 mx-2"></div>

        <div className="flex flex-col items-start flex-grow">
          <span className="text-gray-700 text-xs font-medium">Check Out</span>
          <span className="text-sm font-normal text-gray-700">
            
            {format(dateRange[0].endDate, "dd MMM")}
          </span>
        </div>
        <ChevronDown className="text-gray-500 ml-auto" size={16} /> 

        
        {showDateRangePicker && (
          <div
            ref={datePickerRef} 
            className="absolute top-[calc(100%+8px)] left-0 z-30 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <DateRangePicker
              ranges={dateRange} 
              onChange={handleDateSelect} 
              months={2} 
              direction="horizontal" 
              moveRangeOnFirstSelection={false} 
            />
            
            <div className="flex justify-end p-3 bg-white border-t border-gray-200">
              <button
                onClick={() => setShowDateRangePicker(false)} 
                className="px-4 py-2 text-sm font-medium text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

     
      <div className="hidden md:block h-8 border-l border-gray-300"></div>

      <div className="flex items-center px-3 py-2 rounded-md border border-gray-300 w-full md:w-auto">
        <BedDouble className="text-gray-500 mr-2" size={20} />
        <div className="flex flex-col items-start flex-grow">
          <span className="text-gray-700 text-xs font-medium">Bed</span>
          <div className="flex items-center space-x-1 mt-1">
            <span className="text-sm font-normal text-gray-700 w-4 text-center">{beds}</span>
            
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                setBeds((b) => Math.max(1, b - 1)); 
              }}
              className="p-1 rounded-full hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <Minus size={16} />
            </button>
          
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                setBeds((b) => Math.min(5, b + 1)); 
              }}
              className="p-1 rounded-full hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block h-8 border-l border-gray-300"></div>

      <div className="relative w-full md:w-auto">
        <button
          onClick={toggleFilters} 
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none flex items-center justify-center border border-gray-300 w-full h-[46px]"
          aria-label="Toggle filters" 
        >
          <SlidersVertical className="text-gray-500" size={20} />
        </button>
      
        {showFilters && (
          <div
            ref={filterRef} 
            className="absolute top-full right-0 mt-3 bg-white border text-gray-700 rounded-md shadow-lg w-48 p-4 space-y-2 z-40"
            onClick={(e) => e.stopPropagation()}
          >
            
            <label className="flex items-center space-x-2 cursor-pointer text-sm">
              <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
              <span>Popular</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer text-sm">
              <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
              <span>Pricing high to low</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer text-sm">
              <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
              <span>Pricing low to high</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer text-sm">
              <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
              <span>Rating above 4</span>
            </label>
          </div>
        )}
      </div>

      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none transition-colors w-full md:w-auto h-[46px]"
      >
        Search
      </button>
    </div>
  );
}