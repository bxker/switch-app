SELECT * FROM streams 
INNER JOIN users 
ON users.user_id = streams.user_id
ORDER BY username ASC;