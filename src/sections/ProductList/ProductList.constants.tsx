export const COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Hazardous',
    dataIndex: 'isHazardous',
    key: 'isHazardous',
    render: (isHazardous: boolean) => <div>{isHazardous ? 'Yes' : 'No'}</div>
  }
]
