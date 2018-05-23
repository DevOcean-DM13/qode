-- DELETE FROM users
-- WHERE user_id = $1;
WITH delete_user as(
DELETE FROM quizes
WHERE user_name = $1
)
DELETE FROM users
WHERE user_name=$1
RETURNING *