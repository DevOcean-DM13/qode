WITH add_user as(
INSERT INTO sections (section_title, user_name)
VALUES 
--creates all lessons/sections upon creating a user
('What is HTML?', $1),
('Elements and Tags', $1),
('Attributes', $1),
('Layout', $1),
('Tying It All Together', $1)
RETURNING * 
)
INSERT INTO users (user_name, user_password, user_email, start_date, coding_background, purpose, goals)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *