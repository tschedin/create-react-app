import React, { component } from "react";

class TodoList extends component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                <form>
                    <input placeholder="enter task">

                    </input>
                    <button type="submit">add</button>
                </form>
                </div>
                </div>
        );        
    }
}

export default TodoList;