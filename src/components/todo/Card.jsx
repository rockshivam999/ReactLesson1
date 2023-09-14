import todo_icon from "../../todo_icon.svg"
import delete_icon from "../../delete_icon.svg"
import "./Card.css"
import { deleteData } from "../../backend-simulator/database"
const TodoCard = ({ data, colors, deleteData }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", color: colors.font, background: colors.bottom }}>
            <div className="cardContent">
                <img src={todo_icon} alt="" width={40} height={40} />
            </div>
            <div className="cardContent">
                {data.title}
            </div>
            <div className="cardContent">
                <img src={delete_icon} alt="" width={40} height={40} onClick={() => {
                    deleteData(data.title);
                }} />
            </div>
        </div>
    )
}

export default TodoCard