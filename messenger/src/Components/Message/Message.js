import "./Message.styles.css";
import PropTypes from 'prop-types';

export const Message = ({ author, text }) =>{
    return (
        <div className={author === 'robot'? 'robot-message' : 'user-message'}>
            <span>{author}: </span>
            <span>{text}</span>
        </div>
    )
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}