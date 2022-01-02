import { Li, Ul } from "../elements";
import { CommentsButton } from "./styles";

export default function Comments({ comments, onShowMore, allCommentsLength }) {
    return (
    <>
    <Ul>
        {comments &&
        comments.length &&
        comments.map((comment) => (
            <Li key={comment.id}>
                <h3>{comment.author}</h3>
                {comment.text}
            </Li>
        ))}
    </Ul>

    {allCommentsLength > comments.length && (
        <CommentsButton onClick={onShowMore}>Показать еще</CommentsButton>
    )}
    </>
    )
}