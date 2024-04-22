//1. abc
//2. 1 123 2 123 3 321 4 undefined


//3.

let arr = [10, 12, 15, 21];

function foo(arr){
	for (let index in arr){
  	setTimeout(() => console.log(arr[index]), index*3000 );
  }
}

foo(arr);

//4. Можно использовать ключевое слово await отдельно (вне асинхронной функции) на верхнем уровне модуля. 
// Это означает, что модули с дочерними модулями, использующими await, будут ждать выполнения дочерних модулей, прежде 
// чем они сами запустятся, при этом не блокируя загрузку других дочерних модулей.

//bonus

function fetchUrl(url, count = 5){
	return new Promise(async (resolve,reject) =>{
  	fetch(url).then(res => resolve(res)).catch(e =>{
      console.log(count);
      if (count == 1){
        reject(e);
      }
      else{
        fetchUrl(url,count - 1).then(resolve).catch(reject);
      }
    })
  })
}


fetchUrl('https://google/com&#39').then(res => console.log(res)).catch(e =>console.log(e));