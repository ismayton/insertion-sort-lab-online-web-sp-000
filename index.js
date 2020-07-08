function findMinAndRemove(array)
{
  let min = array[0]
  let minIndex = 0
  for(i = 0; i < array.length; i++)
  {
    if(array[i] < min)
    {
      min = array[i]
      minIndex = i
    }
  }
  array.slice(minIndex, 1)
}

function insertionSort(array){

}
