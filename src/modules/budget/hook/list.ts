import { useQuery } from "@tanstack/react-query";
import httpClient from "@/utils/http-client";
import { BaseHttpResponse } from "@/utils/common-type";
import { ListScehma } from "@/modules/budget/schema/list";

const listApi = () =>
  httpClient
    .get<BaseHttpResponse<ListScehma[]>>("/budget", {
      params: {
        page: 1,
        limit: 9999,
      },
    })
    .then((res) => res.data.results);

export const useList = () => {
  return useQuery({
    queryKey: ["budgets"],
    queryFn: listApi,
  });
};
