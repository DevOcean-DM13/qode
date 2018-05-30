SELECT *
FROM questions
WHERE quiz_id = $1
ORDER BY question_id ASC