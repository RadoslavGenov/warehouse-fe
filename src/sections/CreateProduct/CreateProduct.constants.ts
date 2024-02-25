import { CreateProductInput } from '../../gql/graphql'

export const INITIAL_VALUES: CreateProductInput = {
  name: '',
  description: '',
  isHazardous: false,
  amount: 0
}
