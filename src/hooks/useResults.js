import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/businesses/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "manchester",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong!");
    }
  };

  return [searchApi, results, errorMessage];
};
