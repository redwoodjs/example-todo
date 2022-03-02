import TodoItem from './TodoItem'

export const on = () => {
  return <TodoItem id={1} body="Visit space" status="on" />
}

export const off = () => {
  return <TodoItem id={1} body="Visit space" status="off" />
}

export default { title: 'Components/TodoItem' }
