WITH delete_user as(
--NOTE: LOOK INTO CASCADES
DELETE FROM sections
WHERE user_name = $1
)
DELETE FROM users
WHERE user_name=$1