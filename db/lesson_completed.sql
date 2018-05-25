WITH lesson_completed AS(
    --NOTE: LOOK INTO CASCADES
UPDATE users
SET current_section = $2
WHERE user_name = $3
)
UPDATE sections
SET is_completed = $4,
    time_stamp = $5,
    score=$6
WHERE user_name = $3 AND section_title = $1