import { useState } from "react";

import { useQuery } from "@apollo/client";
import CHARACTERS from "GraphQl/Queries/CHARACTERS";

export default function useCharactersList() {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(CHARACTERS, {
    variables: { page },
  });

  return {
    loading,
    error,
    characters: data?.characters?.results,
    pageInfo: data?.characters?.info,
  };
}
