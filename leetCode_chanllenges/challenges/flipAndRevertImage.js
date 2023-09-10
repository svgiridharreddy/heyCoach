var flipAndInvertImage = function(image) {
    for(let i = 0; i < image.length; i++){
        let row = image[i];
        let left = 0;
        let right = row.length-1;
        while(left <= right){
            if(left === right){
                row[left] = row[left] === 0 ? 1 : 0
            }else{
                row[left] = row[left] === 0 ? 1 : 0
                row[right] = row[right] === 0 ? 1 : 0
                [row[left], row[right]] = [row[right], row[left]]
            }
            left++;
            right--;
        }
    }
    return image;
};

/* 
Notes: 
given image array  = [[1,1,0],[1,0,1],[0,0,0]]
assume each sub array as row;
reverse the elements of row and replace 1 with 0 and 0 with 1;
basically we need to modify the original array and sub arrays
*/