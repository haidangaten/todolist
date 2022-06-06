import React from 'react';
import Button from '@atlaskit/button';
import styledComponents from 'styled-components';
const TodoItem=styledComponents(Button)`
    text-align:left;
    margin-top: 5px;
`;

function Todo({todo}) {
    return (
        <div>
            <TodoItem shouldFitContainer>{todo.name}
            </TodoItem>
        </div>
    );
}

export default Todo;