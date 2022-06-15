import styled from 'styled-components'
import Check from 'src/components/Check'
import { useEffect, useRef, useState } from 'react'

const TodoItem = ({ id, body, status, onClickCheck, onClickSave }) => {
  const [editTodo, setEditTodo] = useState(false)
  const [newTodo, setNewTodo] = useState(body)
  const inputRef = useRef()

  const handleCheck = () => {
    const newStatus = status === 'off' ? 'on' : 'off'
    onClickCheck(id, newStatus)
  }

  const handleSave = () => {
    onClickSave(id, newTodo)
    setEditTodo(false)
  }

  useEffect(() => {
    if (editTodo) {
      inputRef.current.focus()
    }
  }, [editTodo])

  const Todo = () => (
    <>
      {status === 'on' ? <s>{body}</s> : body}
      <SC.Button type="submit" value="Edit" onClick={() => setEditTodo(true)} />
    </>
  )

  return (
    <SC.Item>
      <SC.Target onClick={handleCheck}>
        <Check type={status} />
      </SC.Target>
      <SC.Body>
        {!editTodo ? (
          <Todo />
        ) : (
          <>
            <SC.Input
              type="text"
              ref={inputRef}
              value={newTodo}
              onChange={(e) => {
                setNewTodo(e.target.value)
              }}
            />
            <SC.Button type="submit" value="Save Item" onClick={handleSave} />
          </>
        )}
      </SC.Body>
    </SC.Item>
  )
}

const SC = {}
SC.Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`
SC.Target = styled.div`
  cursor: pointer;
`
SC.Body = styled.div`
  list-style: none;
  font-size: 18px;
  border-top: 1px solid #efefef;
  padding: 10px 0;
  width: 100%;
`

SC.Input = styled.input`
  border: none;
  font-size: 18px;
  font-family: 'Inconsolata', monospace;
  padding: 10px 0;
  width: 75%;

  ::placeholder {
    color: #e1e1e1;
  }
`
SC.Button = styled.input`
  float: right;
  margin-top: 5px;
  border-radius: 6px;
  background-color: #8000ff;
  padding: 5px 15px;
  color: white;
  border: 0;
  font-size: 18px;
  font-family: 'Inconsolata', monospace;

  :hover {
    background-color: black;
    cursor: pointer;
  }
`

export default TodoItem
