import { useEffect } from 'react'
import { useHistoryLazyQuery } from '../../gql/graphql'
import { Space, Table, Typography } from 'antd'
import { COLUMNS } from './HistoryList.constants'
const { Text } = Typography
const HistoryList: React.FC = () => {
  const [getHistory, { data }] = useHistoryLazyQuery()

  useEffect(() => {
    getHistory()
  }, [getHistory])

  return (
    <Space direction="vertical">
      <Text>History Records:</Text>
      <Table columns={COLUMNS} dataSource={data?.history || []} rowKey="id" />
    </Space>
  )
}

export default HistoryList
