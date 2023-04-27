import { Pagination } from "@mantine/core";

type Props = {
  total: number;
  activePage: number;
  handlePage(page: number): void;
};

export function PaginationWrapper({ activePage, total, handlePage }: Props) {
  return <Pagination className={"mt-4"} value={activePage} onChange={handlePage} total={total} />;
}
