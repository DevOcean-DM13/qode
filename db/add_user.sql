WITH add_user as(
INSERT INTO quizes (lesson_id, user_name, pre_quiz, post_quiz)
VALUES 
(1, $1, false, true ),
(1, $1, true, false ),
(2, $1, false, true ),
(2, $1, true, false ),
(3, $1, false, true ),
(3, $1, true, false ),
(4, $1, false, true ),
(4, $1, true, false ),
(5, $1, false, true ),
(5, $1, true, false )
RETURNING * 
)
INSERT INTO users (user_name, user_password, user_email, start_date)
VALUES ($1, $2, $3, $4)
RETURNING *