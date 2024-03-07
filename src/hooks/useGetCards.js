import useSWR from "swr"

export function useGetCards(type) {

  
  const {data,error,mutate,isLoading,isValidating} = useSWR(type)

  function fetchCards() {
    // mutate()
  }

  return {data, error,isLoading,isValidating,onFetchCards:fetchCards}
  }