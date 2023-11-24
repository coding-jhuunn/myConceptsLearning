function mergeSort(arr,l,r){
	if(l>=r){
		return;
	}
	let m =l+ parseInt((r-l)/2);
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
    console.log(m);

}

const arr =[ 12, 11, 13, 5, 6, 7,1 ];



mergeSort(arr, 0, arr.length - 1);
