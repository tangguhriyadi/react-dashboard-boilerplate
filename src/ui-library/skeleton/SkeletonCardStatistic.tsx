import { DotChartOutlined } from "@ant-design/icons";
import { Skeleton, Space } from "antd";
import React from "react";

const SkeletonCardStatistic: React.FC = () => {
  return (
    <Space direction="vertical">
      <Skeleton.Input active size="default" />
      <Skeleton.Node active>
        <DotChartOutlined style={{ fontSize: 100, color: "#bfbfbf" }} />
      </Skeleton.Node>
    </Space>
  );
};

export default SkeletonCardStatistic;
