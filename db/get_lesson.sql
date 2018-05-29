
SELECT *
FROM page JOIN lessons ON lessons.lesson_id = page.lesson_id
WHERE page.lesson_id = $1
ORDER BY page_id ASC