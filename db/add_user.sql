INSERT INTO users (user_name, user_email, user_password, start_date)
VALUES ($1,$2,$3,$4)
RETURNING *