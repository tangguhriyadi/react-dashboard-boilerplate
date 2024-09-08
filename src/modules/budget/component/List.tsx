import { Button, Card, Flex, Progress } from "antd";
import React from "react";
import { useList } from "../hook/list";
import SkeletonCardStatistic from "@/ui-library/skeleton/SkeletonCardStatistic";
import { PlusCircleFilled } from "@ant-design/icons";

const List: React.FC = () => {
  const { data, isLoading } = useList();
  if (isLoading) {
    return <SkeletonCardStatistic />;
  }
  return (
    <>
      <Flex wrap gap="small">
        {data?.map((budget) => (
          <Card title={budget.name} key={budget.id}>
            <Progress type="circle" />
          </Card>
        ))}
      </Flex>
      <Button icon={<PlusCircleFilled />}>Add Budget</Button>
    </>
  );
};

export default List;
