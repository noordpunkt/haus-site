import React, { useState } from "react";

//Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//Importing icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";

//Range date library
import "react-date-range/dist/styles.css"; // main style new Date()file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

function HeaderMini() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [numberOfGuests, setNumberOfGuests] = useState(1);

  //Router Hook
  const router = useRouter();

  const search = () => {
    router.push({
      pathname:"/search",
      query:{
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests
      }

    })
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const increase = (e) => {
    e.preventDefault();

    if (numberOfGuests >= 1) {
      setNumberOfGuests(numberOfGuests + 1);
    } else {
      setNumberOfGuests(1);
    }
  };

  const decrease = (e) => {
    e.preventDefault();

    if (numberOfGuests > 1) {
      setNumberOfGuests(numberOfGuests - 1);
    } else {
      setNumberOfGuests(1);
    }
  };

  return (
    <div>
      <header className="sticky top-0 z-50 grid grid-cols-2 md:grid md:grid-cols-2 bg-white shadow-sm px-6 py-2">
        {/* Header Left */}

        <Link href="/">
        <div className="relative flex items-center h-20 cursor-pointer my-auto">
          <Image
            src={"/haus-logo.svg"}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            priority={true}
          />
        </div>
        </Link>

        {/* Header Middle */}

        {/* <div className="grid content-center">
          <div className="w-full flex items-center bg-gray-100 rounded-full px-6 h-12">
            <div className="flex-grow">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                className="bg-transparent w-full outline-transparent outline-none text-gray-600 placeholder-gray-600"
                placeholder="Start your journey..."
              />
            </div>

            <div className="flex justify-end">
              <MagnifyingGlassIcon className="h-8 p-1 text-gray-600 rounded-full cursor-pointer" />
            </div>
          </div>
        </div> */}

        {/* Header Right */}

        <div className="flex items-center justify-end">
          <UserIcon className="h-8 p-1 text-gray-600 rounded-full cursor-pointer" />
        </div>

        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRange
              ranges={[selectionRange]}
              rangeColors={["#222222"]}
              minDate={new Date()}
              onChange={handleSelect}
            />

            <div className="flex items-center py-6 border-b border-t border-gray-200">
              <h2 className="text-black text-xl font-bold flex-grow">
                Number of guests
              </h2>

              <p className="text-black font-bold text-xl w-12">
                {numberOfGuests}
              </p>

              <button
                type="button"
                onClick={(e) => increase(e)}
                className="text-gray-800 bg-gray-200 w-6 h-6 rounded-full font-mono mr-1"
              >
                +
              </button>
              <button
                type="button"
                onClick={(e) => decrease(e)}
                className="text-gray-800 bg-gray-200 w-6 h-6 rounded-full font-mono"
              >
                -
              </button>
            </div>

            <div className="flex mx-auto py-2">
              
                <button
                  type="button"
                  onClick={() => search()}
                  className="text-white bg-black w-48 py-4 my-2 rounded-full"
                >
                  Search
                </button>
              
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default HeaderMini;
