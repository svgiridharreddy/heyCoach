/* sql query to fetch big countries if population or area is greater than the given numbers; */

select name, population, area from World where area >= 3000000 or population >=25000000;