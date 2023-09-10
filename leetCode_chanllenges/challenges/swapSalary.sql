update Salary set sex = (CASE WHEN sex='f' THEN 'm' ELSE 'f' END);


/* 
write a single sql statement to update table: 

conditions: swap column sex : if sex is f swap with  m and if sex is m then swap with f
*/