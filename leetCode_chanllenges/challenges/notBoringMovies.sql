select *
from Cinema
where (id % 2 = 1) and description!='boring'
order by id desc;


/* select all odd numbered rows where description is not boring and arrange in descending order  */