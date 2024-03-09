import useSWR from "swr"

export function useGetCards(type,options) {

  
  const {data,error,mutate,isLoading,isValidating} = useSWR(()=>type.concat(options))

  function fetchCards() {
    // mutate()
  }

  return {data, error,isLoading,isValidating,onFetchCards:fetchCards}
  }