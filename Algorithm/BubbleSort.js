
const arrayList = [6,3,0,5];

const rangeList =  arrayList.length;


function BubbleSort(array,range){

    let i,j,temp;
    let isSwapped;

    for(i=0;i<range-1;i++){
        isSwapped=false;

        for(j=0;j<range-i-1;j++){

            if(array[j]>array[j+1]){

                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            
                isSwapped=true;
            }
        }

    }
    if(isSwapped==false){
        return array
    }
}

function printArray(arr, size)
{
var i;
for (i = 0; i < size; i++)
	console.log(arr[i] + " ");
}

printArray(BubbleSort(arrayList,rangeList),rangeList)