// import.....................................................
import { useState, useEffect } from "react";
import * as api from "./api";

// get_location_and_search_term.....................................................
export function useBusinessSearch(term, location) {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({ term, location });

  useEffect(() => {
    setBusinesses([]);
    const fetchData = async () => {
      try {
        const rawData = await api.get("/businesses/search", searchParams);
        const resp = await rawData.json();
        console.log(resp);
        setBusinesses(resp.businesses);
        setAmountResults(resp.total);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [searchParams]);
  return [businesses, amountResults, searchParams, setSearchParams];
}
