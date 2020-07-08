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
  if(array.length > 0)
  {
    let newMin = findMinAndRemove(array);
    sortedArray.push(newMin);
  }
  else
  {
    return sortedArray;
  }
}
