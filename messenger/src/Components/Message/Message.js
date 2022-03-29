import "./Message.styles.css";

export const Message = ({ author, text }) =>{
    return (
        <div className={author === 'robot'? 'robot-message' : 'user-message'}>
            <span>{author}: </span>
            <span>{text}</span>
        </div>
    )
}