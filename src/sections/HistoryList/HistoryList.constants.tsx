export const COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName'
  },

  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => <div>{amount}</div>
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type: number) => <div>{type === 1 ? 'Export' : 'Import'}</div>
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date: string) => <div>{new Date(date).toDateString()}</div>
  }
]
