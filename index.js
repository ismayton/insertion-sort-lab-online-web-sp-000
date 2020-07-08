function findMinAndRemove(array)
{
  let min = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++)
  {
    if(array[i] < min)
    {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array)
{
  let sortedArray = [];
  sortedArray.push(findMinAndRemove(array));
  if(array.length > 0)
  {
    return insertionSort(array)
  }
  else
  {
    return sortedArray;
  }
}
