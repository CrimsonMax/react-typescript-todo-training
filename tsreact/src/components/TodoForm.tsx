import React, { useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            let trimedValue: string = ref.current!.value.trim()
            if (trimedValue) {
                props.onAdd(ref.current!.value)
                ref.current!.value = ''
            }
        }
    }

    return (
        <div className="input-field mt2">
            <input
                // onChange={changeHandler}
                // value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Write here..."
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Enter the Task
            </label>
        </div>
    )
}