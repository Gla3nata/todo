export const ToDoList = () => {
return(
    <div>
    <h1>To-Do List на React </h1>
    <ul className="list">
        <li>
            <span>Задача №1</span>
            <button>Удалить</button>
            <button>Выполнить</button>
            </li>
        <li><span>Задача №2</span>
            <button>Удалить</button>
            <button>Выполнить</button></li>
        <li><span>Задача №3</span>
            <button>Удалить</button>
            <button>Выполнить</button></li>
            
    </ul>
    </div>

)
}